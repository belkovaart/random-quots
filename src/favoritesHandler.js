function updateFavoriteButton(index, quote, button) {
  if (index != null && quote.isFavorite) {
    button.classList.add('active');
  } else {
    button.classList.remove('active');
  }
}

function showFavoriteCard(isFavorite, quote, author, container) {
  if (isFavorite) {
    const favoriteCard = document.createElement('div');
    favoriteCard.classList.add('favorite-card');
    favoriteCard.innerHTML = `
      <p>${quote}</p>
      <p><strong>${author}</strong></p>`;
    container.appendChild(favoriteCard);
  }
}

function hideFavoriteCard(container, quote) {
  const favoriteCards = container.querySelectorAll('.favorite-card');
  favoriteCards.forEach((card) => {
    if (card.querySelector('p').textContent === quote) {
      container.removeChild(card);
    }
  });
}

export { updateFavoriteButton, showFavoriteCard, hideFavoriteCard };
