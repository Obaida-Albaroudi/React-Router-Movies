import React, { useState } from 'react';
import MovieList from "./Movies/MovieList.js"
import Movie from "./Movies/Movie.js"
import SavedList from './Movies/SavedList';
import { Route } from 'react-router-dom';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path = '/' component={MovieList}/>
      <Route  path = '/movie/:id' component={Movie}/>
    </div>
  );
};

export default App;
