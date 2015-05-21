(function(){
  'use strict';

  var url = 'http://gateway.marvel.com/v1/public/characters?apikey=82c9ab5aa3ff71aea506863fcf801efa';
  fetchJSON(url, app);

})();

/*
  Call this function with the URL where the JSON lives.
  We will pass a function as the second argument.
  That function will be called when the request finished.
  The argument to that function will be the JSON data.
  You will need to change the values for url.
*/
function fetchJSON(url, callback){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
            callback(JSON.parse(xmlhttp.responseText));
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

/*
  Etsy's API return data in a slightly different format.
  Extract the data accordingly
*/
function app(response) {
  var characters = response.data.results;
  logCharacterNames(characters);
}

function logCharacterNames(characters) {
  characters.forEach(function(character){
    console.log(character.name);
  });
}
