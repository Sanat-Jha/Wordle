import React from 'react';
const Rules = () => {
  return (
    <div className="rules-container">
      <div className="rules-card">
        <div className="rule-item">
          <div className="color-box green"></div>
          <p className="rule-text">
            <strong>Green</strong> means the letter is in the correct position.
          </p>
        </div>
        
        <div className="rule-item">
          <div className="color-box yellow"></div>
          <p className="rule-text">
            <strong>Yellow</strong> means the letter is in the word but in the wrong position.
          </p>
        </div>
        
        <div className="rule-item">
          <div className="color-box gray"></div>
          <p className="rule-text">
            <strong>Gray</strong> means the letter is not in the word.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rules;