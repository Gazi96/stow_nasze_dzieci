//menu
var hamburger = document.getElementsByClassName("hamburger")[0];
var nav = document.getElementsByClassName("nav")[0];
hamburger.addEventListener("click", drop);

function drop()
{
    nav.classList.toggle('nav--drop');
}



//slider
var slider = document.getElementsByClassName("slider__box")[0];
var sliderList = document.getElementsByClassName("slider__container");

var prev = document.getElementsByClassName("prev")[0];
var next = document.getElementsByClassName("next")[0];

prev.addEventListener("click", myPrev);
next.addEventListener("click", myNext);

var current = 0;

function myPrev()
{
    if(current>0)
    {        
        current--;
        slider.style.left = -100*current + "vw";
    }
    else
    {        
        /*var content = document.getElementsByClassName("slider__container")[2];
        var parent = content.parentNode;
        parent.insertBefore(content, parent.firstChild);*/
        
        slider.style.left = (-100*(sliderList.length-1)) + "vw";
        current = sliderList.length-1;
    }
    
    clearTimeout(myTimer);
    myTimer = setTimeout(showSlides, 3000);
}

function myNext()
{   
    if(current<=sliderList.length-2)
    {
        current++;
        slider.style.left = -100*current + "vw";
    }
    else
    {
        /*var content = document.getElementsByClassName("slider__container")[0];
        var parent = content.parentNode;
        parent.insertBefore(content, parent.lastChild);*/
        
        slider.style.left = "0vw";
        current = 0;
    }
    
    clearTimeout(myTimer);
    myTimer = setTimeout(showSlides, 3000);
    
    
}

var myTimer = setTimeout(showSlides, 3000);

function showSlides()
{
    if(current<=sliderList.length-2)
    {
        current++;
        slider.style.left = -100*current + "vw";
    }
    
    else
    {
        /*var content = document.getElementsByClassName("slider__container")[0];
        var parent = content.parentNode;
        parent.insertBefore(content, parent.lastChild);*/
                
        slider.style.left = "0vw";
        current = 0;
    }
    
    myTimer = setTimeout(showSlides, 3000);
}


var slider__carousel = document.getElementsByClassName('slider--carousel');
var slider__img = document.getElementsByClassName('carousel__img');

var slider__prev = document.getElementsByClassName("carousel__prev")[0];
var slider__next = document.getElementsByClassName("carousel__next")[0];

slider__prev.addEventListener('click', sliderPrev);
slider__next.addEventListener('click', sliderNext);

tab__slider = [4,5,1,2,3];
tab__slider2 = [4,5,1,2,3];

slider__img[4].style.left = "100vw";

function sliderPrev()
{   
    console.log(tab__slider);
    slider__img[4].style.left = "0vw";
    
    
    /*slider__img[tab__slider[4]-1].style.display = "none";
    slider__img[tab__slider[0]-1].style.display = "none";
    slider__img[tab__slider[1]-1].style.display = "block";
            
    slider__img[tab__slider[3]-1].style.zIndex = "5";
    slider__img[tab__slider[3]-1].style.left = "100%";
    slider__img[tab__slider[3]-1].style.left = "0%";
    
    tab__slider.unshift(tab__slider[tab__slider.length-1]);
    tab__slider.splice(tab__slider.length-1,1);*/
        
    
    console.log(tab__slider);
}

function sliderNext()
{
    /*slider__img[tab__slider[tab__slider.length - 2]].classList+=" slider__right";
    slider__img[tab__slider[tab__slider.length - 2]].classList.remove("slider__right");
    slider__img[tab__slider[tab__slider.length - 2]].classList+=" slider__center";
    
    tab__slider.unshift(tab__slider[tab__slider.length-1]);
    tab__slider.splice(tab__slider.length-1,1);    */
    
    slider__img[tab__slider[4]-1].style.display = "none";
    slider__img[tab__slider[0]-1].style.display = "none";
    
    slider__img[tab__slider[3]-1].style.display = "none";
    slider__img[tab__slider[3]-1].style.display = "block";
    
   /* slider__img[tab__slider[3]-1].classList += " slider__left";
    slider__img[tab__slider[3]-1].classList.remove("slider__left");
    
    slider__img[tab__slider[3]-1].classList += " slider__center";*/
    
    slider__img[tab__slider[3]-1].style.zIndex = "5";
    slider__img[tab__slider[3]-1].style.left = "0%";
    slider__img[tab__slider[3]-1].style.left = "100%";
    
    tab__slider.unshift(tab__slider[tab__slider.length-1]);
    tab__slider.splice(tab__slider.length-1,1);
}





