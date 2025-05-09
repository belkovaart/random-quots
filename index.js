import quotes from './src/quote.js';
import {
  updateFavoriteButton,
  showFavoriteCard,
  hideFavoriteCard,
} from './src/favoritesHandler.js';

const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const generateBtn = document.getElementById('generate-btn');
const favoriteBtn = document.getElementById('favorite-btn');
const favoritesContainer = document.getElementById('favorites-container');

let currentQuoteIndex = null;

function generateRandomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[currentQuoteIndex];
  const quote = randomQuote.quote;
  const quoteAuthor = randomQuote.author;
  quoteElement.textContent = quote;
  authorElement.textContent = quoteAuthor;
  favoriteBtn.style.display = 'inline-block';
  updateFavoriteButton(currentQuoteIndex, randomQuote, favoriteBtn);
}

function addQuoteToFavorites() {
  const currentQuote = quotes[currentQuoteIndex];
  if (currentQuoteIndex == null) return;
  currentQuote.isFavorite = !currentQuote.isFavorite;
  updateFavoriteButton(currentQuoteIndex, currentQuote, favoriteBtn);
  showFavoriteCard(
    currentQuote.isFavorite,
    currentQuote.quote,
    currentQuote.author,
    favoritesContainer
  );
  if (!currentQuote.isFavorite) {
    hideFavoriteCard(favoritesContainer, currentQuote.quote);
  }
}

generateBtn.addEventListener('click', generateRandomQuote);
favoriteBtn.addEventListener('click', addQuoteToFavorites);
generateRandomQuote();
