import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const App = () => {
  const [apiKey, ] = useState('trnsl.1.1.20190120T221839Z.e8a0ed6cc98deffd.e8d058ee5f668313e658b486846d2791f92dde05');
  const [word, setWord] = useState('');
  const [language, setLanguage] = useState('it');
  const [translatedWord, setTranslatedWord] = useState('');

  const handleChange = event => setWord(event.target.value) 

  const change = event => setLanguage(event.target.value) 

  const handleClick = e => {
    e.preventDefault();
    
    axios.get(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${apiKey}&text=${word}&lang=${language}`)
    .then(response => {
      setTranslatedWord(response.data.text[0])
    })
  }
    return (
      <div className="App">
        <div className="container text-center p-3">
          <form className="mb-2">
            <h1 className="display-4">Translate App</h1>
            <div className="form-group ">
              <input
               type="text"
               name="word" 
               placeholder="Translated Word"
               value={word}
               onChange={handleChange} 
               className="form-control d-flex mx-auto" />
            </div>
            <select name="lang" onChange={change} value={language} id="lang" className="mb-3">
              <option value="it">Italian</option>
              <option value="tr">Turkish</option>
              <option value="de">German</option>
              <option value="fr">French</option>
              <option value="es">Spanish</option>
              <option value="pt">Portuguese</option>
            </select>
            <button 
              onClick={handleClick} 
              type="submit" 
              className="btn btn-primary btn-block d-flex mx-auto text-center ">
              Translate
            </button>
          </form>
          {
            translatedWord.length === 0 ? 
            null : 
            <p className="mt-2 font-weight-bold  text-danger"> <span className="text-dark">Translated Word:</span> {translatedWord}</p>
          }
          
        </div>
      </div>
    );
}

export default App;
