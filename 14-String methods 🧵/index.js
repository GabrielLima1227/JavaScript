//String Methods = Os métodos de string são ferramentas essenciais para manipular textos e realizar operações comuns em strings de maneira eficiente e simplificada em JavaScript.

/**
 * * Retorna o caractere em uma posição (índice) específica de uma string.
 * ! As posições se iniciam do 0 assim como em Arrays List
 * .charAt(); 
 * * Encontra a posição (índice) da primeira ocorrência de um caractere ou substring dentro de uma string.
 * ! É case-sensitive e pode (Opcional) selecionar a posição em que a busca deve começar.
 * ! A posições é númerada a partir do 0 assim como em Arrays List
 * .indexOf("", posição);
 * * Encontra a posição (índice) da última ocorrência de um caractere ou substring dentro de uma string.
 * ! É case-sensitive e pode (Opcional) selecionar a posição em que a busca deve começar.
 * ! A posições é númerada a partir do 0 assim como em Arrays List
 * .lastIndexOf("", posição);
 * * Retorna o número de caracteres de uma string.
 * ! A posições é númerada a partir de 1
 * .lenght
 * * É usado para remover espaços em branco do início e do fim de uma string.
 * .trim();
 * * Converte todos os caracteres de uma string para letras maiúsculas.
 * .toUpperCase();
 * * Converte todos os caracteres de uma string para letras minúsculas.
 * .toLowerCase();
 * * Cria uma nova string repetida um número específico de vezes.
 * .repeat();
 * * Usado para verifica se uma string começa com uma determinada substring. 
 * ! É case-sensitive e pode (Opcional) selecionar a posição em que a busca deve começar.
 * ! Retorna um resultado Boolean
 * .startsWith("", posição);
 * * Usado para verifica se uma string termina com uma determinada substring. 
 * ! É case-sensitive e pode (Opcional) selecionar a posição em que a busca deve começar.
 * ! Retorna um resultado Boolean
 * .endsWith("", posição);
 * * Usado para verificar se uma string contém uma determinada substring (um caractere ou sequência de caracteres).
 * ! É case-sensitive e pode (Opcional) selecionar a posição em que a busca deve começar.
 * ! Retorna um resultado Boolean
 * .includes("", posição);
 * * Usado para substituir partes de uma string por outra.
 * ! Só substitui a primeira ocorrência.
 * ! É case-sensitive.
 * .replace("mascara","novaString");
 * * Usado para substituir todas as ocorrências de uma substring ou um padrão em uma string por outra substring.
 * ! É case-sensitive.
 * .replaceAll("mascara","novaString");
 * * Permite adicionar caracteres ao inicio de um string até que ela atinja um comprimento específico.
 * ! Se a string já tiver um comprimento maior ou igual ao especificado, o método não alterará a string original.
 * .padStart(Tamanho, "Prenchimento");
 * * Permite adicionar caracteres ao final de um string até que ela atinja um comprimento específico.
 * ! Se a string já tiver um comprimento maior ou igual ao especificado, o método não alterará a string original.
 * .padEnd(Tamanho, "Prenchimento");
*/

let userName = "   aspas   "; 

console.log(userName.charAt(0));
console.log(userName.indexOf("a", 0));
console.log(userName.lastIndexOf("a"));
console.log(userName.length);
console.log(userName.trim());
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());
console.log(userName.repeat(3));
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let result = userName.startsWith(" ", 0);

if (result) {
    console.log("Your usernme can't begin with ' '");
}else{
    console.log(userName);
}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
result = userName.endsWith(" ");

if (result) {
    console.log("Your usernme can't end with ' '");
}else{
    console.log(userName);
}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
result = userName.includes(" ");
if (result) {
    console.log("Your usernme can't include ' '");
}else{
    console.log(userName);
}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let phoneNumber = "123-456-7890";
phoneNumber = phoneNumber.replace("-", "");
console.log(phoneNumber);
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let phoneNumber1 = phoneNumber.replaceAll("-", "");
console.log(phoneNumber1);
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let phoneNumber2 = phoneNumber.padStart(15,"0");
console.log(phoneNumber2);
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let phoneNumber3 = phoneNumber.padEnd(20,"1");
console.log(phoneNumber3);