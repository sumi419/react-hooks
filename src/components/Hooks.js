import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Hooks() {
  // use this for state and setState
  const [characters, setCharacters] = useState([]);

  // replaces componentDidMount, componentWillUnmount, componentDidUpdate
  useEffect(() => {
    fetchCharacters();
  }, []);

  // can be used inside of useEffect but will get a linter warning message
  const fetchCharacters = async () => {
    try {
      const res = await axios.get('https://swapi.co/api/people/');
      setCharacters(res.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    // <> same as React Fragment
    <>
      {characters.map((character) => (
        <div key={character.name}>{character.name}</div>
      ))}
    </>
  );
}
