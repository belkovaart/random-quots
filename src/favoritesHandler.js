function updateFavoriteButton(quote, button) {
  if (quote.isFavorite) {
    button.classList.add('active');
  } else {
    button.classList.remove('active');
  }
}

function showFavoriteCard(isFavorite, text, author, container) {
  if (isFavorite) {
    const favoriteCard = document.createElement('div');
    favoriteCard.classList.add('favorite-card');
    favoriteCard.innerHTML = `
      <p>${text}</p>
      <p><strong>${author}</strong></p>`;
    container.appendChild(favoriteCard);
  }
}

function hideFavoriteCard(container, text) {
  const favoriteCards = container.querySelectorAll('.favorite-card');
  favoriteCards.forEach((card) => {
    if (card.querySelector('p').textContent === text) {
      container.removeChild(card);
    }
  });
}

export { updateFavoriteButton, showFavoriteCard, hideFavoriteCard };
