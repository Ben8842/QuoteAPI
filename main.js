
//This api returns a random quote along with author and genre information
$.getJSON("https://quote-garden.herokuapp.com/api/v2/quotes/random",function(data){
    // console.log(data);

   var randomquote = data.quote.quoteText;
   var quoteauthor = data.quote.quoteAuthor;
   var genre = data.quote.quoteGenre;

   //console.log(randomquote);

     $('.quotedisplay').append(randomquote);
     $('.quoteauthor').append(" - " + quoteauthor);
     $('.thanks').append("genre: " +genre);

    });

//This api returns a random joke with setup and punchline
$.getJSON("https://official-joke-api.appspot.com/random_joke", function(laugh){
  //console.log(laugh);

  var randomset = laugh.setup;
  var randompunch = laugh.punchline;

  $('.setup').append(randomset);
  $('.punch').append(randompunch);

});

//This api returns a random piece of advice
$.getJSON("https://api.adviceslip.com/advice", function(advice){
  //console.log(advice);

  var advi = advice.slip.advice;

  $('.advice').append(advi);

  //I don't know how to get this monster to display without being inside another function
  //This array of words allows the api to grab random monsters

  var myArray = [
    "Apples",
    "Bananas",
    "Pears",
    "Boat",
    "Dog",
    "cat",
    "ZIPPING",
    "winter"
  ];
  
  var randomItem = myArray[Math.floor(Math.random()*myArray.length)];




  var monster = "https://robohash.org/" + randomItem + "?set=set2.png";

  $('.monster').attr('src', monster);

});

//This api returns arrays of inspirational quotes, I have not discovered how to randomly choose a single quote as the other calls do. 
$.getJSON("https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand", function(inspiration){
  //console.log(inspiration);
});

//Random Breaking Bad Quote API
$.getJSON("https://breaking-bad-quotes.herokuapp.com/v1/quotes", function(breaking){
  //console.log(breaking);

  var bbad = breaking[0].quote;
  var bbauthor = breaking[0].author;

  $('.bbQuote').append("Quote: " + bbad);
  $('.other').append("Author: " + bbauthor);
});


//how do i get a random cat fact every time?  this is only taking the first one every time
//solution was to create random int function inside the json function, and call it inside the array to pick int between 0 and 100
$.getJSON("https://cat-fact.herokuapp.com/facts", function(catfact){
  console.log(catfact);

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

var factcat = catfact.all[getRandomInt(100)].text;
$('.cat').append(factcat);

});

//Random useless fact API
$.getJSON("https://uselessfacts.jsph.pl/random.json?language=en", function(useless){
  console.log(useless);

  var uselessfact = useless.text

  $('.uselessfact').append(uselessfact);
});


/*
function monsterFunction() {
  var usertext = document.getElementById("monster").value;
 // $.getJSON("https://robohash.org/" + usertext + '.png', function(randomrobot){
 // console.log(randomrobot);

  var monsterimage = "https://robohash.org/" + usertext + '.png';
  $('.monsterimage')attr('src', monsterimage);
});
}
*/


//This api returns a random robot image
//$.getJSON("https://robohash.org/" + usertext, function(randomrobot){
//  console.log(randomrobot);
//});




