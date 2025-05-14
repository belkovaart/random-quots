import quotes from './src/quote.js';
import { updateFavoriteButton, showFavoriteCard, hideFavoriteCard } from './src/favoritesHandler.js';
import { generateRandomInt } from './src/utils.js';
import { loadFavoriteIds, saveFavoriteIds } from './src/storage.js';

const generateBtn = document.getElementById('generate-btn');
const favoriteBtn = document.getElementById('favorite-btn');
const favoritesContainer = document.getElementById('favorites-container');
const shareBtn = document.getElementById('share-btn');

let currentQuoteIndex = null;

function initFavorites() {
  const favoriteIds = loadFavoriteIds();

  quotes.forEach(q => {
    if (favoriteIds.includes(q.id)) {
      q.isFavorite = true;
      showFavoriteCard(q, favoritesContainer);
    }
  });
}

function persistFavorites() {
  const ids = quotes
    .filter(q => q.isFavorite)
    .map(q => q.id);

  saveFavoriteIds(ids);
}

function displayQuote(quote) {
  const { text, author } = quote;
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

  if (currentQuote.isFavorite) {
    showFavoriteCard(
    currentQuote,
    favoritesContainer
  );}
  if (!currentQuote.isFavorite) {
    hideFavoriteCard(currentQuote.id);
  }

  persistFavorites();
}

function shareQuoteHandler() {
    if (currentQuoteIndex === null) return;
    const { text, author } = quotes[currentQuoteIndex];
    const shareText = encodeURIComponent(`«${text}», ${author}`);
    const pageUrl = encodeURIComponent(window.location.href);
    const telegramUrl = `https://t.me/share/url?url=${pageUrl}&text=${shareText}`;
    window.open(telegramUrl, '_blank', 'noopener'); //noopener беспечивает безопасность, прерывает связь между окнами
}

generateBtn.addEventListener('click', generateQuoteHandler);
favoriteBtn.addEventListener('click', addQuoteToFavorites);
shareBtn.addEventListener('click', shareQuoteHandler);
initFavorites();
generateQuoteHandler();

export { favoriteBtn };