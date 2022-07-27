"use strict";


const submitBtn=document.querySelector('.submit-btn');



const validationCheck=()=>{
  const invalidMessage=document.querySelector('.invalid-message');
let mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;

  const emailInput=document.querySelector('.email-input').value;
if(emailInput.match(mailRegex)){
  invalidMessage.style.display="block";

  invalidMessage.innerHTML="valid email-address"
  invalidMessage.style.color="green"
}else if(emailInput===""){
  invalidMessage.style.display="none"
}else{
  invalidMessage.style.display="block";
  invalidMessage.style.color="red"
  invalidMessage.innerHTML="invalid email-address"
}
}




// --------------------------
$('.sliders').slick({
    infinite: true,
    dots:true,
    
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
          breakpoint: 1004,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 990,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });
                  