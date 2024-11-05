
// dark mode start
const mode = document.querySelector(".mode");
const body = document.querySelector("body");
const dark_icon = document.querySelector(".dark-icon");
const link = document.querySelector("#link");


let image = 0;
mode.addEventListener("click", function(){
    body.classList.toggle("darkmode");
    if(image === 0){
        dark_icon.setAttribute("src", "images/sun.svg");
        link.setAttribute("href", "style/darkmode.css")
        image = 1
    } else{
        dark_icon.setAttribute("src", "images/moon.svg");
        link.setAttribute("href", "style/style.css")
        image = 0
    }
    
})
// dark mode end




// sticky menu scroll start
let navbar = document.getElementById("navbar");
window.addEventListener("scroll", function(){
  let sticky = window.scrollY;
  if (sticky>120){
    navbar.classList.add("sticky_menu")
  }else{
    navbar.classList.remove("sticky_menu")
  }
})
// sticky menu scroll end



// feather icon start
feather.replace()
// feather icon end



// button start
$(function(){
  $(".business-btn button").click(function(){
    $("button").removeClass("active")
    $(this).addClass("active")
  })
})
var mixer = mixitup('.business_filter');
// button end 



$(function(){
    $(".feedback_slider").slick({
        arrows: true,
        prevArrow: '.prevArrow',
        nextArrow: '.nextArrow',
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            
          ]
    });
})
