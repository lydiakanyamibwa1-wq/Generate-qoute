// Start with some default quotes
let quotes = [
  "Keep learning, keep growing.",
  "Code is like humor. When you have to explain it, it’s bad.",
  "First, solve the problem. Then, write the code.",
  "Dream big, start small, act now."
];

// Show a random quote
function newQuote() {
  if (quotes.length === 0) {
    document.getElementById('quote').innerText = "No quotes available. Please add one!";
    return;
  }
  
  const rand = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote').innerText = quotes[rand];
}

// Allow user to add their own quote
function addQuote() {
  const input = document.getElementById('newQuoteInput');
  const newQ = input.value.trim();

  if (newQ) {
    quotes.push(newQ);
    input.value = "";
    alert("Quote added successfully!");
  } else {
    alert("Please type a quote before adding.");
  }
}
