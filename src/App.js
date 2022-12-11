import './App.css';
import { useState } from 'react';

function App() {
  const [inputOne, setInputOne] = useState('');
  const [inputTwo, setInputTwo] = useState('');

  const handleClick = () => {
    console.log('Hey! Look at me!')
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          It's time for the Sunday Puzzle!
        </h1>
      </header>
      <div className='body-container'>
        <div className='last-week-challenge'>
          <h2>Last week's challenge:</h2>
          <p>Last week's challenge comes from Joseph Young of St. Cloud, Minn. who runs the website Puzzleria! Name a symbol punctuation mark on a computer keyboard. Anagram it to get the brand name of a product you might buy at a grocery, in two words. What is it?</p>
          <p>Challenge answer: Semicolon = Molson Ice</p>
          <p>Winner: Dan Peirce of Lincoln, Mass.</p>
        </div>
        <div className='this-week-challenge'>
          <h2>This week's challenge</h2>
          <p>This week's challenge comes from listener Warren Bergmann, of Neenah, Wis. Listen carefully: Many people carry _____ (4-letter word) in a _____ (5-letter word) to make _____ (9-letter word). You can rearrange the letters of the first two words (the 4- and 5-letter ones) to get the last word (the 9-letter one). What words are these?</p>
        </div>
        <div className='helper-container'>
          <h2>Puzzle Helper</h2>
          <div className='input-container'>
            <p>First word, 4 letters: </p>
            <input type='text' value={inputOne} onChange={(e) => setInputOne(e.target.value)} />
          </div>
          <div className='input-container'>
            <p>Second word, 5 letters: </p>
            <input type='text' value={inputTwo} onChange={(e) => setInputTwo(e.target.value)} />
          </div>
          <button onClick={() => handleClick()}>Find Possible Solutions</button>
          <p>Possible solutions:</p>
        </div>
      </div>
    </div>
  );
}

export default App;
