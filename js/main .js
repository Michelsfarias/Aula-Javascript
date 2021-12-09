/*
function soma(n1, n2){
    return n1 + n2;
}
*/
function validaIdade(idade){
    var validar;
    if(idade >=18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}
var idade= prompt("Qual sua idade?");
console.log(validaIdade(idade));

/*
function setReplace(frase, nome, novo_nome){
    return frase.replace (nome, novo_nome)
}

alert (soma(5, 10));
alert(setReplace("Vai Brasil", "Brasil", "França"));
*/

/*
var d= new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/

/*
var count;
for (count=0; count <= 5; count++){
    alert(count);
}
*/
/*
var count = 0; 
while (count <= 5){
    console.log (count);
    count = count + 1;
};
*/
/*
var idade = prompt("qual sua idade?");
if (idade >= 18){
    alert ("maior de idade");
}else{
    alert ("menor de idade");
}
*/

/*var frutas = [{nome: "pera", cor:"Verde"}, {nome: "Banana", cor:"Amarela"}];
console.log(frutas);
alert(frutas[1].nome);
*/
/*
var lista = ["maça", "pera", "uva"];
lista.push("Laranja");
lista.pop();
console.log(lista);
console.log(lista.toString());
console.log(lista.join(" / "));
console.log(lista.reverse());
console.log(lista.length);
alert(lista[1])
*/
//var nome = "Michel SFarias";
//var n1 = 5;
//var n2 = 4;
//var frase = "Brasil é o melhor time do mundo!";
//alert ("Bem vindo" + nome + "Você tem" + idade + "anos");
//alert(idade + idade2);
//console.log (nome);
//console.log(n1 * n2);
//console.log (frase.replace("Brasil" , "França"))