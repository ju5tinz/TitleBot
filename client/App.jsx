import React, { useState } from 'react'
import TitleForm from './components/TitleForm'
import TitleList from './components/TitleList'

export const App = () => {
  const [list, setList] = useState([]);

  const addToList = (url, title) => {
    setList(prevList => [{url, title}, ...prevList]);
  }

  return(
    <div className="container h-100">
      <TitleForm addToList={addToList}/>
      <TitleList list={list}/>
    </div>
  );
}