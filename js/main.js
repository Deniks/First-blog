
function searchFunction() {

    var input, filter, ul, li, a, i;
    input = document.getElementById('log');
    filter = input.value.toUpperCase();
    ul = document.getElementsByClassName('wraper');
    li = document.getElementsByClassName('block-item');

    for(i=0 ; i< li.length; i++){
        a = li[i].getElementsByTagName('a')[0];
        if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
        }

        else{
            li[i].style.display = 'none';
        }
    }
}



function log(){
  if ($('#log') == 'yes'){
    $('#log').target.style.color = 'red';
  }
}


$(document).ready(log);
function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round( $elem.offset().top );
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

// Check if it's time to start the animation.
function checkAnimation() {
    var $elem = $('.fakeScreen .level');

    // If the animation has already been started
    if ($elem.hasClass('start')) return;

    if (isElementInViewport($elem)) {
        // Start the animation
        $elem.addClass('start');
    }
}

// Capture scroll events
$(window).scroll(function(){
    checkAnimation();
});




var dis_text = $('.text__disabled');
var btn = $('.read-button');


var toggled_list = $('.toggle-list');

$(function () {

    $('.menu-icon').click(function () {
        $(this).toggleClass('is-open');
    });

    $('.menu-icon-trigger').click(function () {
        $(this).parent('.menu-icon-svg').toggleClass('is-open');
    })
});

function back(){
//drop-down 
    toggled_list.hide();
    $('.news').on('click', function () {
      toggled_list.toggle();
    });
//text
    dis_text.hide();
    btn.on('click', function(){

        dis_text.toggle();
        btn.toggleClass('btn-active');
  });

}
$(document).ready(back);

function mob_menu() {
  $('.menu-icon').on('click', function() {
    $('.wrapper').toggle();
  });
}
$(document).ready(mob_menu);
/*
const link = document.querySelectorAll('.menu');
link.forEach(function(element){
  element.addEventListener('click', function(el){
    el.target.style.borderBottom = '2.5px solid red';
    console.log(el);
})});
const text = document.querySelector('#yo');
const h1 = document.querySelector('.menu .link .item');
h1.addEventListener('click', function (el) {
  console.log(el.target);
  console.log(el);
  text.innerHTML += ' when text is pressed';
})
const buttons = document.querySelectorAll('.footer');
buttons.forEach(function (btn){
    btn.addEventListener('click', function(el){

      //const button = el.target.parentElement;
      //button.parentNode.removeChild(button);
    });
});

const btn_element = document.querySelector('.delete-btn');
btn_element.addEventListener('click', function(el){
  el.target.style.backgroundSize = 'contain';
  el.target.style.padding = '30px 30px';
  el.target.style.width = '600px';
  el.target.style.height = '400px';
  el.target.textContent += ' added text';
});
*/