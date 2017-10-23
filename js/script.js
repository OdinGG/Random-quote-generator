// all quotes in an array called quotes
var quotes = [
    {
        quote: 'A day without laughter is a day wasted',
        source: 'Peter Ustinov',
        tags: 'Humor'
    },
    {
        quote: 'There are no secrets to success. It is the result of preparation, hard work, and learning from failure.',
        source: 'Colin Powell',
        tags: 'Business'
    },
    {
        quote: 'Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.',
        source: 'Buddha',
        tags: 'Health'
    },
    {
        quote: 'There is nothing permanent except change.',
        source: 'Heraclitus',
        tags: 'Politics'
    },
    {
        quote: 'You cannot shake hands with a clenched fist.',
        source: 'Indira Gandhi',
        tags: 'Peace'
    }
];

// makes the background color change every 1 sec (1000 ms)
setInterval(printQuote, 1000);

//makes an array outside of the function so it doesn't get "reset" each time
//the funcion is called
var usedQuotes = [];

// takes a random number up to the length of quotes
// then uses that number to get a random object from the array
function getRandomQuote() {

    var same = true;
    var randomNum = Math.floor(Math.random() * quotes.length);
    
    //checks if the quote have been used before or not
    do {
        var count = 0;
        //goes through all the usedQuotes and if they are the same
        //it generates a new number
        for (var i = 0; i < usedQuotes.length; i++) {
            console.log(usedQuotes.length);
            
            if (usedQuotes[i] == quotes[randomNum]) {
                randomNum = Math.floor(Math.random() * quotes.length);
            }
        }
        //if all of the usedQuotes and quotes are different, same becomes false
        //and the while do loop ends
        for(var u = 0; u < usedQuotes.length; u++){
            if (usedQuotes[u] != quotes[randomNum]) {
                count++;
                if(count == usedQuotes.length){
                    same = false;
                }
            }
        }
        if (usedQuotes.length == 0){
            break;
        }
    } while (same == true)

    usedQuotes.push(quotes[randomNum]);
    if(usedQuotes.length == quotes.length){
        usedQuotes = [];
    }
    console.log(quotes[randomNum]);
    return quotes[randomNum];
}

function getRandomColor() {
    var randomRGB = 'rgb(';
    randomRGB += Math.floor(Math.random() * 256) + ',';
    randomRGB += Math.floor(Math.random() * 256) + ',';
    randomRGB += Math.floor(Math.random() * 256) + ')';
    return randomRGB;
}

// takes the the random quote produced in the getRandomQuote function and produces
// the final text that will be displayed on the html
// also uses the rgb color code to change background
function printQuote() {
    var selectedQuote = getRandomQuote();
    var randomColor = getRandomColor();
    var fullQuote = '<p class="quote">' + selectedQuote.quote + '</p>';
    fullQuote += '<p class="source">' + selectedQuote.source + '</p>';
    fullQuote += '<p class=tags>' + selectedQuote.tags + '</p>';
    fullQuote += '<style>body { background-color:' + randomColor + '}</style>';
    document.getElementById('quote-box').innerHTML = fullQuote;

}
printQuote();
// wrote the code in html instead because didnt get it to work when I had the button here
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
//document.getElementById('loadQuote').addEventListener("click", printQuote(), false);
