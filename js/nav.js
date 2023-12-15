const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
        <img src="img/logo_small.png" class="brand-logo" alt="">
        <ul class="links-container">
            <li class="link-item"><a href="./index.html" class="link">home</a></li>
            <li class="link-item"><a href="./menu.html" class="link">menu</a></li>
            <li class="link-item"><a href="./history.html" class="link">our story</a></li>
            <li class="link-item"><a href="./location.html" class="link">location</a></li>
            <li class="link-item"><a href="https://chubbygroup.com/" class="link">chubby group</a></li>
        </ul>
    </div>
    `;
}

createNav();