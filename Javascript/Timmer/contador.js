function (){



const    second = 1000;
    minute = second * 60;
    hour = minute *60;
    day=  hour*60;


    let cumple = Apr 27, 2022 00:00:00;
    countDown = new Date(cumple).getTime();


    x= setInterval(function(){
        let now = new Date().getTime(), distance = countDown - now;
        (document.getElementById("days").innerText = Math.floor(distance/day)),
        (document.getElementById("hours").innerText = Math.floor((distance%day)/hour));










    })






}