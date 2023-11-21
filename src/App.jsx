import { useState } from "react";
import "./App.css";
import QuoteBox from "./components/QuoteBox";
import quotes from "./db/quotes.json";
import { getRandomElement } from "./utils/random";

const bgs = ["bg1", "bg2", "bg3", "bg4"]

function App() {
  const [quote, setQuotes] = useState(getRandomElement(quotes));
  const [currentBg, setCurrentBg] = useState(getRandomElement(bgs))

  const handleChangeQuote = () => {
    setQuotes(getRandomElement(quotes))
    setCurrentBg(getRandomElement(bgs))
  }

  return (
    <main className={`App ${currentBg}`}>
      <QuoteBox quote={quote} handleChangeQuote={handleChangeQuote}/>
    </main>
  );
}

export default App;
