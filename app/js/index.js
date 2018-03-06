//menu
var mobile = document.getElementsByClassName("mobile")[0];
var hamburger = document.getElementsByClassName("hamburger")[0];
var nav = document.getElementsByClassName("nav")[0];
hamburger.addEventListener("click", drop);

var body = document.getElementsByTagName("body")[0];

var hamburger__span = document.getElementsByClassName("hamburger__item--white");
var slider__time = 5000;

function drop()
{
    hamburger.classList.toggle('hamburger--pushed');
    nav.classList.toggle('nav--drop');
    var backColor = window.getComputedStyle( mobile,null).getPropertyValue('background-color');      
    
    if(hamburger__span[0].style.backgroundColor == backColor){
        hamburger__span[0].style.backgroundColor = "white";
        hamburger__span[1].style.backgroundColor = "white";
        hamburger__span[2].style.backgroundColor = "white";
    }
    else{
        hamburger__span[0].style.backgroundColor = backColor;
        hamburger__span[1].style.backgroundColor = backColor;
        hamburger__span[2].style.backgroundColor = backColor;
    }
    
}

// Scroll to specific values
// scrollTo is the same
window.scroll({
  top: 2500, 
  left: 0, 
  behavior: 'smooth' 
});

// Scroll certain amounts from current position 
window.scrollBy({ 
  top: 100, // could be negative value
  left: 0, 
  behavior: 'smooth' 
});

// Scroll to a certain element
var sectionScroll = document.getElementsByClassName['box__border'];

console.log("czemu to nie działa");

/*
sectionScroll[0].addEventListener('click', function(){
    console.log("działa");
    document.querySelector('#headline--first').scrollIntoView({ 
  behavior: 'smooth' 
});
});
*/



$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 20) {
            /*$('.main').addClass('main--margin');*/
             $('.header').addClass('fix');
            
        } else {
             /*$('.main').removeClass('main--margin');*/
             $('.header').removeClass('fix');
        }
    });
        
    var test = $(".menu__link");
    
    test.eq(0).hover(
      function() {
        $( this ).removeClass( "menu__link--first" );
      }
      ,function() {
        $( this ).addClass( "menu__link--first" );
      }
    );
    test.eq(1).hover(
      function() {
        $(".menu__link").eq(0).removeClass( "menu__link--first" );
          $( this ).removeClass( "menu__link--second" );
      }
      ,function() {
        $( ".menu__link" ).eq(0).addClass( "menu__link--first" );
        $( this ).addClass( "menu__link--second" );
      }
    );
    test.eq(2).hover(
      function() {
        $(".menu__link").eq(1).removeClass( "menu__link--second" );
        $( this ).removeClass( "menu__link--third" );
      }
      ,function() {
        $(".menu__link").eq(1).addClass( "menu__link--second" );
        $( this ).addClass( "menu__link--third" );
      }
    );
     test.eq(3).hover(
      function() {
        $(".menu__link").eq(2).removeClass( "menu__link--third" );
        $( this ).removeClass( "menu__link--fourth" );
      }
      ,function() {
        $(".menu__link").eq(2).addClass( "menu__link--third" );
        $( this ).addClass( "menu__link--fourth" );
      }
    );
    test.eq(4).hover(
      function() {
        $(".menu__link").eq(3).removeClass( "menu__link--fourth");
        $( this ).eq(4).removeClass("menu__link--five");
      }
      ,function() {
        $(".menu__link").eq(3).addClass( "menu__link--fourth" );
        $( this ).eq(4).addClass( "menu__link--five" );
      }
    );
    test.eq(5).hover(
      function() {
        $(".menu__link").eq(4).removeClass( "menu__link--five" );
      }
      ,function() {
        $(".menu__link").eq(4).addClass( "menu__link--five" );
      }
    );
    
    
    
   /* var slickOpts = {
        speed: 500,
        autoplay: true
    };
    
    $('.single-item').slick(slickOpts);*/
                                
});

//slider
/*var slider = document.getElementsByClassName("slider__box")[0];
var sliderList = document.getElementsByClassName("slider__container");

var prev = document.getElementsByClassName("prev")[0];
var next = document.getElementsByClassName("next")[0];

var sliderContent = document.getElementsByClassName("slidercontent");
var trapezoid = document.getElementsByClassName("trapezoid__circle");

prev.addEventListener("click", myPrev);
next.addEventListener("click", myNext);
var buttonSlider = document.getElementsByClassName("section__link")[0];

var current = 0;*/

/*backgroundColor();*/
/*
content();
*/

/*function myPrev()
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
    myTimer = setTimeout(showSlides, slider__time);
}*/

/*
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
    myTimer = setTimeout(showSlides, slider__time);

}
*/

/*var myTimer = setTimeout(showSlides, slider__time);

function showSlides()
{
    if(current<=sliderList.length-2)
    {
        current++;
        slider.style.left = -100*current + "vw";
    }
    
    else
    {
        var content = document.getElementsByClassName("slider__container")[0];
        var parent = content.parentNode;
        parent.insertBefore(content, parent.lastChild);
                
        slider.style.left = "0vw";
        current = 0;
    }
    
    backgroundColor();
    content();
    
    myTimer = setTimeout(showSlides, slider__time);
}*/



/*var myFunction = function() {
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
                myTimer = setTimeout(showSlides, slider__time);
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
                myTimer = setTimeout(showSlides, slider__time);
            }
            
            backgroundColor();
            content();
        }
    }
};*/



/*
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
*/

/*function content()
{
    for(var i=0; i<sliderContent.length; i++)
    {
        sliderContent[i].style.display = "none";   
    }
    
    sliderContent[current].style.display = "block";
}*/

/*var trapezoid = document.getElementsByClassName("trapezoid__circle");

for (var i = 0; i < trapezoid.length; i++) {
    trapezoid[i].addEventListener('click', myFunction, false);
}

var myFunction = function() {
    console.log(działa);
    var attribute = this.getAttribute("data-myattribute");
    alert(attribute);
};



for(var i=0; i<trapezoid.length; i++)
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


/*var slider__carousel = document.getElementsByClassName('slider--carousel');
var slider__img = document.getElementsByClassName('carousel__img');

var slider__prev = document.getElementsByClassName("carousel__prev")[0];
var slider__next = document.getElementsByClassName("carousel__next")[0];

slider__prev.addEventListener('click', sliderPrev);
slider__next.addEventListener('click', sliderNext);

tab__slider = [4,5,1,2,3];
tab__slider2 = [4,5,1,2,3];

slider__img[4].style.left = "100vw";*/

/*function sliderPrev()
{   
    console.log(tab__slider);
    slider__img[4].style.left = "0vw";
    
    
    slider__img[tab__slider[4]-1].style.display = "none";
    slider__img[tab__slider[0]-1].style.display = "none";
    slider__img[tab__slider[1]-1].style.display = "block";
            
    slider__img[tab__slider[3]-1].style.zIndex = "5";
    slider__img[tab__slider[3]-1].style.left = "100%";
    slider__img[tab__slider[3]-1].style.left = "0%";
    
    tab__slider.unshift(tab__slider[tab__slider.length-1]);
    tab__slider.splice(tab__slider.length-1,1);
        
    

    console.log(tab__slider);
}


function sliderNext()
{
    slider__img[tab__slider[tab__slider.length - 2]].classList+=" slider__right";
    slider__img[tab__slider[tab__slider.length - 2]].classList.remove("slider__right");
    slider__img[tab__slider[tab__slider.length - 2]].classList+=" slider__center";
    
    tab__slider.unshift(tab__slider[tab__slider.length-1]);
    tab__slider.splice(tab__slider.length-1,1);    
    
    slider__img[tab__slider[4]-1].style.display = "none";
    slider__img[tab__slider[0]-1].style.display = "none";
    
    slider__img[tab__slider[3]-1].style.display = "none";
    slider__img[tab__slider[3]-1].style.display = "block";
    
    slider__img[tab__slider[3]-1].classList += " slider__left";
    slider__img[tab__slider[3]-1].classList.remove("slider__left");
    
    slider__img[tab__slider[3]-1].classList += " slider__center";
    
    slider__img[tab__slider[3]-1].style.zIndex = "5";
    slider__img[tab__slider[3]-1].style.left = "0%";
    slider__img[tab__slider[3]-1].style.left = "100%";
    
    tab__slider.unshift(tab__slider[tab__slider.length-1]);
    tab__slider.splice(tab__slider.length-1,1);
}*/



//slider

if(body.classList.contains("home")){
var containerSlider = document.getElementsByClassName("container__photo");
var currentSlider = 0; 

var prev = document.getElementsByClassName("container__prev");
var next = document.getElementsByClassName("container__next");

var buttonsSlider = document.getElementsByClassName("buttons__item--slider");

buttonsSlider[0].addEventListener("click", function(){
    currentSlider = 0;              
    slider();
});

buttonsSlider[1].addEventListener("click", function(){
    currentSlider = 1;           
    slider();
});

buttonsSlider[2].addEventListener("click", function(){
    currentSlider = 2;          
    slider();
});

buttonsSlider[3].addEventListener("click", function(){
    currentSlider = 3;    
    slider();
});

console.log(containerSlider);

console.log(currentSlider);
console.log(next);
console.log(prev);

slider();

prev[0].addEventListener("click", prevSlide);
next[0].addEventListener("click", nextSlide);

function prevSlide(){
    console.log("działa1");
    if(currentSlider == 0){
        currentSlider = containerSlider.length - 1;
    }  
    else{
        currentSlider--;
    }
    slider();
}

function nextSlide(){
    console.log("działa2");
    if(currentSlider >= 3 ){
        currentSlider = 0;
    }  
    else{
        currentSlider++;
    }
    slider();
}

console.log(buttonsSlider);

function slider(){
    for(var i = 0; i < containerSlider.length ; i++){
        containerSlider[i].setAttribute("style", "display: none;");
        
    }
    for(var i = 0; i < buttonsSlider.length ; i++){
        buttonsSlider[i].getElementsByClassName("buttons__svg")[0].style.opacity = "0.7";
    }
    console.log(currentSlider);
    containerSlider[currentSlider].setAttribute("style", " display: block;" );
    buttonsSlider[currentSlider].getElementsByClassName("buttons__svg")[0].style.opacity = "1";
}

}


                        





