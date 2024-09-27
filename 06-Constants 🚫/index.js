//Const (Constantes) = É a forma de definir uma variavel que não pode ser alterada
//Ex: Pi (π)

//É uma boa prática nomear constantes em CapsLock
const PI = 3.14159;
//Já as variáveis a convenção é se ultilizar de camelCode (em que a primeira letra de cada palavra, exceto a da primira palavra, é capitalizada.) ou snake_case (As palavras são separadas por underscores e todas as letras são minúsculas.).
let radius; 
let circumference;

// PI = 420.69; Isso não acontece com Constantes, pois o progama retorna como um erro

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + "cm";
}