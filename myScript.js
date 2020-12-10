var id = 1
function AddTodo() {
    let output = document.getElementById("Value").value;
    if(output.length){
        var element = document.getElementById("new");
        element.innerHTML += `<p onclick="remove(this)" id=${id}> ${output} <button onclick="remove(this)">-</button></p>`;
        id=id+1
        document.getElementById('Value').value=''; 
    }
    else {
        alert("Please Write Something!")
    }
    
    
}


function remove(el) {
    var element = el;
    element.remove();
  }