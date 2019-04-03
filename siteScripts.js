
function faceBookLink() {
    window.open("https://www.facebook.com/joshua.ragsdale.9");
};

function linkedInLink() {
    window.open("https://www.linkedin.com/in/joshua-ragsdale-5396a9a0/");
};

var myVar = setInterval(myTimer, 1000);
function myTimer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  document.getElementById("clock").innerHTML = t;
}

