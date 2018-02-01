//menu
var hamburger = document.getElementsByClassName("hamburger")[0];
var nav = document.getElementsByClassName("nav")[0];
hamburger.addEventListener("click", drop);

function drop()
{
    hamburger.classList.toggle('hamburger--pushed')
    nav.classList.toggle('nav--drop');
}

//slider
var slider = document.getElementsByClassName("slider__box")[0];
var sliderList = document.getElementsByClassName("slider__container");

var prev = document.getElementsByClassName("prev")[0];
var next = document.getElementsByClassName("next")[0];

var sliderContent = document.getElementsByClassName("slidercontent");
var buttonSlider = document.getElementsByClassName("section__link")[0];
var trapezoid = document.getElementsByClassName("trapezoid__circle");

console.log(buttonSlider);

prev.addEventListener("click", myPrev);
next.addEventListener("click", myNext);

var current = 0;

backgroundColor();
content();

function myPrev()
{
    
    console.log(current);
    
    if(current>0)
    {        
        current--;
        slider.style.left = -100*current + "vw";
    }
    else
    {                
        slider.style.left = (-100*(sliderList.length-1)) + "vw";
        current = sliderList.length-1;
    }
    
    backgroundColor();
    content();
    
    clearTimeout(myTimer);
    myTimer = setTimeout(showSlides, 3000);
}

function myNext()
{   
    console.log(current);
    
    if(current<=sliderList.length-2)
    {
        current++;
        slider.style.left = -100*current + "vw";
    }
    else
    {        
        slider.style.left = "0vw";
        current = 0;
    }
    
    backgroundColor();
    content();
    
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
    
    backgroundColor();
    content();
    
    myTimer = setTimeout(showSlides, 3000);
}



var myFunction = function() {
    for(var i=0; i<trapezoid.length; i++){
        if(trapezoid[i].classList.remove("current"));
    }
    
    this.classList += " current";
    for(var i=0; i<trapezoid.length; i++){
        if(trapezoid[i].classList.contains("current"))
        {
            if(i>current)
            {
                current = i-1;
                
                if(current<=sliderList.length-2)
                {
                    current++;
                    slider.style.left = -100*current + "vw";
                }
                else
                {        
                    slider.style.left = "0vw";
                }
                
                backgroundColor();
                
                clearTimeout(myTimer);
                myTimer = setTimeout(showSlides, 3000);
            }
            else
            {
                current = i+1;
                
                console.log(current);
                
                if(current>0)
                {
                    current--;
                    slider.style.left = -100*current + "vw";
                }
                else
                {                
                    slider.style.left = (-100*(sliderList.length-1)) + "vw";
                }
                
                backgroundColor();

                clearTimeout(myTimer);
                myTimer = setTimeout(showSlides, 3000);
            }
            
            backgroundColor();
            content();
            
        }
    }
};



for (var i = 0; i < trapezoid.length; i++) {
    trapezoid[i].addEventListener('click', myFunction, false);
}

function backgroundColor()
{
    for(var i=0; i<trapezoid.length; i++){
            trapezoid[i].style.backgroundColor = "white";
    }
    
        buttonSlider.classList = "section__link";
        buttonSlider.children[0].classList = "section__svg";
        buttonSlider.children[1].classList = "section__content";
    
    if(current==0)
    {
        trapezoid[current].style.backgroundColor = "rgb(255, 180, 0)";
                
        buttonSlider.classList += " button--yellow";
        buttonSlider.children[0].classList += " svg--yellow";
        buttonSlider.children[1].classList += " content--yellow";
        
    }
    if(current==1)
    {
        trapezoid[current].style.backgroundColor = "rgb(0, 166, 237)";
                
        buttonSlider.classList += " button--blue";
        buttonSlider.children[0].classList += " svg--blue";
        buttonSlider.children[1].classList += " content--blue";
    }
    if(current==2)
    {
        trapezoid[current].style.backgroundColor = "rgb(127, 184, 0)";
        
        buttonSlider.classList += " button--green";
        buttonSlider.children[0].classList += " svg--green";
        buttonSlider.children[1].classList += " content--green";
    }
    if(current==3)
    {
        trapezoid[current].style.backgroundColor = "rgb(13, 44, 84)";
        
        buttonSlider.classList += " button--navy";
        buttonSlider.children[0].classList += " svg--navy";
        buttonSlider.children[1].classList += " content--navy";
    }
    if(current==4)
    {
        trapezoid[current].style.backgroundColor = "rgb(246, 81, 29)";
        
        buttonSlider.classList += " button--orange";
        buttonSlider.children[0].classList += " svg--orange";
        buttonSlider.children[1].classList += " content--orange";
    }
}

function content()
{
    for(var i=0; i<sliderContent.length; i++)
    {
        sliderContent[i].style.display = "none";   
    }
    
    sliderContent[current].style.display = "block";
}





/*var trapezoid = document.getElementsByClassName("trapezoid__circle");

for (var i = 0; i < trapezoid.length; i++) {
    trapezoid[i].addEventListener('click', myFunction, false);
}

var myFunction = function() {
    console.log(działa);
    var attribute = this.getAttribute("data-myattribute");
    alert(attribute);
};*/



/*for(var i=0; i<trapezoid.length; i++)
{
    trapezoid[i].addEventListener("click", function current(e)
    {
        console.log(current);
        if(current>i)
        {
            console.log(i);
            current = i;
            myNext();
        }
        else
        {
            console.log(i);
            current = i;
            myPrev();
        }
        
    });
}*/


























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





