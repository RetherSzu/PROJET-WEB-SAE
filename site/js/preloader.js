window.addEventListener('load', function() {
    
    document.querySelector('.loader').className += ' run';
    document.querySelector('.preloader').className += ' fadeOut';
    
    setTimeout(function (){
        document.body.innerHTML = '';
        loadHomePage();
        pageIsLoaded = true;
    }, 1000);
});

window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 100;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}

function switchLanguage() {
    const isDropdownMenu = document.querySelector('.switch-language-list');
    const isDropdownButton = document.querySelector('.switch-language');

    if (isDropdownMenu) {
        if (isDropdownMenu.classList.contains("active"))
        {
            isDropdownMenu.classList.remove("active");
            isDropdownMenu.classList.add("enable");
            setTimeout(isDropdownMenu.style.display = "none", 400)
        }
        else 
        {
            isDropdownMenu.classList.remove("enable");
            isDropdownMenu.classList.add('active');
            setTimeout(isDropdownMenu.style.display = "flex", 400)
        }
    }
}

function loadHomePage() {
    document.querySelector('body').innerHTML += `
    <section id="homepage" class="homepage">
        <div class="left-bar">
            <div class="headline">
                <div class="littlebox"></div>
                <a class="headline-text">L'envol vers la victoire</a>
            </div>
        </div>
        <div class="logo">
            <div class="logo-box">
                <img src="images/Togloom_Logo_Blanc_200x200.png" alt="" srcset="">
            </div>
        </div>
        <div class="scroll-container">
            <div class="scroll-down"></div>
            <h3>Défile pour découvrir</h3>
        </div>
    </section>
    <section id="main" class="main reveal">
        <div class="header-component reveal">
            <header>
                <div class="component-header-bar">
                    <div class="nav-bar">
                        <div class="nav-bar-brand">
                            <a href="preloader.html" class="nav-bar-button">
                                <img src="images/Togloom_Logo_Blanc_54x54.png" alt="" srcset="">
                            </a>
                        </div>
                        <nav class="nav-bar-nav">
                            <ul class="nav-bar-nav-list">
                                <li class="nav-bar-item">
                                    <a href="login.html">Identification</a>
                                </li>
                                <li class="nav-bar-item">
                                    <a href="sign-up.html">Inscription</a>
                                </li>
                            </ul>
                        </nav>
                        <div class="switch-language">
                            <div class="current-language" onclick="switchLanguage()" >
                                <span>fr</span>
                                <em class="arrow">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9.571" viewBox="0 0 16 9.571">
                                        <path id="dropDownArrow" d="M207.5,125.932l-5.655-5.622a1.084,1.084,0,0,0-1.528,0,1.072,1.072,0,0,0,0,1.521l6.365,6.328a1.236,1.236,0,0,0,1.637,0l6.365-6.328a1.072,1.072,0,0,0,0-1.521,1.084,1.084,0,0,0-1.528,0Z" transform="translate(-199.499 -119.399)" fill="#fdfdfd" stroke="#fdfdfd" stroke-width="1"/>
                                    </svg>
                                </em>
                            </div>
                            <div class="switch-language-list">
                                <ul>
                                    <li data-lang="fr">fr</li>
                                    <li data-lang="en">en</li>
                                    <li data-lang="es">es</li>
                                </ul>
                            </div>
                        </div>
                        <div class="nav-bar-right">
                            <div class="nav-bar-search">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35">
                                    <path id="icon-search" class="icon-svg-search" d="M17.574,3a14.574,14.574,0,1,0,9.214,25.848l8.7,8.7a1.458,1.458,0,1,0,2.061-2.061l-8.7-8.7A14.559,14.559,0,0,0,17.574,3Zm0,2.915A11.659,11.659,0,1,1,5.915,17.574,11.637,11.637,0,0,1,17.574,5.915Z" transform="translate(-3 -3)"/>
                                </svg>
                            </div>
                            <div class="search-hide">
                                <form class="search-box">
                                    <input type="text" placeholder="Recherche ..."/>
                                </form>
                            </div>
                            <div class="menu-bar">
                                <p>Menu</p>
                                <div class="menu-line">
                                    <div class="line-1"></div>
                                    <div class="line-2"></div>
                                    <div class="line-3"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
        <div class="right-bar-container">
            <div class="right-bar reveal">
            </div>
        </div>
        <div class="main-container">
            <div class="container reveal">
                <h1>Rejoignez et Organisez</h1>
                <h1>les plus grands tournois</h1>
                <h1>du monde</h1>
                <ul class="container-button-list">
                    <li class="container-button-item">
                        <a href="">Rejoindre</a>
                    </li>
                    <li class="container-button-item">
                        <a href="">Organisez</a>
                    </li>
                </ul>
            </div>
            <div class="box-container">
                <div class="medium-box reveal">
                    <h3>Classement :</h3>
                    <p>Le classement permet de voir les meilleurs teams/joueurs dans les différents tournois</p>
                    <a class="container-button-item">classement</a>
                </div>
                <div class="small-box reveal">
                    <h3>Dernier tournoi</h3>
                    <div class="event-type"><a href="">cs-go</a></div>
                    <div class="information-tournament">
                        <h3>Gagant : Navi</h3>
                    </div>
                    <h3 class="box-event">Evénement : <a href="">IEM Winter 2021</a>
                    </h3>
                </div>
                <div class="small-box reveal">
                    <h3>Prochain tournoi</h3>
                    <div class="event-type"><a href="">valorant</a></div>
                    <div class="information-tournament">
                        <h3>Favoris : Vitality</h3>
                    </div>
                    <h3 class="box-event">Evénement : <a href="">GGWP Valorant</a>
                    </h3>
                </div>
            </div>
        </div>
    </section>
    <div id="section" class="menu-hide">
        <div class="menu-bar active">
            <p>Menu</p>
            <div class="menu-line">
                <div class="line-1"></div>
                <div class="line-2"></div>
                <div class="line-3"></div>
            </div>
        </div>
        <div class="main-menu">
            <div class="main-menu-container">
                <h1>Navigation</h1>
                <ul>
                    <li><a href="">Accueil</a></li>
                    <li><a href="">Tournois</a></li>
                </ul>
            </div>
            <div class="main-menu-container">
                <h1>Service</h1>
                <ul>
                    <li><a href="">Boutique</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="">Statistique</a></li>
                </ul>
            </div>
            <div class="main-menu-container">
                <h1>A propos</h1>
                <ul>
                    <li><a href="">Société</a></li>
                    <li><a href="">Equipe</a></li>
                    <li><a href="">Carrières</a></li>
                    <li><a href="mention.html">Mentions légales</a></li>
                </ul>
            </div>
        </div>
    </div>
    <section id="section" class="footer-component">
        <footer class="main-footer reveal">
            <div class="component-footer-bar">
                <div class="footer-container">
                    <h3>Services</h3>
                    <ul class="footer-list">
                        <li><a href="">Design du site</a></li>
                        <li><a href="">Dévelopement</a></li>
                        <li><a href="">Hébergement</a></li>
                    </ul>
                </div>
                <div class="footer-container">
                    <h3>A propos</h3>
                    <ul class="footer-list">
                        <li><a href="">Société</a></li>
                        <li><a href="">L'équipe</a></li>
                        <li><a href="">Carrières</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-social">
                <a href="https://twitter.com/STogloom?t=ESRGmHpKqHTc5fVfusNDeA&s=09">
                    <i class="gg-twitter"></i>
                </a>
                <a href="https://www.instagram.com/site_togloom/?hl=fr">
                    <i class="gg-instagram"></i>
                </a>
                <a href="mailto:togloomsite@gmail.com">
                    <i class="gg-google"></i>
                </a>
            </div>
        </footer>
    </section>
    `;
    var script = document.createElement('script');
    script.src = "js/homepage.js";
    document.body.appendChild(script); 
}
