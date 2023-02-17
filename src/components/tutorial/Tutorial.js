import Joyride, { ACTIONS, EVENTS, STATUS } from 'react-joyride'
import React, { useEffect, useState } from 'react'

function Tutorial() {
  const state = {
    steps: [
      {
        title: 'Map',
        target: '.mapSection',
        content:
          'It a map, you can click on region and see: history of region and famous articles',
      },
      {
        title: 'Statistics',
        target: '.statisticSection',
        content: 'Here you can see a cool statics about Ukraine',
      },
      {
        title: 'Subscriptions',
        target: '.subscription',
        content: 'Here you can buy subscription and help our project',
      },
      {
        title: 'End',
        target: '.mapSection',
        content:
          'Also we have a "explore" menu and posibillity to change language, but find this is challenge to you <3',
      },
    ],
  }

  const [showElement, setShowElement] = React.useState(true)
  const [isTutorialStart, setStart] = React.useState(false)

  useEffect(() => {
    setTimeout(function () {
      setShowElement(false)
    }, 10000)
  }, [])

  const handleJoyrideCallback = (data) => {
    const { type } = data
    if (type === 'tooltip') {
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
          steps={state.steps}
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
