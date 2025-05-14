const STORAGE_KEY = 'favoriteQuotes';

export function loadFavoriteIds() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);

    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function saveFavoriteIds(ids) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  } catch {
  }
}