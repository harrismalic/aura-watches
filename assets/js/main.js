function fetchQueryString()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}




// $(document).ready(function(){
  $("#nav-container").load("./components/header.html")
  $("#footer-container").load("./components/footer.html")
// })


