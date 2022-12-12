import './App.css';
import { useState } from 'react';

import nineJson from './ninelettersMegan.json';

function App() {
  const [inputOne, setInputOne] = useState('');
  const [inputTwo, setInputTwo] = useState('');
  const [solutions, setSolutions] = useState([]);
  const [oneSolutions, setOneSolutions] = useState([]);
  const [twoSolutions, setTwoSolutions] = useState([])

  const findWordsThatContain = (input) => {
    return nineJson.filter(niner => {
      let again = niner;
      return input.split('').every(el => {
        if (again.split('').includes(el)) {
          again = again.replace(el, '');
          return true;
        }
        return false;
      }
      )
    })
  }

  const computePossibleSolutions = () => {
    const sanitizeOne = inputOne.replace(' ', '').toLowerCase();
    const sanitizeTwo = inputTwo.replace(' ', '').toLowerCase();
    const withTheirPowersCombined = sanitizeOne.concat(sanitizeTwo);
    const andSorted = withTheirPowersCombined.split('').sort().join('')
    let inputOneSolutions = [];
    let inputTwoSolutions = [];

    if (sanitizeOne) inputOneSolutions = findWordsThatContain(sanitizeOne);
    if (sanitizeTwo) inputTwoSolutions = findWordsThatContain(sanitizeTwo);

    const possibleSolutions = nineJson.filter(niner => (
      andSorted === niner.split('').sort().join(''))
    )

    setOneSolutions(inputOneSolutions);
    setTwoSolutions(inputTwoSolutions);
    setSolutions(possibleSolutions);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          It's time for the Sunday Puzzle!
        </h1>
        <p>You can find the NPR Sunday Puzzle at: <a href='https://www.npr.org/series/4473090/sunday-puzzle'>Sunday Puzzle</a></p>
      </header>
      <div className='body-container'>
        <div className='last-week-challenge'>
          <h2>Last week's challenge:</h2>
          <p>Last week's challenge comes from Joseph Young of St. Cloud, Minn. who runs the website Puzzleria! Name a symbol punctuation mark on a computer keyboard. Anagram it to get the brand name of a product you might buy at a grocery, in two words. What is it?</p>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            Challenge answer: <div class='spoiler' style={{ marginLeft: 5 }}> Semicolon = Molson Ice</div>
          </div>
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
          <button onClick={() => computePossibleSolutions()}>Find Possible Solutions</button>
        </div>
        <div className='solutions-container'>
          <div className='possibility-container'>
            <h2>Words containing {inputOne}: </h2>
            {oneSolutions.map((solution, i) => {
              return <ul key={i}>{solution}</ul>
            })}
          </div>
          <div className='possibility-container'>
            <h2>Words containing {inputTwo}: </h2>
            {twoSolutions.map((solution, i) => {
              return <ul key={i}>{solution}</ul>
            })}
          </div>
          <div className='possibility-container'>
            <h2>Possible solutions with both inputs:</h2>
            {solutions.map((solution, i) => {
              return <p key={i}>{solution}</p>
            })}
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
