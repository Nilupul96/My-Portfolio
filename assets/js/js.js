
//------nav bar menu opening-------//

const nav_menu = document.getElementById("nav-menu");
const menu_show_btn = document.getElementById("nav-toggle");
const menu_hide_btn = document.getElementById("menu_hide_btn");
const show_menu = "show_menu";


menu_show_btn.addEventListener("click", funShow);
menu_hide_btn.addEventListener("click", funHide);

function funShow() {
    nav_menu.classList.add(show_menu);
}

function funHide() {
    nav_menu.classList.remove(show_menu);
};




//-------active menu li a------//

// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");
// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);
function navHighlighter() {
    // Get current scroll position
    let scrollY = window.pageYOffset;

    // Now we loop through sections to get height, top and ID values for each
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");

        /*
        - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
        - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
        */
        if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
        ) {
            document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active-link");
        } else {
            document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active-link");
        }
    });
};


//-----slider-----//
var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 40,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    coverflowEffect: {
        rotate: 0,
        stretch: -40,
        depth: 80,
        modifier: 1,
        slideShadows: false,
    },
    breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        410: {
            slidesPerView: 1.1,
            spaceBetween: 20,
            coverflowEffect:
            {
                stretch: -20,
            }
        },
        640: {
            slidesPerView: 1.4,
            spaceBetween: 20,
            coverflowEffect:
            {
                stretch: -20,
            }
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
            coverflowEffect:
            {
                stretch: -20,
            }
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
            coverflowEffect:
            {
                stretch: -30,
            }
        },
    }
});

//-----parallax effect-----//
var scene = document.getElementById('scene');
var parallax = new Parallax(scene);

var scene = document.getElementById('scene2');
var parallax = new Parallax(scene2);

var scene = document.getElementById('scene3');
var parallax = new Parallax(scene3);

var scene = document.getElementById('scene4');
var parallax = new Parallax(scene4);



//-----animation-----//
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 200,
    reset: true,
});
//bottom
sr.reveal(`.sr01`, { delay: 300, origin: 'bottom' }),
    sr.reveal(`.sr02`, { delay: 600, origin: 'bottom' }),
    sr.reveal(`.sr03`, { delay: 900, origin: 'bottom' }),
    sr.reveal(`.sr04`, { delay: 1200, origin: 'bottom' }),
    sr.reveal(`.sr05`, { delay: 1500, origin: 'bottom' });
//top
sr.reveal(`.sr06`, { delay: 300, origin: 'top' }),
    sr.reveal(`.sr07`, { delay: 600, origin: 'top' }),
    sr.reveal(`.sr08`, { delay: 900, origin: 'top' }),
    sr.reveal(`.sr09`, { delay: 1200, origin: 'top' }),
    sr.reveal(`.sr10`, { delay: 1500, origin: 'top' });

    var tabLinks = document.getElementsByClassName('tab-links')
    var tabContents = document.getElementsByClassName('tab-content')

    function openTab(tabName) {
        console.log(tabName);
        for (tabLink of tabLinks) {
            tabLink.classList.remove("active-link");
        }
        for (tabContent of tabContents) {
            tabContent.classList.remove('active-tab');
        }
        event.currentTarget.classList.add('active-link');
        document.getElementById(tabName).classList.add('active-tab');
    }
    document.getElementById('contactMe').addEventListener('click', function() {
        // Replace '1234567890' with the target phone number (with country code, without '+' sign)
        var phoneNumber = '+94710380434';
        var message = 'Hello! I am interested in hiring you. Please let me know the details.';
  
        // Encode the message to ensure it works correctly in the URL
        var encodedMessage = encodeURIComponent(message);
  
        // Create the WhatsApp URL
        var whatsappUrl = 'https://wa.me/' + phoneNumber + '?text=' + encodedMessage;

        // Open the WhatsApp URL
        window.open(whatsappUrl, '_blank');
      });

      function openLink(url) {
        window.open(url, '_blank');
    }

    function scrollToContact() {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    }

    const form = document.getElementById('form');
    const result = document.getElementById('result');

    form.addEventListener('submit', function(e) {
    
        e.preventDefault();
        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        result.innerHTML = "Please wait..."
        console.log(json);
          fetch('https://api.web3forms.com/submit', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                      'Accept': 'application/json'
                  },
                  body: json
              })
              .then(async (response) => {
                  let json = await response.json();
                  if (response.status == 200) {
                      result.innerHTML = "Form submitted successfully!";
  
                  } else {
                      console.log(response);
                      result.innerHTML = json.message;
                  }
              })
              .catch(error => {
                  console.log(error);
                  result.innerHTML = "Something went wrong!";
              })
              .then(function() {
                  form.reset();
                  setTimeout(() => {
                      result.style.display = "none";
                  }, 3000);
              });
      });