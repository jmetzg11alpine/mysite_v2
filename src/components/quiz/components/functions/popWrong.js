const popWrong = (setPopText, setPopupVisibility) => {
  const text = allTexts[Math.floor(Math.random() * allTexts.length)]
  setPopText(text)
  document.getElementById('quiz-pop-up').className = 'quiz-incorrect-popup-in'
  setTimeout(() => {
    document.getElementById('quiz-pop-up').className =
      'quiz-incorrect-popup-out'
  }, 1000)
}

const allTexts = [
  'wrong',
  'not correct',
  'sorry',
  'incorrecto',
  'equivocado',
  'erróneo',
  'неправильный',
  'ошибка',
]

export default popWrong
