// Easy way of made
// let userName = window.prompt("Whats's your username ?");
// console.log(userName);

// innerHTML: Trabalha com conteúdo HTML completo (texto e tags).
// textContent: Trabalha apenas com texto, ignorando tags HTML.
// value: Trabalha com o valor de campos de entrada, como <input> e <textarea>.

let userName;
document.getElementById("mySubmit").onclick = function(){
    userName = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${userName}!`;
}