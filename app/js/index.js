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
                
        current = sliderList.length-1;
        slider.style.left = 0 + "vw";
    }
    
    myTimer = setTimeout(showSlides, 3000);
}



