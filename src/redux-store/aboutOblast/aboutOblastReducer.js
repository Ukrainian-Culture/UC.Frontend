const initialState = {
  aboutOblast: [
    { "0": 'Lviv', "1": 'Львівська', emoji: '🦁' },
    { "0": 'Volyn', "1": 'Волинська', emoji: '🌳' },
    { "0": 'Rivne', "1": 'Рівненська', emoji: '🍞' },
    { "0": 'Ternopil', "1": 'Тернопільська', emoji: '🗝️' },
    { "0": 'Ivano-Frankivsk', "1": 'Івано-Франківська', emoji: '🕊️' },
    { "0": 'Zakarpattia', "1": 'Закарпатська', emoji: '🐻' },
    { "0": 'Chernivtsi', "1": 'Чернівецька', emoji: '🐦' },
    { "0": 'Khmelnytskyi', "1": 'Хмельницька', emoji: '☀️' },
    { "0": 'Zhytomyr', "1": 'Житомирська', emoji: '🏰' },
    { "0": 'Kyiv', "1": 'Київська', emoji: '🛡️' },
    { "0": 'Vinnytsia', "1": 'Вінницька', emoji: '🌜' },
    { "0": 'Odesa', "1": 'Одеська', emoji: '⚓' },
    { "0": 'Mykolaiv', "1": 'Миколаївська', emoji: '🛶' },
    { "0": 'Kirovohrad', "1": 'Кіровоградська', emoji: '🦅' },
    { "0": 'Cherkasy', "1": 'Черкаська', emoji: '🌾' },
    { "0": 'Chernihiv', "1": 'Чернігівська', emoji: '👑' },
    { "0": 'Poltava', "1": 'Полтавська', emoji: '🏹' },
    { "0": 'Dnipropetrovsk', "1": 'Дніпропетровська', emoji: '⭐' },
    { "0": 'Kherson', "1": 'Херсонська', emoji: '🍉' },
    { "0": 'Crimea', "1": 'Автономна Республіка Крим', emoji: '🦪' },
    { "0": 'Zaporizhzhia', "1": 'Запорізька', emoji: '⚔️' },
    { "0": 'Sumy', "1": 'Сумська', emoji: '🔱' },
    { "0": 'Kharkiv', "1": 'Харківська', emoji: '📯' },
    { "0": 'Donetsk', "1": 'Донецька', emoji: '💎' },
    { "0": 'Luhansk', "1": 'Луганська', emoji: '🐎' },
  ],
  region:{
    '0': "region",
    '1': "область"
  },
  getIndex: function(region, p_arr) {
    for(let i = 0; i < p_arr.length; i++){
      if(p_arr[i]['0'] === region || p_arr[i]['1'] === region) return i
    }
  }
}

// const aboutOblast = [
//     { "0": 'Lviv', "1": 'Львівська', emoji: '' },
//     { "0": 'Volun', "1": 'Волинська', emoji: '' },
//     { "0": 'Rivne', "1": 'Рівненська', emoji: '' },
//     { "0": 'Ternopil', "1": 'Тернопільська', emoji: '' },
//     { "0": 'Ivano-Frankivsk', "1": 'Івано-Франківська', emoji: '' },
//     { "0": 'Zakarpattya', "1": 'Закарпатська', emoji: '' },
//     { "0": 'Chernivtsi', "1": 'Чернівецька', emoji: '' },
//     { "0": 'Hmelnytsk', "1": 'Хмельницька', emoji: '' },
//     { "0": 'Jytomyr', "1": 'Житомирська', emoji: '' },
//     { "0": 'Kyiv', "1": 'Київська', emoji: '' },
//     { "0": 'Vinnytsa', "1": 'Вінницька', emoji: '' },
//     { "0": 'Odessa', "1": 'Одеська', emoji: '' },
//     { "0": 'Mikolaiv', "1": 'Миколаївська', emoji: '' },
//     { "0": 'Kirovograd', "1": 'Кіровоградська', emoji: '' },
//     { "0": 'Cherkasy', "1": 'Черкаська', emoji: '' },
//     { "0": 'Chernigiv', "1": 'Чернігівська', emoji: '' },
//     { "0": 'Poltava', "1": 'Полтавська', emoji: '' },
//     { "0": 'Dnipro', "1": 'Дніпропетровська', emoji: '' },
//     { "0": 'Herson', "1": 'Херсонська', emoji: '' },
//     { "0": 'Krym', "1": 'Автономна Республіка Крим', emoji: '' },
//     { "0": 'Zaporizzya', "1": 'Запорізька', emoji: '' },
//     { "0": 'Sumy', "1": 'Сумська', emoji: '' },
//     { "0": 'Harkiv', "1": 'Харківська', emoji: '' },
//     { "0": 'Donetsk', "1": 'Донецька', emoji: '' },
//     { "0": 'Lugansk', "1": 'Луганська', emoji: '' },
//   ]

const aboutOblastReducer = (state = initialState, action) =>{
    switch(action.type){
        default:
            return state;
    }
}
export default aboutOblastReducer;
