//calculate without jquery
var form = document.getElementById("submit");
form.addEventListener('click', milk);

function milk(e){
  e.preventDefault();
  var milk = parseInt(document.querySelector("#milkInput").value);

  if (milk <= 0) {
    console.log("Good");
    good();
  } else if (milk > 0) {
    console.log("Bad");
    bad();
  } else {
    console.log("error");
    error();
  }
}

function good(){
  $('#results').text("good. milk is disgusting");
}

function bad(){
  $('#results').text("that's disgusting. milk is gross and so are you");
}

function error(){
  $('#results').text("try entering a number");
}

//add easier buttons with jquery
//error check to prevent NaN when using little buttons to add and sub

$('#milkInput').after('<a id="more" href="#null">+</a>')
$('#milkInput').before('<a id="less" href="#null">-</a>')

$('#more').on('click', function(e) {
  var milkInput = $('#milkInput').val();
  if(isNaN(milkInput)){
    $('#results').text("is that a number?");
  } else {
    var newValue = parseInt(milkInput) + 1;
    $('#milkInput').val(newValue);
  }
  e.preventDefault();
})

$('#less').on('click', function(e) {
  var milkInput = $('#milkInput').val();
  if(isNaN(milkInput)){
    $('#results').text("is that a number?");
  } else {
    var newValue = parseInt(milkInput) - 1;
    $('#milkInput').val(newValue);
  }
})
