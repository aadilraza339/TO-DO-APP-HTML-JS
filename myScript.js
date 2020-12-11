function AddTodo() {
    let output = document.getElementById("Value").value;
    if(output.length){
        var element = document.getElementById("todo-list");
        element.innerHTML += `<p onclick="remove(this)"> ${output} <button>-</button></p>`;
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