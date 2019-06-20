import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Hooks2() {
  const [chars, setChars] = useState([]);

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
        <div key={char.name}>{char.name}</div>
      ))}
    </>
  );
}
