import quotes from './src/quote.js';
import { updateFavoriteButton, showFavoriteCard, hideFavoriteCard } from './src/favoritesHandler.js';
import { generateRandomInt } from './src/utils.js';

const generateBtn = document.getElementById('generate-btn');
const favoriteBtn = document.getElementById('favorite-btn');
const favoritesContainer = document.getElementById('favorites-container');

let currentQuoteIndex = null;

function displayQuote(quote) {
  const { text, author, isFavorite } = quote;
  const quoteElement = document.getElementById('quote');
  const authorElement = document.getElementById('author');
  quoteElement.textContent = text;
  authorElement.textContent = author;
  updateFavoriteButton(quote, favoriteBtn);

}

function chooseRandomQuote() {
  const randomIndex = generateRandomInt(quotes.length);
  currentQuoteIndex = randomIndex;
  return quotes[currentQuoteIndex];
}

function generateQuoteHandler() {
  const randomQuote = chooseRandomQuote();
  displayQuote(randomQuote);
  favoriteBtn.style.display = 'inline-block';
}

function addQuoteToFavorites() {
  if (currentQuoteIndex == null) return;
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavorite = !currentQuote.isFavorite;
  updateFavoriteButton(currentQuote, favoriteBtn);
  showFavoriteCard(
    currentQuote.isFavorite,
    currentQuote.text,
    currentQuote.author,
    favoritesContainer
  );
  if (!currentQuote.isFavorite) {
    hideFavoriteCard(favoritesContainer, currentQuote.text);
  }
}

generateBtn.addEventListener('click', generateQuoteHandler);
favoriteBtn.addEventListener('click', addQuoteToFavorites);
generateQuoteHandler();
