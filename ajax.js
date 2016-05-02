var request = new XMLHttpRequest();
request.onreadystatechange = function(){
console.log("något Hände");
}
request.open('GET', 'http://www.google.com');
request.send();
