var id = 1
function myFunction() {
    let output = document.getElementById("Value").value;
    if(output.length){
        var element = document.getElementById("new");
        element.innerHTML += `<p onclick="remove(this)" id=${id}> ${output} <button onclick="remove(this)">-</button></p>`;
        id=id+1
    }
    else {
        alert("Please Write Something!")
    }
    
    
}


function remove(el) {
    var element = el;
    console.log(element);
    element.remove();
  }