// Offerbox -- Section -1 
var offerbox = document.querySelector(".offerbox")
var offerboxx = document.getElementById("offerbox__X")

offerboxx.addEventListener("click",function(event)
{
    offerbox.style.display = "none"
})

// Navbar -- section-2

var navimage = document.getElementById("navimage")
var navbarside = document.getElementById("navbar-mobile__side")

navimage.addEventListener("click",function(event){
    navbarside.style.left = "50%"
})
var navbarx = document.getElementById("navbar-side__X")
navbarx.addEventListener("click",function(){
     navbarside.style.left = "-50%"
})

//Like -- colors turns into red

var like1 = document.getElementById("mostwanted__like1")
like1.addEventListener("click",function(event)
{
    like1.classList.toggle("active")
})

var like2 = document.getElementById("mostwanted__like2")
like2.addEventListener("click",function(event)
{
    like2.classList.toggle("active")
})

var like3 = document.getElementById("mostwanted__like3")
like3.addEventListener("click",function(event)
{
    like3.classList.toggle("active")
})

var like4 = document.getElementById("mostwanted__like4")
like4.addEventListener("click",function(event)
{
    like4.classList.toggle("active")
})

var like5 = document.getElementById("mostwanted__like5")
like5.addEventListener("click",function(event)
{
    like5.classList.toggle("active")
})

var like6 = document.getElementById("mostwanted__like6")
like6.addEventListener("click",function(event)
{
    like6.classList.toggle("active")
})

var like7 = document.getElementById("mostwanted__like7")
like7.addEventListener("click",function(event)
{
    like7.classList.toggle("active")
})

var like8 = document.getElementById("mostwanted__like8")
like8.addEventListener("click",function(event)
{
    like8.classList.toggle("active")
})



//Swipe page -- section-3

// var images = ["./images/swipe1.jpg","./images/swipe1.jpg,","./images/swipe1.jpg"];
// var leftarrow = document.getElementById("swipe__desc__leftarrow")
// var rightarrow = document.getElementById("swipe__desc__rightarrow")

// let index = 0;

// function shownextimg(){
//     index =(index+1)%images.length;
//     document.getElementById("swipe__images").src = images[index];
// }

var swipeimages = document.getElementById("swipe__images")
var totalimages = document.querySelectorAll(".swipe__images1").length;
let index = 0;

document.getElementById("swipe__desc__leftarrow").addEventListener("click",function()
{
    index = (index + 1) % totalimages;
    shownextimg();
});
document.getElementById("swipe__desc__rightarrow").addEventListener("click",function()
{
    index = (index - 1 + totalimages) % totalimages;
    shownextimg();
});

function shownextimg(){
    swipeimages.style.transform = `translateX(-${index * 100}vw)`;
}
