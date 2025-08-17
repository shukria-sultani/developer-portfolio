import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

export default function Header({message}) {
  const quotes = [
    {
      text: "Coding is like poetry should be short and concise.",
      author: "Santosh Kalwar"
    },
    {
      text: "It's not a bug; it's an undocumented feature.",
      author: "Anonymous"
    },
    {
      text: "First, solve the problem. Then, write the code.",
      author: "John Johnson"
    },
    {
      text: "Code is like humor. When you have to explain it, it's bad.",
      author: "Cory House"
    },
    {
      text: "Make it work, make it right, make it fast.",
      author: "Kent Beck"
    },
    {
      text: "Clean code always looks like it was written by someone who cares.",
      author: "Robert C. Martin"
    },
    {
      text: "Of course, bad code can be cleaned up. But it's very expensive.",
      author: "Robert C. Martin"
    }
  ];

  // Generate a random index
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  return (
    <div className="header-container">
      <div className="welcome">
        <h1>Shukria Sultani</h1>
        <p>{message}</p>
      </div>
      <div className="quote-container">
        <div className="quote">
          <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
          <blockquote>
            <p>{randomQuote.text}</p>
          </blockquote>
          <FontAwesomeIcon icon={faQuoteRight} className="quote-icon" />
          <cite>- {randomQuote.author}</cite>
        </div>
      </div>
    </div>
  );
}
