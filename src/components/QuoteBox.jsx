import NewQuote from "./NewQuote";
import Author from "./Author";
import Text from "./Text";
import TweetQuote from "./TweetQuote";
import { useState } from "react";
import quotes from "./quotes.json";

const getQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};
const newQuote = getQuote();

const QuoteBox = () => {
  const [quote, setquote] = useState(newQuote.quote);
  const [author, setauthor] = useState(newQuote.author);
  //const [colors, setcolors] = useState("#0000ff");

  const handleClick = () => {
    const changeQuote = getQuote();
    setquote(changeQuote.quote);
    setauthor(changeQuote.author);
  };

  return (
    <div id="quote-box">
      <Text quote={quote} />
      <Author author={author} />
      <NewQuote onClick={handleClick} />
      <TweetQuote />
    </div>
  );
};

export default QuoteBox;
