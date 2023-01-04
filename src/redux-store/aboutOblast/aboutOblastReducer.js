const initialState = {
  aboutOblast: [
    { en_name: 'Lviv', uk_name: 'Львівська', emoji: '🦁' },
    { en_name: 'Volyn', uk_name: 'Волинська', emoji: '🌳' },
    { en_name: 'Rivne', uk_name: 'Рівненська', emoji: '🍞' },
    { en_name: 'Ternopil', uk_name: 'Тернопільська', emoji: '🗝️' },
    { en_name: 'Ivano-Frankivsk', uk_name: 'Івано-Франківська', emoji: '🕊️' },
    { en_name: 'Zakarpattia', uk_name: 'Закарпатська', emoji: '🐻' },
    { en_name: 'Chernivtsi', uk_name: 'Чернівецька', emoji: '🐦' },
    { en_name: 'Khmelnytskyi', uk_name: 'Хмельницька', emoji: '☀️' },
    { en_name: 'Zhytomyr', uk_name: 'Житомирська', emoji: '🏰' },
    { en_name: 'Kyiv', uk_name: 'Київська', emoji: '🛡️' },
    { en_name: 'Vinnytsia', uk_name: 'Вінницька', emoji: '🌜' },
    { en_name: 'Odesa', uk_name: 'Одеська', emoji: '⚓' },
    { en_name: 'Mykolaiv', uk_name: 'Миколаївська', emoji: '🛶' },
    { en_name: 'Kirovohrad', uk_name: 'Кіровоградська', emoji: '🦅' },
    { en_name: 'Cherkasy', uk_name: 'Черкаська', emoji: '🌾' },
    { en_name: 'Chernihiv', uk_name: 'Чернігівська', emoji: '👑' },
    { en_name: 'Poltava', uk_name: 'Полтавська', emoji: '🏹' },
    { en_name: 'Dnipropetrovsk', uk_name: 'Дніпропетровська', emoji: '⭐' },
    { en_name: 'Kherson', uk_name: 'Херсонська', emoji: '🍉' },
    { en_name: 'Crimea', uk_name: 'Автономна Республіка Крим', emoji: '🦪' },
    { en_name: 'Zaporizhzhia', uk_name: 'Запорізька', emoji: '⚔️' },
    { en_name: 'Sumy', uk_name: 'Сумська', emoji: '🔱' },
    { en_name: 'Kharkiv', uk_name: 'Харківська', emoji: '📯' },
    { en_name: 'Donetsk', uk_name: 'Донецька', emoji: '💎' },
    { en_name: 'Luhansk', uk_name: 'Луганська', emoji: '🐎' },
  ],
}
// const aboutOblast = [
//     { en_name: 'Lviv', uk_name: 'Львівська', emoji: '' },
//     { en_name: 'Volun', uk_name: 'Волинська', emoji: '' },
//     { en_name: 'Rivne', uk_name: 'Рівненська', emoji: '' },
//     { en_name: 'Ternopil', uk_name: 'Тернопільська', emoji: '' },
//     { en_name: 'Ivano-Frankivsk', uk_name: 'Івано-Франківська', emoji: '' },
//     { en_name: 'Zakarpattya', uk_name: 'Закарпатська', emoji: '' },
//     { en_name: 'Chernivtsi', uk_name: 'Чернівецька', emoji: '' },
//     { en_name: 'Hmelnytsk', uk_name: 'Хмельницька', emoji: '' },
//     { en_name: 'Jytomyr', uk_name: 'Житомирська', emoji: '' },
//     { en_name: 'Kyiv', uk_name: 'Київська', emoji: '' },
//     { en_name: 'Vinnytsa', uk_name: 'Вінницька', emoji: '' },
//     { en_name: 'Odessa', uk_name: 'Одеська', emoji: '' },
//     { en_name: 'Mikolaiv', uk_name: 'Миколаївська', emoji: '' },
//     { en_name: 'Kirovograd', uk_name: 'Кіровоградська', emoji: '' },
//     { en_name: 'Cherkasy', uk_name: 'Черкаська', emoji: '' },
//     { en_name: 'Chernigiv', uk_name: 'Чернігівська', emoji: '' },
//     { en_name: 'Poltava', uk_name: 'Полтавська', emoji: '' },
//     { en_name: 'Dnipro', uk_name: 'Дніпропетровська', emoji: '' },
//     { en_name: 'Herson', uk_name: 'Херсонська', emoji: '' },
//     { en_name: 'Krym', uk_name: 'Автономна Республіка Крим', emoji: '' },
//     { en_name: 'Zaporizzya', uk_name: 'Запорізька', emoji: '' },
//     { en_name: 'Sumy', uk_name: 'Сумська', emoji: '' },
//     { en_name: 'Harkiv', uk_name: 'Харківська', emoji: '' },
//     { en_name: 'Donetsk', uk_name: 'Донецька', emoji: '' },
//     { en_name: 'Lugansk', uk_name: 'Луганська', emoji: '' },
//   ]

const aboutOblastReducer = (state = initialState, action) =>{
    switch(action.type){
        default:
            return state;
    }
}
export default aboutOblastReducer;
