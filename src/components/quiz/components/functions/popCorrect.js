const popCorrect = (setPopText, setPopupVisibility) => {
  const text = allTexts[Math.floor(Math.random() * allTexts.length)]
  setPopText(text)
  document.getElementById('quiz-pop-up').className = 'quiz-correct-popup-in'
  setTimeout(() => {
    document.getElementById('quiz-pop-up').className = 'quiz-correct-popup-out'
  }, 1000)
}

const allTexts = [
  'nice',
  'good job',
  'super',
  'you are clever',
  'молодец',
  'супер',
  'огонь',
  'que bueno',
  'amazing',
  'incredible',
  'fantastic',
  'unvelievable',
  'такая печенька ты',
  'eres genial',
  'нечего себе',
  'genius',
  'dork',
]

export default popCorrect
