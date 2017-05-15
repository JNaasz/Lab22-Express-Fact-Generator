$(document).ready(function() {

  $('input').click(function() {
      

$.get('/api/randomFact').done(function(data){
var fact = "";
fact = data;
console.log(fact);

$('#fact').text(fact);
});


    });
});
