function changeChocolate () {  
    document.body.style.background = "linear-gradient(#916146, #fefefe)";
 }
function changeLimao () {
 document.body.style.background = "linear-gradient(#7fffd4, #fefefe)";
}
function changeMaracuja () {
    document.body.style.background = "linear-gradient(#e7f20c, #fefefe)";
}
function changeMorango () {
    document.body.style.background = "linear-gradient(#e32817, #fefefe)";
}
function changeMaca () {
    document.body.style.background = "linear-gradient(#a37d2c, #fefefe)";
}

var index = 0,
    amount = 0,
    currTransl = [],
    translationComplete = true,
    moveOffset = 0;

var transitionCompleted = function(){
    translationComplete = true;
}

document.addEventListener("DOMContentLoaded", function(event) 
{
    var carousel = document.getElementById('carousel');

    amount = document.getElementsByClassName("slide").length;
    // get the width of the container
    moveOffset = parseInt(window.getComputedStyle(document.getElementById('carousel-container')).width, 10);
    // calcuate the width of the carousel
    document.getElementById('carousel').style.width = (amount * moveOffset) + 'px';
    // prevent multiple click when transition
    for(var i = 0; i < amount; i++)
    {
        currTransl[i] = -moveOffset;
        document.getElementsByClassName("slide")[i].addEventListener("transitionend", transitionCompleted, true);                    
        document.getElementsByClassName("slide")[i].addEventListener("webkitTransitionEnd", transitionCompleted, true);                    
        document.getElementsByClassName("slide")[i].addEventListener("oTransitionEnd", transitionCompleted, true);                    
        document.getElementsByClassName("slide")[i].addEventListener("MSTransitionEnd", transitionCompleted, true);                  
    }
    // add the last item to the start so that translateX(-moveOffset) works (In case the first click is the previous button)
    document.getElementById('carousel').insertBefore(document.getElementById('carousel').children[4], document.getElementById('carousel').children[0])
    // add click events to control arrows
    document.getElementById('prev').addEventListener('click', prev, true);
    document.getElementById('next').addEventListener('click', next, true);
});

function prev()
{
    if (translationComplete === true)
    {
        translationComplete = false;
        index--;
        if (index == -1)
        {
            index = amount-1;
        }
        var outerIndex = (index) % amount;
        for (var i = 0; i < amount; i++)
        {
            var slide = document.getElementsByClassName("slide")[i];    
            slide.style.opacity = '1';    
            slide.style.transform = 'translateX('+(currTransl[i]+moveOffset)+'px)';
            currTransl[i] = currTransl[i]+moveOffset;
        }
        var outerSlide = document.getElementsByClassName("slide")[outerIndex];
        outerSlide.style.transform = 'translateX('+(currTransl[outerIndex]-(moveOffset*amount))+'px)';
        outerSlide.style.opacity = '0';
        currTransl[outerIndex] = currTransl[outerIndex]-moveOffset*(amount);
        
    }
    if (index===0 || index===5) {
        changeChocolate();
    }
    if (index===1 || index===6) {
        changeLimao();
    }
    if (index===2 || index===7) {
        changeMaracuja();
    }
    if (index===3 || index===8) {
        changeMorango();
    }
    if (index===4 || index===9) {
        changeMaca();
    }
  
    
}

function next()
{
    if (translationComplete === true)
    {
        translationComplete = false;
        var outerIndex = (index) % amount;
        index++;
        for(var i = 0; i < amount; i++)
        {
            var slide = document.getElementsByClassName("slide")[i];    
            slide.style.opacity = '1';    
            slide.style.transform = 'translateX('+(currTransl[i]-moveOffset)+'px)';
            currTransl[i] = currTransl[i]-moveOffset;
            
        }
        var outerSlide = document.getElementsByClassName("slide")[outerIndex];
        outerSlide.style.transform = 'translateX('+(currTransl[outerIndex]+(moveOffset*amount))+'px)';
        outerSlide.style.opacity = '0';
        currTransl[outerIndex] = currTransl[outerIndex]+moveOffset*(amount);
        
    }
    if (index===0 || index===5) {
        changeChocolate();
    }
    if (index===1 || index===6) {
        changeLimao();
    }
    if (index===2 || index===7) {
        changeMaracuja();
    }
    if (index===3 || index===8) {
        changeMorango();
    }
    if (index===4 || index===9) {
        changeMaca();
    }
  
}
