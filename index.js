const quotes = [
  'The only limit to our realization of tomorrow is our doubts of today. — Franklin D. Roosevelt',
  'Stay hungry, stay foolish. — Steve Jobs',
  'Be yourself; everyone else isn\'t already taken. — Oscar Wilde',
  ]

  const quoteElement = document.getElementById('quote');
  const generateBtn = document.getElementById('generate-btn');

  function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteElement.textContent = randomQuote;
  }

  generateBtn.addEventListener('click', generateRandomQuote);