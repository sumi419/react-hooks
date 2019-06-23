import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Character from './Character';

export default function Hooks2() {
  const [chars, setChars] = useState([]);

  // you can have more than one item on state and can update them individually
  const [fruit, setFruit] = useState('banana');
  // fruit is set to 'banana'
  // setFruit is the function that updates fruit (like setState)

  // const [fruit, setFruit] = useState('banana') is the same code as below
  // var fruitStateVariable = useState('banana'); // Returns a pair
  // var fruit = fruitStateVariable[0]; // First item in a pair
  // var setFruit = fruitStateVariable[1]; // Second item in a pair

  useEffect(() => {
    axios.get('https://swapi.co/api/people').then((res) => setChars(res.data.results));
    // return () => {} for componentWillUnmount
  }, []);

  // useEffect is used for side effects
  // Examples of side effects:
  // Data fetching, setting up a subscription,
  // and manually changing the DOM in React components

  // useEffect runs only once when you have a [] (componentDidMount)
  // without it'll run every time so it's defaulted to (componentDidUpdate)
  // if theres something within the [] then the component will only render when the prop passed changes
  // useEffect (componentWillUnmount) is used to any effect
  // return would be unscribing at the end of
  return (
    <>
      {chars.map((char) => (
        <Character key={char.name} char={char} />
      ))}
    </>
  );
}
