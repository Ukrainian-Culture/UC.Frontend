import Joyride, { ACTIONS, EVENTS, STATUS } from 'react-joyride'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'


function Tutorial() {
  const state = useSelector((state) => state)
  const language = state.changeLanguage.lang

  const EnglishStepsStrategy = {
    getSteps: [
      {
        title: 'Map',
        target: '.mapSection',
        content: "It's a map. Click on a region to view articles or history of the region",
      },
      {
        title: 'Statistics',
        target: '.statisticSection',
        content: 'Here you can see a cool statistics about Ukraine',
      },
      {
        title: 'Subscriptions',
        target: '.subscription',
        content: 'Here you can buy subscription to help our project',
      },
      {
        title: 'End',
        target: '.mapSection',
        content: 'Also we have an "explore" menu and posibillity to change language, But finding it will be challenge for you <3',
      },
    ],
    getNext: "Next",
    getSkip: "Skip",
    getBack: "Back",
    getLast: "Last",
    getClose: "Close"
  }

  const UkrainianStepsStartegy = {
    getSteps: [
      {
        title: "Карта",
        target: '.mapSection',
        content: "Це карта. Натисніть на регіон, щоб переглянути різні статті чи історію регіону",
      },
      {
        title: "Статистика",
        target: '.statisticSection',
        content: 'Тут ви можете побачити цікаву статистику про Україну',
      },
      {
        title: "Підписки",
        target: '.subscription',
        content: 'Тут ви можете придбати підписку, щоб допомогти нашому проекту',
      },
      {
        title: "Кінець",
        target: '.mapSection',
        content: 'Також у нас є "довідник" та можливість змінити мову, але знайти їх, це буде завдання для вас<3',
      },
    ],
    getNext: "Далі",
    getSkip: "Пропустити",
    getBack: "Назад",
    getLast: "Кінець",
    getClose: "Закрити"
  }

  const [showElement, setShowElement] = React.useState(true)
  const [isTutorialStart, setStart] = React.useState(false)
  const [tutorialLangStartegy, setStrategy] = React.useState(EnglishStepsStrategy)

  useEffect(() => {
    setTimeout(function () {
      setShowElement(false)
    }, 10000);
  }, [])

  useEffect(() => {
    switch (language) {
      case "0":
        setStrategy(EnglishStepsStrategy);
        break;
      case "1":
        setStrategy(UkrainianStepsStartegy);
        break;
      default:
        setStrategy(EnglishStepsStrategy);
    }
  }, [language]);

  const handleJoyrideCallback = ({ type, status }) => {
    if (type === 'tooltip' || status === 'complete') {
      setStart(true)
    }
  }

  return (
    <div className="app">
      {isShowTutorial() ? (
        <Joyride
          callback={handleJoyrideCallback}
          continuous
          showSkipButton
          hideCloseButton
          steps={tutorialLangStartegy.getSteps}
          showProgress
          disableOverlay={true}
          styles={{
            options: {
              arrowColor: '#fff',
              overlayColor: 'rgba(79, 26, 0, 0.4)',
              primaryColor: '#000',
              width: 700,
              zIndex: 1000,
            },
          }}
          locale={{
            next: tutorialLangStartegy.getNext,
            back: tutorialLangStartegy.getBack,
            skip: tutorialLangStartegy.getSkip,
            last: tutorialLangStartegy.getLast,
            clode: tutorialLangStartegy.getClose
          }}
        />

      ) : (
        <div></div>
      )}
    </div>
  )

  function isShowTutorial() {
    return showElement || isTutorialStart
  }
}
export default Tutorial
