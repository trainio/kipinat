/*
    get_info.js

    MediaWiki API Demos
    Demo of `Info` module: Send a GET request to display information about a page.

    MIT License
*/

var url = "https://tieteentermipankki.fi/w/api.php";

var params = {
    action: "query",
    format: "json",
    titles: "Filosofia",
    prop: "info",
    inprop: "url|talkid"
};

url = url + "?origin=*";
Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

fetch(url)
    .then(function(response){return response.json();})
    .then(function(response) {
        var pages = response.query.pages;
        for (var p in pages) {
            console.log(pages[p].title + " has " + pages[p].length + " bytes.");
            console.log("Page language is " + pages[p].pagelanguage);
            document.getElementById("demo").innerHTML = pages[p].title + " has " + pages[p].length + " bytes."+" Page language is " + pages[p].pagelanguage;

        }
    })
    .catch(function(error){console.log(error);});
