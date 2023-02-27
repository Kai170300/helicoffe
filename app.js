$(document).ready(function(){
    console.log('sad')

    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 50){
        $(".nav").css("background", "#fff");
        $(".nav").css("box-shadow", "rgba(0, 0, 0, 0.1) 0px 4px 12px")
      }
      else {
        $(".nav").css("background", "transparent");
        $(".nav").css("box-shadow", "none");
      }
    })

    const mobile = document.querySelector(".burger-btn");
    mobile.onclick = function() {
      navBar = document.querySelector(".nav-menu");
      navBar.classList.toggle("active");
    }

    $(".heart").on("click", function(){
        $(this).toggleClass("is-active");
    });

    var mixer = mixitup('.product-list',{
        selectors: {
            target:'.product-cart' 
        },
        animation: {
            duration:400
        }
    });
})