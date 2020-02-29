



var url = "http://tuomorainio.fi/havainto/api.php";

var params = {
    action: "parse",
    format: "json",
    page: "Havaintoja_maailmasta",
    prop: "wikitext",
    formatversion: "2"
};

url = url + "?origin=*";
Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

fetch(url)
    .then(function(response){return response.json();})
    .then(function(response) {
        var pages = response.parse.wikitext;
        var res = pages.toString();
        var pagesFirstSentence = res.split(" ");
            console.log(pages);
            var result = "";
            for(var i = 0; i<11; i++){
               var r = result.concat(pagesFirstSentence[i]);
               result = r+" ";
            }
            document.getElementById("demo").innerHTML = result;

    })
    .catch(function(error){console.log(error);});
