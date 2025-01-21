alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() *numeroMaximo + 1);
console.log(numeroSecreto);
let chute ;
let tentativas = 1;



// Enquanto chute não for igual ao num secreeto
while(chute != numeroSecreto){
    chute = prompt(`escolha um número entre 1 e ${numeroMaximo}`);
// se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;   
    } else {
        if (numeroSecreto > chute){
            alert(`O numeero secreto é menor que ${chute}`);
        } else { 
            alert(`O numero seecreto é menor que ${chute}`);
        }
        //tenntativas = tenntativas + 1;
        //Os doi tem o meesmo sentido porem o ++ fica mais curto e simplees no código
        tenntativas++;
    }
}

let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativas}.`);
//if (tenntativas > 1){
//    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
//} else {
//    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
//}127.0.0.1 localhost

//