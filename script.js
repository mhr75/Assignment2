
function getQuote() {
    var cars = ["Don't cry because it's over, smile because it happened.","Be yourself; everyone else is already taken.","So many books, so little time.","A room without books is like a body without a soul.","You only live once, but if you do it right, once is enough.","Be the change that you wish to see in the world.","If you tell the truth, you don't have to remember anything.","Always forgive your enemies; nothing annoys them so much.","Live as if you were to die tomorrow. Learn as if you were to live forever.","Be Yourself"];
    var num=Math.floor(Math.random()*10)
    displayQuote(cars[num]);
}
function displayQuote(quote) {
    const quoteText = document.querySelector('.quote-text');
    quoteText.textContent = quote;
}

function colorChange()
{
    document.getElementById("app").style.backgroundColor = "salmon";
    document.getElementById("p1").style.color = "white";
    document.getElementById("p1").style.fontFamily="Arial, Helvetica, sans-serif";
    var newQuoteButton = document.querySelector('.red');
    newQuoteButton.addEventListener('click', getQuote);
    getQuote();
}

function colorChange1()
{
    document.getElementById("app").style.backgroundColor = "mediumpurple";
    document.getElementById("p1").style.color = "white";
    document.getElementById("p1").style.fontFamily="Verdana, Geneva, sans-serif";
    var newQuoteButton = document.querySelector('.red');
    newQuoteButton.addEventListener('click', getQuote);
    getQuote();
}

function colorChange2()
{
    document.getElementById("app").style.backgroundColor = "chocolate";
    document.getElementById("p1").style.color = "white";
    document.getElementById("p1").style.fontFamily="\"Times New Roman\", Times, serif";
    var newQuoteButton = document.querySelector('.red');
    newQuoteButton.addEventListener('click', getQuote);
    getQuote();
}

function colorChange3()
{
    document.getElementById("app").style.backgroundColor = "peachpuff ";
    document.getElementById("p1").style.color = "maroon";
    document.getElementById("p1").style.fontFamily="Georgia, serif";
    var newQuoteButton = document.querySelector('.red');
    newQuoteButton.addEventListener('click', getQuote);
    getQuote();
}

