import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


class App extends Component {
  state = {
    apiKey : 'trnsl.1.1.20190120T221839Z.e8a0ed6cc98deffd.e8d058ee5f668313e658b486846d2791f92dde05',
    word: '',
    //TODO: Add a checkbox for different languages
    language: 'tr',
    translatedWord: ''
  }

  handleChange = ({target}) =>{
    this.setState({
      [target.name]: target.value
    })
  }

  handleClick = e => {
    e.preventDefault();
    
    const {apiKey, word, language} = this.state;
       
    axios.get(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${apiKey}&text=${word}&lang=${language}`)
    .then(response => {
      this.setState({translatedWord: response.data.text[0]})
    })
   }

  render() {
    const {word, translatedWord} = this.state;
    return (
      <div className="App">
        <div className="container text-center">
          <form className="mb-2">
            <h1 className="display-4">Translate App</h1>
            <div className="form-group ">
              <input
               type="text"
               name="word" 
               placeholder="Translated Word"
               value={word}
               onChange={this.handleChange} 
               className="form-control d-flex mx-auto" />
            </div>
            {/* <select name="lang" id="lang" className="mb-3">
              <option value="select">Select</option>
              <option value="tr">Turkish</option>
              <option value="de">German</option>
            </select> */}
            <button 
              onClick={this.handleClick} 
              type="submit" 
              className="btn btn-primary btn-block d-flex mx-auto text-center ">
              Translate
            </button>
          </form>
          <p className="mt-2">{translatedWord}</p>
        </div>
      </div>
    );
  }
}

export default App;
