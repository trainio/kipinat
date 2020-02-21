/**
 * parse.js
 *
 * MediaWiki API Demos
 * Demo of `Parse` module: Parse content of a page
 *
 * MIT License
 */

// const url = "https://tieteentermipankki.fi/w/api.php?" +
//     new URLSearchParams({
//         origin: "*",
//         action: "parse",
//         page: "Filosofia",
//         format: "json",
//     });
//
// try {
//     const req = await fetch(url);
//     const json = await req.json();
//     console.log(json.parse.text["*"]));
// } catch (e) {
//     console.error(e);
// }

var url = "https://tieteentermipankki.fi/w/api.php";

var params = {
    action: "parse",
    format: "json",
    page: "Filosofia",
    prop: "wikitext",
    formatversion: "2"
};

url = url + "?origin=*";
Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

fetch(url)
    .then(function(response){return response.json();})
    .then(function(response) {
        var pages = response.parse.wikitext;
//        for (var p in pages) {
            console.log(pages);
            document.getElementById("demo").innerHTML = pages;
          //  console.log("Page language is " + pages[p].pagelanguage);
//        }
    })
    .catch(function(error){console.log(error);});
