

const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
  <header class="header" id="main-header">
    <a href="home.html" id="home">
      <img src="elements/multimedia/Images/apulogo.png" alt="Home" width="130" height="55">
    </a>
    <nav>
      <a href="news.html">News</a>
      <a href="about.html">About</a>
      
      <div class="dropdown">
        <button class="dropbtn">Events
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a href="information.html">Information</a>
          <a href="Event schedule.html">Schedule</a>
          <a href="resources.html">Resources</a>
          <a href="#">Gallery</a>
        </div>
      </div>
      
      <div class="dropdown">
        <button class="dropbtn">Contact Us
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a href="FAQ.html">FAQ</a>
          <a href="contactUs.html">Feedback</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      
      <a href="Sponsors&Partners.html">Sponsor</a>
      <a href="sign up.html">Sign up</a>
    </nav>
  </header>
`;

const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
  <footer>All rights reserved</footer>
`;


function showDetails(sportName, description) {
    alert("Event: " + sportName + "\n\nDetails: " + description);
}


function initPage() {
  if (document.body) {
    document.body.prepend(headerTemplate.content.cloneNode(true));
    document.body.append(footerTemplate.content.cloneNode(true));
  }

const hoverSound = new Audio('elements/multimedia/audio/hover.wav');
  hoverSound.volume = 0.8;

  document.addEventListener('click', () => {
    hoverSound.play().then(() => {
      hoverSound.pause();
      hoverSound.currentTime = 0;
    });
  }, { once: true });

 document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('mouseenter', () => {
      hoverSound.currentTime = 0;
      hoverSound.play().catch(e => console.error(e));
    });
  });


  const playerCount = 5;
  const isParticipantFormPage = document.body && document.body.id === 'participant-form';
  const container = isParticipantFormPage ? document.getElementById('players') : null;

  if (container) {
    for (let i = 1; i <= playerCount; i++) {
      const section = document.createElement('section');
      section.innerHTML = `
      <div class="playerinfo">    
          <label><b>Player ${i}</b></label><br/>
          <input type="text" class="name" name="first[]" placeholder="First Name" required />
          <input type="text" class="name" name="last[]" placeholder="Last Name" required /><br/>
          <input type="text" class="notname" name="id[]" placeholder="NRIC/Passport No." required /><br/>
          <input type="text" class="notname" name="contact[]" placeholder="Contact number" required /><br/><br/>
      </div>
      `;
      container.appendChild(section);
    }
  }

  initFormFeatures();


  initScrollAndSlider();
}


function initFormFeatures() {

    const signUpBtn = document.getElementById('confirmBtn'); // Предположим, у них есть кнопка с ID
    if (signUpBtn) {
        signUpBtn.addEventListener('click', confirmInfo);
    }

    // Обработчик загрузки фото/файлов
    const fileInput = document.getElementById('fileInput');
    const preview = document.getElementById('preview');
    if (fileInput && preview) {
      fileInput.addEventListener('change', function () {
        const file = this.files[0];
        if (file) {
          preview.src = URL.createObjectURL(file);
        }
      });
    }


    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', function (event) {
        const nameInput = document.getElementById('contactName') ? document.getElementById('contactName').value : '';
        const messageInput = document.getElementById('contactMessage') ? document.getElementById('contactMessage').value : '';

        if (nameInput === '' || messageInput === '') {
          alert('Please fill in all fields!');
          event.preventDefault();
        } else {
          alert('Thank you, ' + nameInput + '! Your message has been sent successfully.');
          contactForm.reset();
        }
      });
    }
}

function confirmInfo() {
    const ask = window.confirm("Are you sure the information below is correct?");
    if (ask) {
        window.alert("Sign up complete. Redirecting...");
        window.location.href = "sign up.html";
    }
}


function initScrollAndSlider() {
    // Логика плавного скрытия навбара при скролле вниз
    let lastScroll = 0;
    const header = document.getElementById("main-header"); 

    if (header) {
        window.addEventListener("scroll", () => {
            let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            
            if (currentScroll > lastScroll && currentScroll > 80) {
                header.style.transform = "translateY(-100%)"; 
            } else {
                header.style.transform = "translateY(0)";      
            }
            lastScroll = currentScroll;
        });
    }


    const slides = document.querySelectorAll(".slide");
    if (slides.length > 0) {
        let currentIdx = 0;

        function changeSlide(next = true) {
            slides[currentIdx].classList.remove("active");
            if (next) {
                currentIdx = (currentIdx + 1) % slides.length;
            } else {
                currentIdx = (currentIdx - 1 + slides.length) % slides.length;
            }
            slides[currentIdx].classList.add("active");
        }

        const nextBtn = document.getElementById("nextSlide");
        const prevBtn = document.getElementById("prevSlide");

        if (nextBtn) {
            nextBtn.addEventListener("click", (e) => {
                e.preventDefault(); 
                e.stopPropagation(); 
                changeSlide(true);
            });
        }
        if (prevBtn) {
            prevBtn.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();
                changeSlide(false);
            });
        }
    }
}


if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPage);
} else {
  initPage();
}