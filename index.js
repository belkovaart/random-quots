import quotes from './quote.js';

const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const generateBtn = document.getElementById('generate-btn');
const favoriteBtn = document.getElementById('favorite-btn');

let currentQuoteIndex = null; 
function generateRandomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[currentQuoteIndex];
  const quote = randomQuote.quote;
  const quoteAuthor = randomQuote.author;
  quoteElement.textContent = quote;
  authorElement.textContent = quoteAuthor;
  updateFavoriteButton();
}

function addQuoteToFavorites() {
  if (currentQuoteIndex == null) return;
 quotes[currentQuoteIndex].isFavorite = !quotes[currentQuoteIndex].isFavorite;
 updateFavoriteButton();  
}

function updateFavoriteButton() {
  if (currentQuoteIndex != null && quotes[currentQuoteIndex].isFavorite) {
    favoriteBtn.classList.add('active');
  } else {
    favoriteBtn.classList.remove('active');
  }
}

generateBtn.addEventListener('click', generateRandomQuote);
favoriteBtn.addEventListener('click', addQuoteToFavorites);
