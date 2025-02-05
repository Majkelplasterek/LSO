const IMG = document.querySelector("#ikona")
const Listy = document.querySelectorAll(".pierwszyULmobile, .drugiULmobile")
const PierwszyMobile = document.querySelector(".pierwszyULmobile")
const Ceremonial = document.querySelector(".childOdd")
const DrugiMobile = document.querySelector(".drugiULmobile");
const Odnosniki = document.querySelectorAll(".child, .childSmall")
const Body = document.querySelector("body");
const SunMoon = document.querySelector("#sunmoon");
const Teksty = document.querySelectorAll("h1, p, h2, h3");
let kat = 0;
let tryb = 0; //0 jasny 1 ciemny
document.querySelector("#ikona").addEventListener('click', function(){
    for(let i = 0; i < Listy.length; i++){
        // Listy[i].style.visibility = "visible"
    }
    kat += 90;
    if(kat == 360){
        kat = 0;
    }
    IMG.style.transform = `rotate(${kat}deg)`;
})

IMG.addEventListener('click', function(){
    if(PierwszyMobile.classList.contains("showPierwszyMobile")){
        PierwszyMobile.classList.remove("showPierwszyMobile")
        PierwszyMobile.classList.add("hiddenPierwszyMobile")
        setTimeout(() => {
            PierwszyMobile.style.visibility="hidden"
        }, 500);
    
    }
    else{
        PierwszyMobile.style.visibility="visible"
        PierwszyMobile.classList.remove("hiddenPierwszyMobile")
        PierwszyMobile.classList.add("showPierwszyMobile")
        
    }
    
})
Ceremonial.addEventListener('click', function(){
    if(DrugiMobile.classList.contains("showDrugiMobile")){
        DrugiMobile.classList.remove("showDrugiMobile")
        DrugiMobile.classList.add("hiddenDrugiMobile")
        setTimeout(() => {
            DrugiMobile.style.visibility="hidden"
        }, 500);
    
    }
    else{
        DrugiMobile.style.visibility="visible"
        DrugiMobile.classList.remove("hiddenDrugiMobile")
        DrugiMobile.classList.add("showDrugiMobile")
        
    }
})


Odnosniki.forEach(link => {
    link.addEventListener("click", function () {
        for (let i = 0; i < Listy.length; i++) {
            PierwszyMobile.classList.remove("showPierwszyMobile")
            PierwszyMobile.classList.add("hiddenPierwszyMobile")
            setTimeout(() => {
                PierwszyMobile.style.visibility="hidden"
            }, 500);

            DrugiMobile.classList.remove("showDrugiMobile")
            DrugiMobile.classList.add("hiddenDrugiMobile")
            setTimeout(() => {
               DrugiMobile.style.visibility="hidden"
            }, 500);


        }
    });
});

SunMoon.addEventListener('click', function(){

    if(tryb == 0){
        tryb = 1;
        Body.style.backgroundColor = "#292929";
        SunMoon.src = "moon.png";

        for(let i = 0; i < Teksty.length; i++){
            if(i == 0){
                continue;
            }
            Teksty[i].style.color = "#ccc";
        }
    }
    else{
        tryb = 0;
        Body.style.backgroundColor = "white";
        SunMoon.src = "sun.png";

        for(let i = 0; i < Teksty.length; i++){
            if(i == 0){
                continue;
            }
            Teksty[i].style.color = "black";
        }
    }

})
