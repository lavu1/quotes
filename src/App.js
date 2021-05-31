import React,{ useEffect, useState } from "react"
import './App.css';
import './Quote.css';
import axios from "axios"

const App = () => {
  const [quote,setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const quoteAPI = async () => {
    let arrayOfQuotes = [];

    try{
      const data = await axios.get("https://type.fit/api/quotes");
      arrayOfQuotes = data.data[Math.floor(Math.random() * (1643 + 1))]
      console.log(data.data);

    }catch(error){
      console.log(error);
    }
    try{
      setQuote(arrayOfQuotes.text);
      setAuthor(arrayOfQuotes.author);
    }catch(error){
      console.log(error)
    }
  };
  useEffect(() => {
    quoteAPI();
  }, []);
  return ( 
    <div className="App">
      <div className="quoteBox">
        <div className="container">
          <div className="quoteButton">
          <button onClick={quoteAPI}>GET NEW QUOTE</button>
          </div>
          <div className="quote">{quote} </div>
          <div className="author"><strong>BY : </strong> {author}</div>
        </div>
      </div>
    </div>
    );
  };

  export default App;
