var words = [
  'bananas',
  'grapes',
  'carousel',
  'milkshake',
  'javascript',
  'limousine',
  'chocolate',
  'programming',
  'meatloaf',
  'ukulele',
  'mango'
]

// Est. HTML variables IDs

var wordtoguessEl = document.getElementById('word-to-guess')
var previouswordEl = document.getElementById('previous-word')
var incorrectlettersEl = document.getElementById('incorrect-letters')
var remainingguessesEl = document.getElementById('remaining-guesses')
var winsEl = document.getElementById('wins')
var lossesEl = document.getElementById('losses')

var currentWord = []
var correctLetters = []
var incorrectLetters = []
var guessedLetters = []
var remainingGuesses = 10
var wins = 0
var losses = 0


//start game on page load, fresh slate
function startGame() {
  randomWord = words[Math.floor(Math.random() * words.length)]
  correctLetters = []
  incorrectLetters = []
  remainingGuesses = 10

  guesses()
}

// show guesses, incorrect letters, underscores for word length
function guesses() {
  currentWord = ''
    for (let i = 0; i < randomWord.length; i++) {
      if (correctLetters.indexOf(randomWord[i]) > -1) {
        currentWord += randomWord[i]
      } else {
          currentWord += '_'
        }
    }
  remainingguessesEl.textContent = remainingGuesses
  incorrectlettersEl.textContent = incorrectLetters
  wordtoguessEl.textContent = currentWord
}

// key up responses, a/z add win/loss, letters
body = document.querySelector('body')
body.onkeyup = function(e) {
  var key = e.key.toLowerCase()
  if (!/^[a-z]{1}$/g.test(key)) return
    if (randomWord.includes(key) && correctLetters.indexOf(key) === -1) {
      correctLetters.push(key)
    } else if (!randomWord.includes(key) && incorrectLetters.indexOf(key) === -1) {
        incorrectLetters.push(key)
        remainingGuesses--
      }

  guesses()
      if (currentWord === randomWord) {
        wins++
        winsEl.textContent = wins
        previouswordEl.textContent = randomWord
        startGame ()  
      } if (remainingGuesses === 0) {
      losses++
      lossesEl.textContent = losses
      previouswordEl.textContent = randomWord
      startGame()
      }  
}

startGame()
