// Tarifit Vocabulary Database
const vocabularyData = {
    numbers: [
        { spanish: 'Uno', tarifit: 'Yiwen', pronunciation: 'yi-wen' },
        { spanish: 'Dos', tarifit: 'Sin', pronunciation: 'sin' },
        { spanish: 'Tres', tarifit: 'Krad', pronunciation: 'krad' },
        { spanish: 'Cuatro', tarifit: 'Kuẓ', pronunciation: 'kuzh' },
        { spanish: 'Cinco', tarifit: 'Semmus', pronunciation: 'sem-mus' },
        { spanish: 'Seis', tarifit: 'Sḍis', pronunciation: 'sdis' },
        { spanish: 'Siete', tarifit: 'Sa', pronunciation: 'sa' },
        { spanish: 'Ocho', tarifit: 'Tam', pronunciation: 'tam' },
        { spanish: 'Nueve', tarifit: 'Tẓa', pronunciation: 'tza' },
        { spanish: 'Diez', tarifit: 'Mraw', pronunciation: 'mraw' },
        { spanish: 'Veinte', tarifit: 'Ashrin', pronunciation: 'ash-rin' },
        { spanish: 'Cien', tarifit: 'Miyya', pronunciation: 'mi-ya' }
    ],
    
    animals: [
        { spanish: 'Perro', tarifit: 'Aydi', pronunciation: 'ay-di' },
        { spanish: 'Gato', tarifit: 'Amush', pronunciation: 'a-mush' },
        { spanish: 'Pájaro', tarifit: 'Agḍiḍ', pronunciation: 'ag-did' },
        { spanish: 'Caballo', tarifit: 'Ayis', pronunciation: 'a-yis' },
        { spanish: 'Vaca', tarifit: 'Tafunast', pronunciation: 'ta-fu-nast' },
        { spanish: 'Oveja', tarifit: 'Tikherfi', pronunciation: 'ti-kher-fi' },
        { spanish: 'Cabra', tarifit: 'Taghatt', pronunciation: 'ta-ghatt' },
        { spanish: 'Gallina', tarifit: 'Tayazit', pronunciation: 'ta-ya-zit' },
        { spanish: 'Pez', tarifit: 'Aslem', pronunciation: 'as-lem' },
        { spanish: 'León', tarifit: 'Izem', pronunciation: 'i-zem' },
        { spanish: 'Burro', tarifit: 'Aghyul', pronunciation: 'agh-yul' },
        { spanish: 'Camello', tarifit: 'Alɣem', pronunciation: 'al-ghem' }
    ],
    
    colors: [
        { spanish: 'Blanco', tarifit: 'Amellal', pronunciation: 'a-mel-lal' },
        { spanish: 'Negro', tarifit: 'Aberkan', pronunciation: 'a-ber-kan' },
        { spanish: 'Rojo', tarifit: 'Azeggagh', pronunciation: 'a-zeg-gagh' },
        { spanish: 'Verde', tarifit: 'Azegzaw', pronunciation: 'a-zeg-zaw' },
        { spanish: 'Azul', tarifit: 'Azegzaw', pronunciation: 'a-zeg-zaw' },
        { spanish: 'Amarillo', tarifit: 'Awragh', pronunciation: 'aw-ragh' },
        { spanish: 'Naranja', tarifit: 'Aččinawi', pronunciation: 'ach-chi-na-wi' },
        { spanish: 'Marrón', tarifit: 'Aqqahwi', pronunciation: 'aq-qah-wi' },
        { spanish: 'Gris', tarifit: 'Arumi', pronunciation: 'a-ru-mi' },
        { spanish: 'Rosa', tarifit: 'Awerdi', pronunciation: 'a-wer-di' }
    ],
    
    family: [
        { spanish: 'Padre', tarifit: 'Baba', pronunciation: 'ba-ba' },
        { spanish: 'Madre', tarifit: 'Yemma', pronunciation: 'yem-ma' },
        { spanish: 'Hermano', tarifit: 'Gma', pronunciation: 'gma' },
        { spanish: 'Hermana', tarifit: 'Weltma', pronunciation: 'welt-ma' },
        { spanish: 'Hijo', tarifit: 'Arraw', pronunciation: 'ar-raw' },
        { spanish: 'Hija', tarifit: 'Tayat', pronunciation: 'ta-yat' },
        { spanish: 'Abuelo', tarifit: 'Jeddi', pronunciation: 'jed-di' },
        { spanish: 'Abuela', tarifit: 'Setti', pronunciation: 'set-ti' },
        { spanish: 'Tío', tarifit: 'Ɛemmi', pronunciation: 'em-mi' },
        { spanish: 'Tía', tarifit: 'Khalti', pronunciation: 'khal-ti' },
        { spanish: 'Primo/a', tarifit: 'Arraw n ɛemmi', pronunciation: 'ar-raw n em-mi' },
        { spanish: 'Familia', tarifit: 'Tawacult', pronunciation: 'ta-wa-cult' }
    ],
    
    household: [
        { spanish: 'Casa', tarifit: 'Taddart', pronunciation: 'tad-dart' },
        { spanish: 'Puerta', tarifit: 'Tawwurt', pronunciation: 'taw-wurt' },
        { spanish: 'Ventana', tarifit: 'Tazellumt', pronunciation: 'ta-zel-lumt' },
        { spanish: 'Mesa', tarifit: 'Taṭabla', pronunciation: 'ta-ta-bla' },
        { spanish: 'Silla', tarifit: 'Takursi', pronunciation: 'ta-kur-si' },
        { spanish: 'Cama', tarifit: 'Taferkaṭ', pronunciation: 'ta-fer-kat' },
        { spanish: 'Cocina', tarifit: 'Lkuzina', pronunciation: 'l-ku-zi-na' },
        { spanish: 'Baño', tarifit: 'Bit lma', pronunciation: 'bit l-ma' },
        { spanish: 'Techo', tarifit: 'Asqef', pronunciation: 'as-qef' },
        { spanish: 'Suelo', tarifit: 'Akal', pronunciation: 'a-kal' },
        { spanish: 'Pared', tarifit: 'Agejdur', pronunciation: 'a-gej-dur' },
        { spanish: 'Lámpara', tarifit: 'Lmisbah', pronunciation: 'l-mis-bah' }
    ],
    
    food: [
        { spanish: 'Pan', tarifit: 'Aghrum', pronunciation: 'agh-rum' },
        { spanish: 'Agua', tarifit: 'Aman', pronunciation: 'a-man' },
        { spanish: 'Leche', tarifit: 'Akeffay', pronunciation: 'a-kef-fay' },
        { spanish: 'Carne', tarifit: 'Aksum', pronunciation: 'ak-sum' },
        { spanish: 'Pescado', tarifit: 'Aslem', pronunciation: 'as-lem' },
        { spanish: 'Huevo', tarifit: 'Tamellalt', pronunciation: 'ta-mel-lalt' },
        { spanish: 'Fruta', tarifit: 'Agummu', pronunciation: 'a-gum-mu' },
        { spanish: 'Verdura', tarifit: 'Tikhsayin', pronunciation: 'tikh-say-in' },
        { spanish: 'Aceite', tarifit: 'Zzit', pronunciation: 'zzit' },
        { spanish: 'Sal', tarifit: 'Tisent', pronunciation: 'ti-sent' },
        { spanish: 'Azúcar', tarifit: 'Sukkar', pronunciation: 'suk-kar' },
        { spanish: 'Té', tarifit: 'Atay', pronunciation: 'a-tay' },
        { spanish: 'Café', tarifit: 'Lqahwa', pronunciation: 'l-qah-wa' },
        { spanish: 'Miel', tarifit: 'Tamment', pronunciation: 'ta-ment' }
    ],
    
    phrases: [
        { spanish: 'Hola', tarifit: 'Azul', pronunciation: 'a-zul' },
        { spanish: 'Buenos días', tarifit: 'Sabah lkhir', pronunciation: 'sa-bah l-khir' },
        { spanish: 'Buenas tardes', tarifit: 'Msa lkhir', pronunciation: 'msa l-khir' },
        { spanish: 'Buenas noches', tarifit: 'Tisbah ɛla khir', pronunciation: 'tis-bah la khir' },
        { spanish: 'Adiós', tarifit: 'Ar tufat', pronunciation: 'ar tu-fat' },
        { spanish: 'Por favor', tarifit: 'Barakallahu fik', pronunciation: 'ba-ra-kal-la-hu fik' },
        { spanish: 'Gracias', tarifit: 'Tanmirt', pronunciation: 'tan-mirt' },
        { spanish: 'De nada', tarifit: 'Ula d kra', pronunciation: 'u-la d kra' },
        { spanish: 'Perdón', tarifit: 'Smahli', pronunciation: 'smah-li' },
        { spanish: 'Sí', tarifit: 'Yah', pronunciation: 'yah' },
        { spanish: 'No', tarifit: 'Uhu', pronunciation: 'u-hu' },
        { spanish: '¿Cómo estás?', tarifit: 'Mamek tellit?', pronunciation: 'ma-mek tel-lit' },
        { spanish: 'Estoy bien', tarifit: 'Lhamdulillah', pronunciation: 'l-ham-du-lil-lah' },
        { spanish: '¿Cómo te llamas?', tarifit: 'Mamek isemm-inek?', pronunciation: 'ma-mek i-sem-mi-nek' },
        { spanish: 'Me llamo...', tarifit: 'Isemm-inu...', pronunciation: 'i-sem-mi-nu' },
        { spanish: 'No entiendo', tarifit: 'Ur fehmegh ara', pronunciation: 'ur feh-megh a-ra' },
        { spanish: 'Te quiero', tarifit: 'Hemlegh-kem', pronunciation: 'hem-legh-kem' },
        { spanish: 'Bienvenido', tarifit: 'Merhba', pronunciation: 'merh-ba' }
    ]
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = vocabularyData;
}
