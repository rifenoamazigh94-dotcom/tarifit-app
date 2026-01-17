// ===========================
// STATE MANAGEMENT
// ===========================

const state = {
    currentView: 'home',
    currentCategory: null,
    currentCardIndex: 0,
    userProgress: {},
    stats: {
        streak: 0,
        points: 0,
        lastVisit: null
    },
    game: {
        moves: 0,
        pairs: 0,
        timer: 0,
        timerInterval: null,
        flippedCards: [],
        matchedPairs: []
    }
};

// ===========================
// INITIALIZATION
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    updateStats();
    updateAllProgress();
    initializeEventListeners();
});

// ===========================
// LOCAL STORAGE
// ===========================

function loadProgress() {
    const saved = localStorage.getItem('tarifitProgress');
    if (saved) {
        const data = JSON.parse(saved);
        state.userProgress = data.progress || {};
        state.stats = data.stats || state.stats;

        // Update streak
        const today = new Date().toDateString();
        const lastVisit = state.stats.lastVisit;

        if (lastVisit) {
            const lastDate = new Date(lastVisit).toDateString();
            const yesterday = new Date(Date.now() - 86400000).toDateString();

            if (lastDate === yesterday) {
                state.stats.streak++;
            } else if (lastDate !== today) {
                state.stats.streak = 1;
            }
        } else {
            state.stats.streak = 1;
        }

        state.stats.lastVisit = new Date().toISOString();
    } else {
        // Initialize progress for all categories
        Object.keys(vocabularyData).forEach(category => {
            state.userProgress[category] = {};
            vocabularyData[category].forEach((item, index) => {
                state.userProgress[category][index] = 'unknown';
            });
        });
    }

    saveProgress();
}

function saveProgress() {
    const data = {
        progress: state.userProgress,
        stats: state.stats
    };
    localStorage.setItem('tarifitProgress', JSON.stringify(data));
}

// ===========================
// UI UPDATES
// ===========================

function updateStats() {
    document.getElementById('streak').textContent = state.stats.streak;
    document.getElementById('points').textContent = state.stats.points;
}

function updateAllProgress() {
    Object.keys(vocabularyData).forEach(category => {
        updateCategoryProgress(category);
    });
}

function updateCategoryProgress(category) {
    const progress = state.userProgress[category];
    if (!progress) return;

    const total = Object.keys(progress).length;
    const known = Object.values(progress).filter(status => status === 'known').length;
    const percentage = Math.round((known / total) * 100);

    const progressFill = document.querySelector(`[data-progress="${category}"]`);
    const progressText = document.querySelector(`[data-progress-text="${category}"]`);

    if (progressFill) {
        progressFill.style.width = `${percentage}%`;
    }

    if (progressText) {
        progressText.textContent = percentage;
    }
}

// ===========================
// VIEW NAVIGATION
// ===========================

function showView(viewName) {
    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active');
    });

    const targetView = document.getElementById(`${viewName}View`);
    if (targetView) {
        targetView.classList.add('active');
    }

    state.currentView = viewName;
}

// ===========================
// EVENT LISTENERS
// ===========================

function initializeEventListeners() {
    // Category cards
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;

            if (category === 'game') {
                showMemoryGame();
            } else {
                showFlashcards(category);
            }
        });
    });

    // Back buttons
    document.getElementById('backFromFlashcards').addEventListener('click', () => {
        showView('home');
    });

    document.getElementById('backFromGame').addEventListener('click', () => {
        stopGameTimer();
        showView('home');
    });

    // Flashcard controls
    document.getElementById('flashcard').addEventListener('click', flipCard);
    document.getElementById('prevCard').addEventListener('click', previousCard);
    document.getElementById('nextCard').addEventListener('click', nextCard);

    // Flashcard actions
    document.getElementById('btnKnow').addEventListener('click', () => markCard('known'));
    document.getElementById('btnLearning').addEventListener('click', () => markCard('learning'));
    document.getElementById('btnUnknown').addEventListener('click', () => markCard('unknown'));

    // Game controls
    document.getElementById('resetGame').addEventListener('click', initializeMemoryGame);
}

// ===========================
// FLASHCARDS
// ===========================

function showFlashcards(category) {
    state.currentCategory = category;
    state.currentCardIndex = 0;

    const categoryNames = {
        numbers: 'Números',
        animals: 'Animales',
        colors: 'Colores',
        family: 'Familia',
        household: 'Casa',
        food: 'Comida',
        phrases: 'Frases Comunes'
    };

    document.getElementById('flashcardCategoryTitle').textContent = categoryNames[category];
    document.getElementById('totalCards').textContent = vocabularyData[category].length;

    updateFlashcard();
    showView('flashcards');
}

function updateFlashcard() {
    const category = state.currentCategory;
    const index = state.currentCardIndex;
    const data = vocabularyData[category][index];

    document.getElementById('flashcardSpanish').textContent = data.spanish;
    document.getElementById('flashcardTarifit').textContent = data.tarifit;
    document.getElementById('flashcardPronunciation').textContent = `[${data.pronunciation}]`;
    document.getElementById('currentCard').textContent = index + 1;

    // Remove flipped state
    document.getElementById('flashcard').classList.remove('flipped');

    // Update button states
    const prevBtn = document.getElementById('prevCard');
    const nextBtn = document.getElementById('nextCard');

    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === vocabularyData[category].length - 1;

    // Highlight current status
    updateActionButtons();
}

function updateActionButtons() {
    const category = state.currentCategory;
    const index = state.currentCardIndex;
    const status = state.userProgress[category][index];

    document.querySelectorAll('.btn-action').forEach(btn => {
        btn.style.opacity = '1';
    });

    if (status === 'known') {
        document.getElementById('btnKnow').style.opacity = '1';
    } else if (status === 'learning') {
        document.getElementById('btnLearning').style.opacity = '1';
    } else {
        document.getElementById('btnUnknown').style.opacity = '1';
    }
}

function flipCard() {
    document.getElementById('flashcard').classList.toggle('flipped');
}

function previousCard() {
    if (state.currentCardIndex > 0) {
        state.currentCardIndex--;
        updateFlashcard();
    }
}

function nextCard() {
    const maxIndex = vocabularyData[state.currentCategory].length - 1;
    if (state.currentCardIndex < maxIndex) {
        state.currentCardIndex++;
        updateFlashcard();
    }
}

function markCard(status) {
    const category = state.currentCategory;
    const index = state.currentCardIndex;

    const oldStatus = state.userProgress[category][index];
    state.userProgress[category][index] = status;

    // Update points
    if (status === 'known' && oldStatus !== 'known') {
        state.stats.points += 10;
    } else if (status === 'learning' && oldStatus !== 'learning' && oldStatus !== 'known') {
        state.stats.points += 5;
    }

    updateStats();
    updateCategoryProgress(category);
    saveProgress();
    updateActionButtons();

    // Auto advance to next card
    setTimeout(() => {
        if (state.currentCardIndex < vocabularyData[category].length - 1) {
            nextCard();
        }
    }, 300);
}

// ===========================
// MEMORY GAME
// ===========================

function showMemoryGame() {
    showView('game');
    initializeMemoryGame();
}

function initializeMemoryGame() {
    // Reset game state
    state.game = {
        moves: 0,
        pairs: 0,
        timer: 0,
        timerInterval: null,
        flippedCards: [],
        matchedPairs: []
    };

    updateGameStats();
    createMemoryGrid();
    startGameTimer();
}

function createMemoryGrid() {
    const grid = document.getElementById('memoryGrid');
    grid.innerHTML = '';

    // Select 8 random words from all categories
    const allWords = [];
    Object.values(vocabularyData).forEach(category => {
        category.forEach(item => {
            allWords.push(item);
        });
    });

    // Shuffle and select 8
    const shuffled = allWords.sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 8);

    // Create pairs (Spanish and Tarifit)
    const cards = [];
    selected.forEach((item, index) => {
        cards.push({
            id: `spanish-${index}`,
            text: item.spanish,
            pairId: index,
            type: 'spanish'
        });
        cards.push({
            id: `tarifit-${index}`,
            text: item.tarifit,
            pairId: index,
            type: 'tarifit'
        });
    });

    // Shuffle cards
    cards.sort(() => Math.random() - 0.5);

    // Create card elements
    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'memory-card';
        cardElement.dataset.id = card.id;
        cardElement.dataset.pairId = card.pairId;

        const content = document.createElement('div');
        content.className = 'memory-card-content';

        const text = document.createElement('div');
        text.className = 'memory-card-text';
        text.textContent = card.text;

        content.appendChild(text);
        cardElement.appendChild(content);

        cardElement.addEventListener('click', () => handleCardClick(cardElement, card));

        grid.appendChild(cardElement);
    });
}

function handleCardClick(cardElement, card) {
    // Ignore if already flipped or matched
    if (cardElement.classList.contains('flipped') ||
        cardElement.classList.contains('matched') ||
        state.game.flippedCards.length >= 2) {
        return;
    }

    // Flip card
    cardElement.classList.add('flipped');
    state.game.flippedCards.push({ element: cardElement, card: card });

    // Check for match when 2 cards are flipped
    if (state.game.flippedCards.length === 2) {
        state.game.moves++;
        updateGameStats();

        setTimeout(checkMatch, 800);
    }
}

function checkMatch() {
    const [first, second] = state.game.flippedCards;

    if (first.card.pairId === second.card.pairId) {
        // Match!
        first.element.classList.add('matched');
        second.element.classList.add('matched');
        state.game.pairs++;
        state.stats.points += 20;
        updateStats();

        // Check if game is complete
        if (state.game.pairs === 8) {
            setTimeout(gameComplete, 500);
        }
    } else {
        // No match
        first.element.classList.remove('flipped');
        second.element.classList.remove('flipped');
    }

    state.game.flippedCards = [];
    updateGameStats();
}

function gameComplete() {
    stopGameTimer();

    // Bonus points for completion
    const timeBonus = Math.max(0, 100 - state.game.timer);
    const moveBonus = Math.max(0, 50 - state.game.moves);
    state.stats.points += timeBonus + moveBonus;

    updateStats();
    saveProgress();

    alert(`¡Felicidades! 🎉\n\nCompletaste el juego en:\n⏱️ ${formatTime(state.game.timer)}\n🎯 ${state.game.moves} movimientos\n⭐ +${timeBonus + moveBonus} puntos de bonificación`);
}

function updateGameStats() {
    document.getElementById('moves').textContent = state.game.moves;
    document.getElementById('pairs').textContent = state.game.pairs;
    document.getElementById('timer').textContent = formatTime(state.game.timer);
}

function startGameTimer() {
    stopGameTimer();
    state.game.timerInterval = setInterval(() => {
        state.game.timer++;
        updateGameStats();
    }, 1000);
}

function stopGameTimer() {
    if (state.game.timerInterval) {
        clearInterval(state.game.timerInterval);
        state.game.timerInterval = null;
    }
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// ===========================
// KEYBOARD SHORTCUTS
// ===========================

document.addEventListener('keydown', (e) => {
    if (state.currentView === 'flashcards') {
        if (e.key === 'ArrowLeft') {
            previousCard();
        } else if (e.key === 'ArrowRight') {
            nextCard();
        } else if (e.key === ' ') {
            e.preventDefault();
            flipCard();
        } else if (e.key === '1') {
            markCard('known');
        } else if (e.key === '2') {
            markCard('learning');
        } else if (e.key === '3') {
            markCard('unknown');
        }
    }
});
