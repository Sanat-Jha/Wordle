import React, { useState, useEffect, useRef } from 'react';

function WordInput({ id, active, solutionWord, wordList, nextword,onCorrectWord }) {

  const [word, setWord] = useState(['', '', '', '', '']);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (active) {
      inputRefs.current[0]?.focus();
    }
  }, [active]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (word.includes('')) {
        alert("Please fill in all the blanks");
      } 
       else {
        for (let i = 0; i < 5; i++) {
          let inputElement = inputRefs.current[i];
          inputElement.readOnly = true;
          if (word[i] === solutionWord[i]) {
            inputElement.classList.add('correctPostion');
          } else if (solutionWord.includes(word[i])) {
            inputElement.classList.add('inWord');
          } else {
            inputElement.classList.add('notInWord');
          }
          if (word.join('') === solutionWord) {
            onCorrectWord();
          }
        }
        nextword();
      }
    }
  };

  const setword = (value, index) => {
    const newWord = [...word];
    newWord[index] = value;
    setWord(newWord);

    // Focus on the next input
    if (value !== '' && index < 4) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return (
    <>
    <div onKeyDown={handleKeyDown}>
    <div className="greendot" style={{ color: active ? 'rgb(0, 255, 0)' : 'gray' }}>{id.slice(-1)}</div>
      {word.map((_, i) => (
        <input
          key={i}
          type="text"
          maxLength={1}
          readOnly={!active}
          id={`input-${id}-${i}`} // Unique ID
          ref={(el) => (inputRefs.current[i] = el)}
          value={word[i]}
          onChange={(e) => setword(e.target.value, i)}
        />
      ))}
    </div>
    </>
  );
}

export default WordInput;
