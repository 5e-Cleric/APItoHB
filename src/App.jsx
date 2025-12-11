import './App.css'
import './fonts.css'

import { useState, useEffect } from 'react'

import Header from './components/Header/header';

import Input from './components/input';
import Result from './components/Result/result';
import Box from './components/box';

function App() {
  const [data, setData] = useState();
  const [type, setType] = useState('classes');

  const [classes, setClasses] = useState([]);
  const [species, setSpecies] = useState([]);

  useEffect(()=>{
    //do a call to get the names of all classes, races and all
    setClasses([
      'Artificer',
      'Barbarian',
      'Bard',
      'Cleric',
      'Druid',
      'Fighter',
      'Monk',
      'Paladin',
      'Ranger',
      'Rogue',
      'Sorcerer',
      'Warlock',
      'Wizard',
    ]);
  },[]);

  return (
    <div className='App'>
      <Header />
      <main>
        <div className="search">
        <a href='https://homebrewery.naturalcrit.com/new'>The Homebrewery - New Page</a>
        <Input setData={setData} type={type} setType={setType}></Input>
        </div>
        <Result data={data} type={type}></Result>
        <h2>Search by Boxes</h2>
        <div className="gridBlock">
          {classes.length !== 0 && classes.map((item, index) => (
            <Box key={index} name={item} content={item} />
          ))}
        </div>

      </main>
    </div>
  )
}

export default App
