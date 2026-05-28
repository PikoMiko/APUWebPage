const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
        <header class="header">
        <a href="#Home"><img src="elements/multimedia/logo.png" alt="Home" width="55" height="55"></a>
            <div class="navbar">
                <ul>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Text here</a></li>
                    <li><a href="#">Misc</a></li>
                    <li><a href="#">Sponsor</a></li>
                    <li><a href="sign up.html">Sign up</a></li>
                </ul>
            </div>
        </header>
`;
document.body.prepend(headerTemplate.content);

const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
  <footer>test!</footer>
`;
document.body.append(footerTemplate.content);

const playerCount = 5;
        const container = document.getElementById('players');

        for (let i = 1; i <= playerCount; i++) {
            const section = document.createElement('section');
            section.innerHTML = `
                <label><b>Player ${i}</b></label><br/>
                <input type="text" name="first[]" placeholder="First Name" required />
                <input type="text" name="last[]" placeholder="Last Name" required /><br/>
                <label><b>NRIC/Passport No.</b></label>
                <input type="text" name="id[]" placeholder="010203100001" required /><br/>
                <label><b>Contact number:</b></label>
                <input type="text" name="contact[]" placeholder="+60123456789" required /><br/><br/>
            `;
            container.appendChild(section);
        }

const fileInput = document.getElementById("fileInput");
const preview = document.getElementById("preview");

fileInput.addEventListener("change", function () {
    const file = this.files[0];

    if (file) {
        preview.src = URL.createObjectURL(file);
    }
});