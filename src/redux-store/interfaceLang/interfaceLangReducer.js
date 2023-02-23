const initialState = {
  '0': {
    map: 'Map',
    explore: 'Explore',
    profile: 'Profile',
    login: 'Login',
    registration: 'Sign up',
    back: 'back',
    peopleOnline: 'Users online',
    nationalMonuments: 'National monuments',
    usencoHerritage: 'UNESCO heritage',
    ukrainePopulation: 'Ukraine population',
    logout: 'logout',
    create_an_account: 'Create an account',
    already_have_an_account: 'Already have an account?',
    signin: 'Sign in',
    email: 'email',
    password: 'password',
    confirm_password: 'confirm password',
    create: 'Create',
    your_email: 'your email',
    subscription: 'Subscription',
    add_subscription: 'add subscription',
    signIn_account: 'Sign in',
    new_user: 'New user?',
    search: 'search',

    //subscription
    history: 'history',
    download_f_a: 'download',
    full_article: 'full article',
    article_f_t: 'article',
    full_translation: 'full translation',
    article_f_as: 'article',
    full_access: 'full access',

    //footer
    d_a_d: 'Design and development',
    l_c_u: 'Lviv, Ukraine',
    about_us: 'About us',
    private_policy: 'Privacy Policy',
    t_a_c: 'Term & Conditions',
    g_2_off: 'Get 20% off',
    b_s_t_n: 'By subscribing to our newsletter',

    //changer
    change: 'change',
    new: 'new',
    current: 'current',
    confirm: 'confirm',
    email_c: 'email',

    // userHistory
    empty: 'empty',

    // login
    user: 'user',
    b_e_o_p: 'bad email or password',

    //confirmEmailPage
    v_y_e_t_c_r: 'Verify your email to complete registration',
    w_h_s_a_e_t_y_e_a: 'we have sent an email to your email address',
    c_o_t_l_i_t_l: 'click on the link in the letter',
    t_r_w_b_c: 'then registration will be complete',
  },
  '1': {
    map: 'Карта',
    explore: 'Довідник',
    profile: 'Профіль',
    login: 'Вхід',
    registration: 'Реєстрація',
    back: 'назад',
    peopleOnline: 'Користувачі онлайн',
    nationalMonuments: 'Національні монументи',
    usencoHerritage: 'Спадщина ЮНЕСКО',
    ukrainePopulation: 'Популяція України',
    logout: 'вихід',
    create_an_account: 'Створити акаунт',
    already_have_an_account: 'Уже є акаунт?',
    signin: 'Вхід',
    email: 'електронна пошта',
    password: 'пароль',
    confirm_password: 'повторіть пароль',
    create: 'Створити',
    your_email: 'ваша пошта',
    subscription: 'Підписка',
    add_subscription: 'додати підписку',
    search: 'пошук',
    signIn_account: 'Ввійти в акаунт',
    new_user: 'Новий користувач?',

    //subscription
    history: 'історія',
    download_f_a: 'скачування',
    full_article: 'повної статті',
    article_f_t: 'переклад',
    full_translation: 'повної статті',
    article_f_as: 'повний доступ до',
    full_access: 'статті',

    //footer
    d_a_d: 'Дизайн і розробка',
    l_c_u: 'Львів, Україна',
    about_us: 'Про нас',
    private_policy: 'Політика конфіденційності',
    t_a_c: 'Умови користування',

    g_2_off: 'Отримай 20% знижку',
    b_s_t_n: 'Підписавшись на нашу розсилку',

    //changer
    change: 'змінити',
    new: 'нова',
    current: 'поточна',
    confirm: 'підтвердіть',
    email_c: 'електронну пошту',

    // userHistory
    empty: 'пусто',

    // login
    user: 'користувач',
    b_e_o_p: 'хибний логін або пароль',

    //confirmEmailPage
    v_y_e_t_c_r: 'Підтвердьте свою електронну адресу, щоб завершити реєстрацію',
    w_h_s_a_e_t_y_e_a: 'ми надіслали лист на вашу електронну адресу',
    c_o_t_l_i_t_l: 'натисніть на посилання в листі',
    t_r_w_b_c: 'тоді реєстрація буде завершена',
  },
}

const interfaceLangReducer = (state = initialState, action) => {
  return { ...state }
}

export default interfaceLangReducer
