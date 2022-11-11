let containerPrincipale = document.querySelector(".mio-container");



for(let i=1;i<101;i++){

    if(i%15==0 )//se e devisibile con 3 e con 5 stampa fizzbuzz
    containerPrincipale.innerHTML += `<div class="square"><p>FizzBuzz</p></div>`;
    else
    if(i%3==0) //se e devisibile con 3 stampa fizz
    containerPrincipale.innerHTML += `<div class="square"><p>Fizz</p></div>`;
    else
    if(i%5==0) //se e devisibile con 5 stampa fizz
    containerPrincipale.innerHTML += `<div class="square"><p>Buzz</p></div>`;
    else
    containerPrincipale.innerHTML += `<div class="square"><p>${i}</p></div>`; //altrimente stampa il numero

    

}