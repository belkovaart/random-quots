import quotes from './src/quote.js';

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
  updateFavoriteButton();
}

function addQuoteToFavorites() {
  const currentQuote = quotes[currentQuoteIndex];
  if (currentQuoteIndex == null) return;
  currentQuote.isFavorite = !currentQuote.isFavorite;
  updateFavoriteButton();
  showFavoriteCard(
    currentQuote.isFavorite,
    currentQuote.quote,
    currentQuote.author
  );
  if (!currentQuote.isFavorite) {
    hideFavoriteCard(currentQuote.quote);
  }
}

function showFavoriteCard(isFavorite, quote, author) {
  if (isFavorite) {
    const favoriteCard = document.createElement('div');
    favoriteCard.classList.add('favorite-card');
    favoriteCard.innerHTML = `
      <p>${quote}</p>
      <p><strong>${author}</strong></p>`;
    favoritesContainer.appendChild(favoriteCard);
  }
}

function hideFavoriteCard(quote) {
  const favoriteCards = favoritesContainer.querySelectorAll('.favorite-card');
  favoriteCards.forEach((card) => {
    if (card.querySelector('p').textContent === quote) {
      favoritesContainer.removeChild(card);
    }
  });
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
generateRandomQuote();
