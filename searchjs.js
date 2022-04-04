function search(){
    var site = 'google.ca';
    var lookfor = document.getElementById("txtlookfor").value;
    
    if(lookfor.length > 0){
        var query="http://www.google.com/search?q=" + encodeURIComponent(lookfor) + "site:" + site;
        var ddchoice = document.getElementById('dropdown').value; 
        if (ddchoice == 1) {
            var query =
            'http://www.bing.com/search?q=' +
            encodeURIComponent(lookfor) +
            ' site:' +
            site;
            } else {
            var query =
            'http://www.google.com/search?q=' +
            encodeURIComponent(lookfor) +
            ' site:' +
            site;
        } 
        location.href = query; 
    }
    else{
        alert("please enter what you want to search");
    }
   
}