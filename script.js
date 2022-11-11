let containerPrincipale = document.querySelector(".mio-container");



for(let i=1;i<101;i++){

    if(i%15==0 )//se e devisibile con 3 e con 5 stampa fizzbuzz
    console.log("FizzBuzz");
    else
    if(i%3==0) //se e devisibile con 3 stampa fizz
        console.log("Fizz");
    else
    if(i%5==0) //se e devisibile con 5 stampa fizz
        console.log("Buzz");
    else
        console.log(i); //altrimente stampa il numero

    

}