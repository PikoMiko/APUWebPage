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
                    <li><a href="#">Sign up</a></li>
                </ul>
            </div>
        </header>
`;
document.body.prepend(headerTemplate.content);

const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
  <footer>All rights reserved</footer>
`;
document.body.appendChild(footerTemplate.content);