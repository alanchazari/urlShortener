function shortenURL(){
    var newURL = "";
    var characters =  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var length = characters.length;

    for(var i = 0; i < 5; i++ ) {
        var randomNumber = Math.random() * length;
        randomNumber = Math.floor(randomNumber);
        newURL += characters.charAt(randomNumber);
    }

    document.getElementById("newurl").value = newURL + ".com";
}