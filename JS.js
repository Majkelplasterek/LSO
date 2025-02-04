const IMG = document.querySelector("#ikona")
let kat = 0;
document.querySelector(".img-class").addEventListener('click', function(){
    kat += 90;
    if(kat == 360){
        kat = 0;
    }
    IMG.style.transform = `rotate(${kat}deg)`;
})

