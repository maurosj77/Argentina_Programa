let contar = document.getElementById('numero');
let incrementar = document.getElementById('mas');
let cero = document.getElementById('reset');
let disminuir = document.getElementById('menos');

num= 0;
contar.innerHTML= 0;

incrementar.addEventListener("click",()=>{
    num ++;
    contar.innerHTML= num;
})

disminuir.addEventListener("click",()=>{
    num --;
    contar.innerHTML= num;
})
cero.addEventListener("click",()=>{
    num = 0;
    contar.innerHTML= num;
})


