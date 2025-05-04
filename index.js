import quotes from './quote.js';

const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const generateBtn = document.getElementById('generate-btn');

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  const quote = randomQuote.quote;
  const quoteAuthor = randomQuote.author;
  quoteElement.textContent = quote;
  authorElement.textContent = quoteAuthor;
}

generateBtn.addEventListener('click', generateRandomQuote);
