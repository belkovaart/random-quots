import { favoriteBtn } from '../index.js';

function updateFavoriteButton(quote, button) {
  if (quote.isFavorite) {
    button.classList.add('active');
  } else {
    button.classList.remove('active');
  }
}

function showFavoriteCard(quote, container) {
  const { id, isFavorite, text, author } = quote;
  const favoriteCard = document.createElement('div');
  favoriteCard.classList.add('favorite-card');
  favoriteCard.dataset.quoteId = id;
  favoriteCard.innerHTML = `
<button class="remove-btn" title="Удалить из избранного">
      <svg viewBox="0 0 24 24" width="25" height="25" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18M6 6l12 12"
              stroke="currentColor" stroke-width="2"
              stroke-linecap="round"/>
      </svg>
    </button>      
      <p>${text}</p>
      <p><strong>${author}</strong></p>`;
  const removeBtn = favoriteCard.querySelector('.remove-btn');
  removeBtn.addEventListener('click', () => {
    quote.isFavorite = !quote.isFavorite;
    hideFavoriteCard(id);
    updateFavoriteButton(quote, favoriteBtn);
  });

  container.appendChild(favoriteCard);
}

function hideFavoriteCard(id) {
  const card = document.querySelector(`.favorite-card[data-quote-id="${id}"]`);
  card && card.remove();
}

export { updateFavoriteButton, showFavoriteCard, hideFavoriteCard };
