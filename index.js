const quotes = [
  {
    quote:
      'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    author: 'Albert Einstein',
  },
  {
    quote: 'The way to get started is to quit talking and begin doing.',
    author: 'Walt Disney',
  },
  {
    quote: 'Life is what happens when you\'re busy making other plans.',
    author: 'John Lennon',
  },
  {
    quote:
      'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    author: 'Albert Einstein',
  },
  {
    quote: 'The way to get started is to quit talking and begin doing.',
    author: 'Walt Disney',
  },
  {
    quote: 'Life is what happens when you\'re busy making other plans.',
    author: 'John Lennon',
  },
  {
    quote:
      'Your time is limited, so don\’t waste it living someone else\’s life.',
    author: 'Steve Jobs',
  },
  {
    quote:
      'If life were predictable it would cease to be life, and be without flavor.',
    author: 'Eleanor Roosevelt',
  },
  {
    quote: 'If you look at what you have in life, you\’ll always have more.',
    author: 'Oprah Winfrey',
  },
  {
    quote:
      'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
    author: 'Mother Teresa',
  },
];

const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const generateBtn = document.getElementById('generate-btn');

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  const quote = randomQuote.quote;
  const quoteAuthor = randomQuote.author;
  quoteElement.textContent = quote;
  authorElement.textContent = quoteAuthor;
}

generateBtn.addEventListener('click', generateRandomQuote);
