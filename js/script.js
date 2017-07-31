// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//array of quotes with quote, source, and optional citation and year fields
var quotes = [
  //1
  {quote: 'Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.',
  source: 'Abraham Lincoln',
  citation: 'The Gettysburg Address',
  year: '1863'},
  //2
  {quote: 'I dreamed a thousand new paths. I woke and walked my old one.',
  source: 'Chinese Proverb'},
  //3
  {quote: 'To be, or not to be: that is the question',
  source: 'William Shakespeare',
  citation: 'Hamlet'},
  //4
  {quote: 'Violence is the last refuge of the incompetent.',
  source: 'Isaac Asimov',
  year: '1951'},
  //5
  {quote: 'Life is a gift horse in my opinion.',
  source: 'J. D. Salinger',
  citation: 'Teddy',
  year: '1953'},
];

//array of color hexes to be used for changing the background color
var bgcolors = [
  '#a0a0a0', '#a00000', '#a0a000', '#00a000', '#0000a0', '#a000a0'
]

//function to pick a random quote from the quotes array and return it
//generates a random number based on the number of quotes in the quotes array
//returns the quote at the index of the generated number
function getRandomQuote() {
  var num = Math.floor(Math.random() * ((quotes.length - 1) + 1));
  var randomQuote = quotes[num];
  return randomQuote;
}

//function to print a quote returned by getRandomQuote
//a message string is created from the parts of the quote that is then printed
function printQuote() {
  var rand = getRandomQuote();
  var message = "<p class=\"quote\">" + rand.quote + "</p>";
  message += "<p class=\"source\"> " + rand.source;
  //citation and year are only added to the message string if present
  if (typeof rand.citation != 'undefined') {
    message += "<span class=\"citation\"> " + rand.citation + "</span>";
  }
  if (typeof rand.year != 'undefined') {
    message += "<span class=\"year\"> " + rand.year + "</span>";
  }
  message += "</p>";
  //add message string to the page
  document.getElementById('quote-box').innerHTML = message;
  //changes background color using a random color stored in the bgcolors array
  document.body.style.background = bgcolors[Math.floor(Math.random() * ((bgcolors.length - 1) + 1))];
}