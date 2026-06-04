const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
  <header class="header">
    <a href="home.html" id="home"><img src="elements/multimedia/Images/logo.png" alt="Home" width="55" height="55"></a>
    <nav>
      <a href="#">News</a>
      <a href="about.html">About</a>
      <div class="dropdown">
        <button class="dropbtn">Events
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a href="information.html">Information</a>
          <a href="Event schedule.html">Schedule</a>
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
  <footer>test!</footer>
`;

function initPage() {
  document.body.prepend(headerTemplate.content);
  document.body.append(footerTemplate.content);

  const playerCount = 5;
  const isParticipantFormPage = document.body.id === 'participant-form';
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
      const nameInput = document.getElementById('contactName').value;
      const messageInput = document.getElementById('contactMessage').value;

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

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPage);
} else {
  initPage();
}
