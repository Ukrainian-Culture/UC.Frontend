import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './footer.scss'

import PopupBlock from '../popupBlock/PopupBlock'
import { ReactComponent as LOGO } from '../../logo.svg'
import AboutUs from '../AboutUs/AboutUs'

const Footer = () => {
  const state = useSelector((state) => state)

  // current language
  const language = state.changeLanguage.lang
  //variable for text in  interface in different language
  const interfaceLang = state.interfaceLang[language]
  // ====================================================
  const [isAbout, setIsAbout] = useState(false)
  const [isPolicy, setIsPolicy] = useState(false)
  const [isTerms, setIsTerms] = useState(false)

  const content = {
    policy: {
      title: ['Privacy policy', 'Політика конфідейціності'],
      content: [
        'The privacy of visitors to our website https://uculture.github.io/ is very important to us and we are committed to protecting it. This privacy policy explains what we will do with your personal information.\n' +
          'The policy applies only to information collected on our website https://uculture.github.io/.\n' +
          '1. TERMS AND DEFINITIONS\n' +
          '1.1. "Website" (hereinafter - "Site") - an information resource on the Internet, which is located at the address https://uculture.github.io/ and contains text, graphics and other information, which is perceived as a single entity, and is supported a complex of system software tools.\n' +
          '1.2. "User" is any natural person who has ever accessed the Site.\n' +
          '1.3. "Account" - the User\'s account created at the time of authorization on the Site, which allows the Owner to identify (authorize) the User by using the User\'s account in Facebook or Google social networks.\n' +
          '1.4. "Personal data" - information or a set of information about the User that is identified or can be specifically identified.\n' +
          '1.5. "Services" (Site services) - any services that are offered on the Owner\'s Site and include, but are not limited to, the services of creating platforms for communication with business and new formats of materials and special projects, creating and improving the quality of content for readers of Users, videos production, industry special projects, direct advertising, etc.\n' +
          '2. COLLECTION AND USE OF PERSONAL DATA\n' +
          '2.1. Use of the Site requires registration and/or authorization and direct provision of personal data that can identify you, except for the case provided for in clause 2.2. Politicians\n' +
          '2.2. At your discretion, for greater ease of use of the Site, you can log in to the Site by using a personal account on Facebook or Google social networks.\n' +
          '2.3. When using the Site, we may automatically collect information related to your use of the Site.\n' +
          '2.4. We may collect, store and use the following types of your personal data:\n' +
          '- information about your computer, including IP address, geographic location, browser type and version, and operating system;\n' +
          '- information about your visits and use of this Site, duration of visits, page views and navigation routes on the Site;\n' +
          '- information such as name and email address that you enter to subscribe to our emails and/or newsletters;\n' +
          '- information generated when using our Site, including when, how often and under what circumstances you use it;\n' +
          '- information about the transactions you make through our Site, including your name, address, phone number, email address and credit card details;\n' +
          '- information contained in any messages you send to us by e-mail or through our Site, including its content and metadata;\n' +
          '- any other personal information you send us.\n' +
          '2.5. We collect only those personal data that are knowingly and voluntarily provided by you, as the subject of personal data for the purpose of using the services of the Site, which, in accordance with the requirements of the current legislation of Ukraine, is the consent of the subject of personal data to the processing of his personal data in accordance with this The policy of the purpose of their processing.\n' +
          "2.6. We guarantee that we will not sell or lease the User's personal data to third parties, except when the disclosure of your personal data is necessary to fulfill the requirements of the current legislation of Ukraine.\n" +
          '2.7. We do not collect or process information about your personal data regarding racial or ethnic origin, political, religious or ideological beliefs, membership in political parties and trade unions, criminal convictions, as well as data related to health, sexual life, biometric or genetic data (in accordance with Article 7 of the Law of Ukraine "On the Protection of Personal Data").\n' +
          '3. PERSONAL DATA PROCESSING\n' +
          '3.1. The provided personal data is processed and may be stored in the Personal Data Database or a separate table of the Site Database.\n' +
          '\n' +
          '4. PERSONAL DATA STORAGE PERIOD\n' +
          '4.1. Personal data are stored for no longer than is necessary for the purpose of their processing.\n' +
          '4.2. After you have ceased to be a User of the Site by deleting your Account on the Site, your personal data will also be automatically deleted.\n' +
          '\n' +
          '5. PROTECTION OF PERSONAL DATA\n' +
          '5.1. We use generally accepted technological and operational standards to protect information and personal data from loss, misuse, alteration or destruction, but we do not guarantee absolute security against any threats arising outside of our control.\n' +
          '5.2. We ensure the application of all relevant confidentiality obligations, as well as technical and organizational security measures to prevent unauthorized or illegal disclosure or processing of such information and data, their accidental loss\n' +
          '\n' +
          '\n' +
          '\n',
        'Конфіденційність відвідувачів нашого веб-сайту https://uculture.github.io/ дуже важлива для нас, і ми прагнемо її захищати. Ця політика конфіденційності пояснює, що ми будемо робити з вашою особистою інформацією.\n' +
          'Політика поширюється тільки на інформацію, зібрану на нашому веб-сайті https://uculture.github.io/.\n' +
          '1. ТЕРМІНИ ТА ВИЗНАЧЕННЯ\n' +
          '1.1. «Веб-сайт» (надалі – «Сайт») – інформаційний ресурс в мережі Інтернет, який розміщений за адресою https://uculture.github.io/ та містить текстову, графічну та іншу інформацію, яка сприймається як єдине ціле, та підтримується комплексом системних програмних засобів.\n' +
          '1.2. «Користувач» – будь-яка фізична особа, яка коли-небудь здійснювала доступ до Сайту.\n' +
          '1.3. «Аккаунт» – обліковий запис Користувача створений в момент авторизації на Сайті, що дозволяє Власнику ідентифікувати (авторизувати) Користувача шляхом використання облікового запису Користувача в соціальних мережах Facebook або Google.\n' +
          '1.4. «Персональні дані» – відомості чи сукупність відомостей про Користувача, яка ідентифікована або може бути конкретно ідентифікована.\n' +
          '1.5. «Послуги» (сервіси Сайту) – будь-які послуги, які пропонуються на Сайті Власника та включають у себе, але не обмежуються послугами  створення платформ для комунікації з бізнесом та нових форматів матеріалів та спецпроектів, створення та підвищення якості контенту для читачів Користувачів, відео продакшн, галузеві спецпроекти, пряма реклама тощо.\n' +
          '2. ЗБІР ТА ВИКОРИСТАННЯ ПЕРСОНАЛЬНИ ДАНИХ\n' +
          '2.1. Використання Сайту вимагає реєстрацію та/або авторизацію та безпосереднього надання персональних даних, які можуть ідентифікувати Вас, крім випадку передбаченого п. 2.2. Політики.\n' +
          '2.2. На свій розсуд, для більшої зручності використання Сайту, Ви можете авторизуватись на Сайті шляхом використання особистого облікового запису в соціальних мережах Facebook  або Google.\n' +
          '2.3. При використанні Сайту ми можемо здійснювати автоматичний збір інформації, пов’язаної із використанням Вами Сайту.\n' +
          '2.4. Ми можемо збирати, зберігати та використовувати такі типи Ваших персональних даних:\n' +
          "- інформацію про Ваш комп'ютер, включаючи IP-адресу, географічне розташування, тип і версію браузера та операційну систему;\n" +
          '- інформацію про Ваші відвідування та використання цього Сайту, тривалість відвідування, перегляд сторінок та маршрути навігації на Сайті;\n' +
          '- інформацію, таку як ім’я та адреса електронної пошти, які Ви вводите для встановлення підписки на наші електронні листи та / або інформаційні бюлетені;\n' +
          '- інформацію, яка генерується під час використання нашого Сайту, у тому числі коли, як часто та за яких обставин Ви його використовуєте;\n' +
          '- інформацію, про транзакції, які Ви здійснюєте через наш Сайт, що включає ім’я, адресу, номер телефону, електронну адресу та дані Вашої кредитної картки;\n' +
          '- інформацію, що міститься в будь-яких повідомленнях, які Ви надсилаєте нам електронною поштою або через наш Сайт, включаючи його вміст та метадані;\n' +
          '- будь-яку іншу особисту інформацію, яку Ви надсилаєте нам.\n' +
          "2.5. Ми збираємо лише ті персональні дані, які свідомо та добровільно надані Вами, як суб'єктом персональних даних в цілях використання сервісів Сайту, що відповідно до вимог чинного законодавства України є згодою суб'єкта персональних даних на обробку своїх персональних даних відповідно до сформульованої в цій Політиці мети їх обробки.\n" +
          '2.6. Ми гарантуємо, що не будемо продавати або здавати в оренду особисті дані Користувача третім сторонам, крім випадків коли розкриття Ваших персональних даних необхідне для виконання вимог чинного законодавства України.\n' +
          '2.7. Ми не збираємо та не обробляємо інформацію про Ваші персональні дані щодо расового або етнічного походження, політичних, релігійних або світоглядних переконань, членства в політичних партіях та професійних спілках, засуджень до кримінального покарання, а також даних, що стосуються здоров’я, статевого життя, біометричних або генетичних даних (відповідно до статті 7 Закону України «Про захист персональних даних»).\n' +
          '3. ОБРОБКА ПЕРСОНАЛЬНИХ ДАНИХ\n' +
          '3.1. Надані персональні дані обробляються і можуть зберігатись в Базі персональних даних чи окремій таблиці Бази даних  Сайту.\n' +
          '\n' +
          '4. ТЕРМІН ЗБЕРІГАННЯ ПЕРСОНАЛЬНИХ ДАНИХ\n' +
          '4.1. Персональні дані зберігаються на термін не більше, ніж це необхідно відповідно до мети їх обробки.\n' +
          '4.2. Після того, як Ви перестали бути Користувачем Сайту шляхом видалення свого Аккаунту на Сайті, ваші персональні дані також автоматично видаляються.\n' +
          '\n' +
          '5. ЗАХИСТ ПЕРСОНАЛЬНИХ ДАНИХ\n' +
          '5.1. Ми використовуємо загальноприйняті стандарти технологічного та операційного захисту інформації та персональних даних від втрати, неправильного використання, зміни або знищення, але ми не гарантуємо абсолютну захищеність від будь-яких загроз, що виникають поза межами нашого регулювання.\n' +
          "5.2. Ми забезпечуємо застосування всіх відповідних зобов'язань щодо дотримання конфіденційності, а також технічних і організаційних заходів безпеки для запобігання несанкціонованого або незаконного розголошення або обробки такої інформації та даних, їх випадкової втрати, знищення або пошкодження.\n" +
          '5.3. Ми маємо право поширювати персональні дані без Вашої згоди у випадку визначеному чинним законодавством України, і лише (якщо це необхідно) в інтересах національної безпеки, економічного добробуту та прав людини.\n' +
          '5.4. Якщо Ви надали / втратили доступ до свого Аккаунту, Ви несете повну та самостійну відповідальність за дії нового Користувача при використанні ним сайту та послуг сайту з Вашого Аккаунту.\n' +
          '\n' +
          '6. ВАШІ ПРАВА, ЯК КОРИСТУВАЧА (СУБ’ЄКТА ПЕРСОНАЛЬНИХ ДАНИХ)\n' +
          '6.1. Ви, як Користувач (суб’єкт персональних даних) маєте право:\n' +
          '- знати про джерела збирання, місцезнаходження своїх персональних даних, мету їх обробки, місцезнаходження Власника або дати відповідне доручення щодо отримання цієї інформації уповноваженим особам, крім випадків, встановлених Законом України «Про захист персональних даних»;\n' +
          '- на доступ до своїх персональних даних;\n' +
          '- пред’являти вмотивовану вимогу Власнику із запереченням проти обробки своїх персональних даних;\n' +
          "- на захист своїх персональних даних від незаконної обробки та випадкової втрати, знищення, пошкодження у зв'язку з умисним приховуванням, ненаданням чи несвоєчасним їх наданням, а також на захист від надання відомостей, що є недостовірними чи ганьблять Вашу честь, гідність та ділову репутацію;\n" +
          '- застосовувати засоби правового захисту в разі порушення чинного законодавства України про захист персональних даних;\n' +
          '- відкликати згоду на обробку персональних даних;\n' +
          '- знати механізм автоматичної обробки персональних даних;.\n' +
          '\n' +
          '7. ЗМІНА ПОЛІТИКИ\n' +
          '7.1. Ми залишаємо за собою право публікувати окремі примітки про конфіденційність, а також у будь-який час змінювати та/або доповнювати зміст Політики на власний розсуд.\n' +
          '7.2. У випадку внесення істотних змін до Політики ми розмістимо повідомлення на Сайті та зазначено термін набрання цими змінами чинності. Якщо протягом зазначеного терміну Ви не відмовитеся від прийняття цих змін в письмовій формі, це означатиме, що Ви погодились з відповідними змінами Політики.\n',
      ],
    },
    terms: {
      title: ['Term & Condition', 'Умови користування'],
      content: [
        'These Terms and Conditions contained on this web page govern your use of the website located at https://uculture.github.io/ (the “Website”). These Terms apply in their entirety to your use of this website, and by using this website, you expressly accept all of the terms and conditions contained herein in their entirety. You must not use this website if you have any objection to any of these Terms. Please read these Terms and Conditions carefully before using this website.\n' +
          '\n' +
          'INTELLECTUAL PROPERTY RIGHTS\n' +
          'You are granted only a limited license, subject to the restrictions set forth in these Terms, to view the materials contained on this website. You must not republish material from this website (including republishing on another website), reproduce or store material from this website in any public or private electronic retrieval system; you may not reproduce, duplicate, copy, sell, resell, visit or otherwise exploit our website or the materials on our website for any commercial purpose without our express written consent. Elements of the Website are protected by trade dress, trade secret and other laws and may not be copied or imitated in whole or in part. In light of this, users agree that copies of the information will retain all copyright and other proprietary notices.\n' +
          '\n' +
          'LIMITATION\n' +
          'You are specifically prohibited from using this website in any way that causes or may cause damage to this website, use this website in violation of any applicable laws or regulations, or in any way that may cause damage to the website or any person or a legal entity.\n' +
          '\n' +
          'CLIENT PAGES\n' +
          "Certain restricted information is available on the website only to registered users who have registered to receive the information. This restricted information is considered confidential information. We allow registered customers to download, copy and use restricted information only within the customer's organization and only for purposes authorized by us.\n" +
          '\n' +
          'LEGAL TERMS\n' +
          'This website may contain other proprietary notices and copyright information, the terms of which must be observed and observed. The information on this website may contain typographical errors or technical inaccuracies. Information may be changed or updated without notice. We may also make improvements and/or changes to the products and/or programs described in this information at any time without notice.\n' +
          '\n' +
          'LIMITATION OF LIABILITY\n' +
          'If you obtain a product from UC through this website that is provided without an agreement, that product is provided "AS IS" without warranty of any kind, either express or implied, and your use of the product is at your own risk. You should take precautions to ensure that whatever you choose for your use is free of elements such as viruses, worms, trojans and other elements of a destructive nature.\n' +
          '\n' +
          'PLEASE NOTE: WE SHALL NOT BE LIABLE TO ANY PARTY FOR ANY DIRECT, INDIRECT, SPECIAL OR OTHER CONSEQUENTIAL DAMAGES ARISING FROM ANY USE OF THIS WEBSITE OR ANY HYPERLINKED WEBSITE.\n',
        'Ці Положення та умови, що містяться на цій веб-сторінці, регулюють використання вами веб-сайту https://uculture.github.io/  за адресою (надалі – «веб-сайт»). Ці Умови застосовуються в повній мірі до використання вами цього веб-сайту, і, використовуючи цей веб-сайт, ви однозначно приймаєте всі положення та умови, що містяться тут, у повному обсязі. Ви не повинні використовувати цей веб-сайт, якщо у вас є будь-які заперечення щодо будь-яких із цих Умов. Будь ласка, уважно прочитайте ці Правила та умови перед використанням цього веб-сайту.\n' +
          '\n' +
          'ПРАВО ІНТЕЛЕКТУАЛЬНОЇ ВЛАСНОСТІ\n' +
          'Вам надається лише обмежена ліцензія з урахуванням обмежень, наведених у цих Умовах, для перегляду матеріалів, що містяться на цьому веб-сайті. Ви не повинні повторно публікувати матеріали з цього веб-сайту (включаючи повторну публікацію на іншому веб-сайті), відтворювати чи зберігати матеріали з цього веб-сайту в будь-якій державній чи приватній електронній системі пошуку; ви не маєте права відтворювати, дублювати, копіювати, продавати, перепродавати, відвідувати чи іншим чином використовувати наш веб-сайт або матеріали на нашому веб-сайті з комерційною метою без нашої прямої письмової згоди. Елементи веб-сайту захищені законами про комерційний вигляд, комерційну таємницю та іншими законами, і їх не можна копіювати чи імітувати повністю чи частково. Враховуючи це, користувачі погоджуються, що копії інформації збережуть усі повідомлення про авторські права та інші права власності.\n' +
          '\n' +
          'ОБМЕЖЕННЯ\n' +
          'Вам спеціально заборонено використовувати цей веб-сайт будь-яким способом, який завдає або може завдати шкоди цьому веб-сайту, використовувати цей веб-сайт всупереч чинним законам і нормам або будь-яким чином може завдати шкоди веб-сайту або будь-якій особі чи юридичній особі.\n' +
          '\n' +
          'СТОРІНКИ КЛІЄНТІВ\n' +
          'Певна інформація з обмеженим доступом доступна на веб-сайті лише зареєстрованим користувачам, які зареєстровані для отримання інформації. Ця інформація з обмеженим доступом вважається конфіденційною інформацією. Ми дозволяємо зареєстрованим клієнтам завантажувати, копіювати та використовувати інформацію з обмеженим доступом лише в межах організації клієнта та лише для цілей, дозволених нами. \n' +
          '\n' +
          'ЮРИДИЧНІ УМОВИ\n' +
          'Цей веб-сайт може містити інші повідомлення про право власності та інформацію про авторські права, умови яких необхідно дотримуватися та дотримуватися. Інформація на цьому веб-сайті може містити друкарські помилки або технічні неточності. Інформація може бути змінена або оновлена без попередження. Ми також можемо вносити вдосконалення та/або зміни в продукти та/або програми, описані в цій інформації, у будь-який час без попередження. \n' +
          '\n' +
          'ОБМЕЖЕННЯ ВІДПОВІДАЛЬНОСТІ\n' +
          'Якщо ви отримуєте продукт від UC через цей веб-сайт, який надається без угоди, цей продукт надається «ЯК Є» без будь-яких гарантій, явних або непрямих, і використання вами цього продукту залежить від вас та на ваш власний ризик. Ви повинні вжити запобіжних заходів, щоб гарантувати, що все, що ви виберете для свого використання, не містить таких елементів, як віруси, хробаки, троянські програми та інші елементи руйнівного характеру.\n' +
          '\n' +
          'УВАГА: МИ НЕ НЕСЕМО ВІДПОВІДАЛЬНОСТІ ПЕРЕД ЖОДНОЮ СТОРОНОЮ ЗА БУДЬ-ЯКІ ПРЯМІ, НЕПРЯМІ, СПЕЦІАЛЬНІ АБО ІНШІ ПОБІЧНІ ЗБИТКИ ЗА БУДЬ-ЯКЕ ВИКОРИСТАННЯ ЦЬОГО ВЕБ-САЙТУ АБО БУДЬ-ЯКОГО ІНШОГО ВЕБ-САЙТУ З ГІПЕРПОСИЛАННЯМИ.\n',
      ],
    },
  }
  // ====================================================

  const PopupFootRender = ({ data }) => {
    return (
      <div className="popupFootRender">
        <h1 className="popupFootRender_title">{data.title[language]}</h1>
        <p className="popupFootRender_content">{data.content[language]}</p>
      </div>
    )
  }

  return (
    <>
      {isAbout ? (
        <div className="about popupFoot">
          <PopupBlock closeBtn={true} setIsVisible={setIsAbout}>
            <AboutUs />
          </PopupBlock>
        </div>
      ) : null}

      {isPolicy ? (
        <div className="privacy_policy popupFoot">
          <PopupBlock closeBtn={true} setIsVisible={setIsPolicy}>
            <PopupFootRender data={content.policy} />
          </PopupBlock>
        </div>
      ) : null}

      {isTerms ? (
        <div className="terms_conditions popupFoot">
          <PopupBlock closeBtn={true} setIsVisible={setIsTerms}>
            <PopupFootRender data={content.terms} />
          </PopupBlock>
        </div>
      ) : null}

      <div className="footer">
        <div className="footerWrap">
          <div className="footerDefaultBlock">
            <div className="footerText">
              <LOGO className="footerText_logo_svg" />
            </div>
            <div className="footerText">{interfaceLang.d_a_d}</div>
          </div>
          <div className="footerDefaultBlock">
            <div className="footerText">ucsupport@gmail.com</div>
            <div className="footerText">{interfaceLang.l_c_u}</div>
          </div>
          <div className="footerDefaultBlock">
            <div onClick={() => setIsAbout(true)} className="footerText footerTextAbout">
              {interfaceLang.about_us}
            </div>
            <div
              onClick={() => setIsPolicy(true)}
              className="footerText footerTextPolicy"
            >
              {interfaceLang.private_policy}
            </div>
            <div
              onClick={() => setIsTerms(true)}
              className="footerText footerTextTerms"
            >
              {interfaceLang.t_a_c}
            </div>
          </div>
          <div className="footerFormWrap">
            <div className="footerFormText">
              <div className="footerFormTitle">{interfaceLang.g_2_off}</div>
              <div className="footerFormSubtitle">{interfaceLang.b_s_t_n}</div>
            </div>
            <form className="footerForm">
              <input
                type="text"
                className="footerInput"
                placeholder={interfaceLang.your_email}
              />
              <button className="footerButton">📬</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
