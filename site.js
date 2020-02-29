//without jquery
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

//with jquery
