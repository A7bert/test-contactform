import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [lyricsItem, setLyricsItem] = useState(null);

  const lyricsFunction = async () => {
    try {
      await axios
      .get('https://api.lyrics.ovh/v1/Coldplay/yellow')
      .then(res => {
        console.log(res);
        return setLyricsItem(res.data.lyrics);
      })
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    lyricsFunction();
  })
  
  return (
    <div className='App'>

    </div>
  )
}

export default App;