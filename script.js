const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
  <header class="header">
    <a href="home.html" id="home"><img src="elements/multimedia/Images/logo.png" alt="Home" width="55" height="55"></a>
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

  // leaderboard stuff
  const categoryLabels = {
    fs50: '50m Freestyle',
    fs100: '100m Freestyle',
    bs50: '50m Backstroke',
    bs100: '100m Backstroke',
    totalpts: 'Team Points'
  };

  let currentCategory = 'fs50';

  function formatTime(value) {
    return `${value.toFixed(2)}s`;
  }

  function buildEntryHTML(entry, index) {
    const rank = index + 1;
    const isTeamPoints = currentCategory === 'totalpts';
    const scoreValue = isTeamPoints
      ? entry.total
      : `${formatTime(entry.time)} • ${entry.points} pts`;
    const detail = isTeamPoints
      ? `<div class="entry-meta">50m ${entry.fs50} • 100m ${entry.fs100} • 50mB ${entry.bs50} • 100mB ${entry.bs100}</div>`
      : `<div class="entry-meta">${entry.team}</div>`;

    const medalNames = ['Gold', 'Silver', 'Bronze'];
    const rankLabel = rank <= 3
      ? `<span class="medal medal-${rank}">${medalNames[rank - 1]}</span>`
      : `${rank}`;

    return `
      <div class="leaderboard-row ${index < 3 ? 'top-three' : ''}">
        <span class="leaderboard-rank">${rankLabel}</span>
        <div class="entry-main">
          <strong>${isTeamPoints ? entry.team : entry.name}</strong>
          ${detail}
        </div>
        <span class="leaderboard-score">${scoreValue}</span>
      </div>
    `;
  }

  function renderLeaderboard() {
    const board = document.getElementById('renderboard');
    if (!board) return;

    const race = Swimraces[currentCategory];
    if (!race) return;

    const sorted = [...race.entries].sort((a, b) => {
      return currentCategory === 'totalpts'
        ? b.total - a.total
        : a.time - b.time;
    });

    board.innerHTML = `
      <div class="leaderboard-card">
        <div class="leaderboard-header">
          <span class="leaderboard-type">${race.label}</span>
          <span class="leaderboard-count">${sorted.length} competitors</span>
        </div>
        <div class="leaderboard-row leaderboard-row--head">
          <span>Rank</span>
          <span>Athlete / Team</span>
          <span>${currentCategory === 'totalpts' ? 'Total points' : 'Time • Points'}</span>
        </div>
        ${sorted.map((entry, index) => buildEntryHTML(entry, index)).join('')}
      </div>
    `;

    const categoryLabel = document.getElementById('categories');
    if (categoryLabel) {
      categoryLabel.textContent = race.label;
    }

    ['fs50', 'fs100', 'bs50', 'bs100', 'totalpts'].forEach(cat => {
      const btn = document.getElementById(`btn-${cat}`);
      if (btn) btn.classList.toggle('active', cat === currentCategory);
    });
  }

  function switchTab(category) {
    currentCategory = category;
    renderLeaderboard();
  }

  window.switchTab = switchTab;

  if (document.getElementById('renderboard')) {
    renderLeaderboard();
  }

  // end of leaderboard stuff
  
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
