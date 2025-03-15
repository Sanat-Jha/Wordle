import { useState, useEffect } from 'react'
import './App.css'
import WordInput from './components/trial_word'
import wordList from './assets/wordList.json'
import GameOver from './components/GameOver'
import GameWin from './components/GameWin'
import Title from './components/title'
import Rules from './components/rules'

function App() {
  const [wordlist, setWordList] = useState([]);
  const [solutionWord, setSolutionWord] = useState('');
  const [currentWord, setCurrentWord] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [gameWin, setGameWin] = useState(false);
  useEffect(() => {
    setWordList(wordList);
    console.log(wordList.length);
    const randomIndex = Math.floor(Math.random() * wordList.length);
    const randomWord = wordList[randomIndex];
    setSolutionWord(randomWord);
  }, []);
  function nextWord() {
    if (currentWord < 6) {
      setCurrentWord(currentWord + 1);
    }
    else {
      setGameOver(true);
    }
  }
  function onCorrectWord() {
    setGameWin(true);
  }
  return (
    <>
      <Title />
{[1, 2, 3, 4, 5, 6].map((num) => (
        <WordInput
          key={num}
          id={`word-${num}`}
          nextword={nextWord}
          active={currentWord === num}
          solutionWord={solutionWord}
          onCorrectWord={onCorrectWord}
          wordList={wordList}
        />
      ))}
      {gameOver && <GameOver />}
      {gameWin && <GameWin word={solutionWord} />}
      <Rules
      />
    </>
  )
}

export default App
