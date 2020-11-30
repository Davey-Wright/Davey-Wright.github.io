// <script src="https://drive.google.com/uc?id=1xcWrczffE9nO06FlzFlM9WUDPUZI56SC&export=download"></script>


$('.subscription-article-topic').each(function() {
  var text = $(this).text();

  var DOMElement = '<label class="w-checkbox checkbox-field"> ' +
    '<input type="checkbox" id="'+ text +'" name="'+ text.replace(/' '/g, '-') +'" data-name="'+ text +'" class="w-checkbox-input checkbox">' +
      '<span for="'+ text +'" class="checkbox-label w-form-label">'+ text +'</span>' +
  '</label>';

  $('.subscription-article-checkboxes').append(DOMElement);
});



var openSearchBar = function(){
  $(this).addClass('.navbar_search-button--active');
  $('.subnav-wrapper').addClass('subnav-wrapper--hidden');
  $('.navbar_logo').addClass('navbar_logo--hidden'); 
  $('.navbar_search-wrapper').show();
  window.setTimeout(function(){
    $('.navbar_search-wrapper').removeClass('navbar_search-wrapper--hidden');
  }, 350);
};


var closeSearchBar = function(){
  $('.navbar_search-wrapper').addClass('navbar_search-wrapper--hidden');
  
  window.setTimeout(function(){
    $('.navbar_search-wrapper').hide();
    $('.subnav-wrapper').removeClass('subnav-wrapper--hidden');
    $('.navbar_logo').removeClass('navbar_logo--hidden');
  }, 350);
};

var searchBar = function() {
  $('.navbar_search-wrapper').hide();
  $('.navbar_search-button').click(openSearchBar);
  $('.navbar_search-cancel-btn').click(closeSearchBar);   
}


let homepage_logo_animation = function() {
  let cookieName = 'logo-animation'
  let logo_animator = $('.logo-animation .logo-animation-container');
       
  if(typeof Cookies.get(cookieName) !== 'undefined') {
    $('.logo-animation').addClass('hide');
    return
  } else {
    logo_animator.append('<img src="https://drive.google.com/uc?id=1yT-X1mTW978ucA890xrc8M-RCGrInThU&export=download"/>') 
    this.setTimeout( function() {
      $('.logo-animation').addClass('hide');
      Cookies.set('logo-animation', 'disabled');
    }, 5000);
  }
}


let set_editors_note_height = function() {
  const el = $('.volume-1-editors-note'),
        height = el.height() + window.innerHeight;

  el.css('min-height', height);
}


$(document).ready(function() {
  searchBar();
  $('.footer_search-link').click(openSearchBar);
  homepage_logo_animation();
  sal({
    threshold: 0.1
  });

  if(window.location.pathname == '/volume-1') {
    set_editors_note_height();
    $(window).resize(set_editors_note_height)

    sal({ threshold: 0.1 })
    
    var request = new XMLHttpRequest();
    request.open("GET", "https://pursuitcollective.com/volume-1-chapters", true);
    request.responseType = "document";
    request.send(null);
    request.onreadystatechange = function() {
      if (request.readyState == 4) {
        var doc = request.response;
        var elem = doc.getElementById("chapters");
        $('#volume-1-chapters').html(elem.innerHTML).promise().then( sal({ threshold: 0.1 }) );
      }
    }
  }
})  


// <script src="https://drive.google.com/uc?id=1xcWrczffE9nO06FlzFlM9WUDPUZI56SC&export=download"></script>

// <script src='https://gitcdn.link/repo/Davey-Wright/pursuit-collective/master/cdn/application.min.js'></script>
// <script src="https://drive.google.com/uc?id=1VHUmMQVxDHHCipssnC5OigL4JiY_x4kB&export=download"></script>