//calculate without jquery
var form = document.getElementById("milk");
form.addEventListener('submit', milk);

function milk(event){
  event.preventDefault();
  var milk = parseInt(document.querySelector("#milkInput").value);

  if (milk <= 0) {
    console.log("Good");
    document.querySelector("#results").innerHTML = "good.";
  } else if (milk > 0) {
    console.log("Bad");
    document.querySelector("#results").innerHTML = "bad. you're disgusting milk is gross";
  } else {
    console.log("error");
    document.querySelector("#results").innerHTML = "something went wrong :/";
  }
}

//add easier buttons with jquery
$('#milkInput').after('<a id="more" href="#null">+</a>')
$('#milkInput').before('<a id="less" href="#null">-</a>')

$('#more').on('click', function(e) {
  var milkInput = $('#milkInput').val();
  var newValue = parseInt(milkInput) + 1;
  $('#milkInput').val(newValue);
})

$('#less').on('click', function(e) {
  var milkInput = $('#milkInput').val();
  var newValue = parseInt(milkInput) - 1;
  $('#milkInput').val(newValue);
})

//error check to prevent NaN when using little buttons to add and sub
