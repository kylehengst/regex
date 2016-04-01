
// get an id within a string
var re = /ID=([^&]*)/;
var str = 'http://www.website.com?ID=foobar123';
console.log(re.exec(str)[1]);