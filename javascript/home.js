AOS.init({
    offset:1,
  });

  var TrandingSlider = new Swiper('.frame1-tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: 'auto',
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate:0,
      stretch: 0,
      depth: 300,
      modifier: 1,
      
    },
    autoplay: {
      delay: 2000,
    },
    
  });
//
  var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: 'auto',
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate:100,
      stretch: 0,
      depth: 300,
      modifier: 2.5,
      
    },
    autoplay: {
      delay: 2000,
    },
    
  });
  

  // COUNT NUMBER
  const counts = document.querySelectorAll('.count')
  const speed = 597
  counts.forEach((counter) => {
    function upData(){
      const target = Number(counter.getAttribute('data-target'))
      const count = Number(counter.innerText)
      const inc = target / speed
      if(count < target){
        counter.innerText = Math.floor(inc + count)
        setTimeout(upData , 1)
      }
      else{
        counter.innerText = target
      }
    }
    upData()
  })
  // ================================FAQ=========================
let toggles = document.getElementsByClassName('faq-toggle');
let contentDiv = document.getElementsByClassName('faq-content-text-container');
let icons = document.getElementsByClassName('faq-icon');

for(let i=0; i<toggles.length; i++){
  toggles[i].addEventListener('click', ()=>{
      if( parseInt(contentDiv[i].style.height)
        != contentDiv[i].scrollHeight){
        contentDiv[i].style.height = contentDiv[i].scrollHeight + 'px';
        toggles[i].style.color = "#e56f87";
        icons[i].classList.remove('bi-plus-circle-fill');
        icons[i].classList.add('bi-dash-circle-fill');
      }
      else{
        contentDiv[i].style.height = '0px';
        toggles[i].style.color = "#111130";
        icons[i].classList.remove('bi-dash-circle-fill');
        icons[i].classList.add('bi-plus-circle-fill');
      }
      for(let j =0; j<contentDiv.length; j++){
        if(i != j){
          contentDiv[j].style.height = '0px';
          toggles[j].style.color = "#111130";
          icons[j].classList.remove('bi-dash-circle-fill');
          icons[j].classList.add('bi-plus-circle-fill');
        }
      }
});
}
// =============================POINTS TABLE SECTION====================
jQuery(function(){
  
  jQuery('.point-single-1').click(function(){
    jQuery('.points-target-2').hide();
    jQuery('.points-target-3').hide();
    jQuery('.points-target-1').show();

    // jQuery('#pointstable1'+$(this).attr('target')).show();
  });
  jQuery('.point-single-2').click(function(){
    jQuery('.points-target-1').hide();
    jQuery('.points-target-3').hide();
    jQuery('.points-target-2').show();

    // jQuery('#pointstable1'+$(this).attr('target')).show();
  });
  jQuery('.point-single-3').click(function(){
    jQuery('.points-target-2').hide();
    jQuery('.points-target-1').hide();
    jQuery('.points-target-3').show();

    // jQuery('#pointstable1'+$(this).attr('target')).show();
  });
});

// ===========================HOW TO PLAY===========================
$(document).ready(function () {
  $('.play-list-slider').slick({
      dots: false,
      arrow: false,
      autoplay: true,
      autoplaySpeed: 1500,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 5,
                  slidesToScroll: 5,
                  infinite: true,
                  dots: true
              }
          },
          {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
          },
          {
              breakpoint: 700,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
              }
          }, {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
      ]
  });
});

// CUSTOMER-REVIEW
$(document).ready(function () {
  $('.review-wrapper').slick({
      dots: false,
      arrow: false,
      autoplay: true,
      autoplaySpeed: 1500,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 2,
      responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 2,
                  infinite: true,
                  dots: true
              }
          },
          {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
          },
          {
              breakpoint: 700,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
              }
          }, {
              breakpoint: 540,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
      ]
  });
});