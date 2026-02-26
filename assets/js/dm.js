// light/dark button
const getColorPreference = () => {
    if (localStorage.getItem(storageKey)) {
        return localStorage.getItem(storageKey);
    }
    else {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"; 
    }
}
const setPreference = () => {
    localStorage.setItem(storageKey, theme);
    reflectPreference();
}
const reflectPreference = () => {
    document.firstElementChild.setAttribute("data-theme", theme);
}
const onClick = () => {
    theme = theme === "light" ? "dark" : "light";
    setPreference();
    swapIcon();
}
const swapIcon = () => {
    if (theme === "light") {
        moonIcon.classList.add("hide");
        sunIcon.classList.remove("hide");
    } else {
        sunIcon.classList.add("hide");
        moonIcon.classList.remove("hide");
    }
}
const storageKey = "theme-preference";
let theme = getColorPreference();
const themeToggle = document.querySelector("#theme-toggle");
const sunIcon = document.querySelector("#sun-icon");
const moonIcon = document.querySelector("#moon-icon");
themeToggle.addEventListener("click", onClick);
reflectPreference();
swapIcon();
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({matches:isDark}) => {
    theme = isDark ? "dark" : "light";
    setPreference();
    swapIcon();
});

const toggleButton = document.querySelector('.toggle-button');
const mobileMenu = document.querySelector('.menu-mobile');

toggleButton.addEventListener("click", (event) => {
    mobileMenu.classList.toggle("slide-in");
});

// click sound
  document.addEventListener('DOMContentLoaded', () => {
    const clickSound = document.getElementById('clickSound');
    const buttons = document.querySelectorAll('button, a'); 

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            clickSound.currentTime = 0; 
            clickSound.play();
        });
    });
});

// 3d world
document.addEventListener('DOMContentLoaded', () => {
    const modelViewer = document.getElementById('modelViewer');
    const enterButton = document.getElementById('enterButton');
    const extraButtons = document.getElementById('extraButtons');
    const backgroundSound = document.getElementById('backgroundSound');
    let soundActivated = false;
    //hide extraButton
    extraButtons.style.display = 'none'; 

    const startBackgroundSound = () => {
        backgroundSound.play();
    };

    const stopBackgroundSound = () => {
        backgroundSound.pause();
        backgroundSound.currentTime = 0; 
    };
    enterButton.addEventListener('click', () => {
        modelViewer.setAttribute('camera-controls', '');
        enterButton.style.display = 'none';
        modelViewer.style.zIndex = '10';
        modelViewer.setAttribute('interaction-prompt', 'auto');
        extraButtons.style.display = 'flex'; 
        modelViewer.style.pointerEvents = 'auto';
        soundActivated = true;
        startBackgroundSound();

        // Remove text shadow 
        const modelTitleContainer = document.querySelector('.model-title-container2');
        if (modelTitleContainer) {
        modelTitleContainer.classList.add('no-shadow');  
        }
    });
    //hide text-shadow
    // heading.style.textShadow = 'none';

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (soundActivated && entry.isIntersecting) {
                startBackgroundSound();
            } else if (soundActivated) {
                stopBackgroundSound();
            }
        });
    });
    observer.observe(modelViewer);
});

// crew
document.addEventListener("DOMContentLoaded", () => {
    const crewButton = document.querySelector(".btn-right");
    const dynamicContent = document.getElementById("dynamicContent");
    const crewContent = `
        <section id="crew" class="block-padding inline-padding">
            <h2>Crew</h2>
            <div class="personal-card-container">
                <div class="personal-card">
                    <div class="personal-img">
                        <img src="assets/img/Crew/Céline_300_200.webp" 
                            srcset="assets/img/Crew/Céline_300_200.webp 1x, assets/img/Crew/Céline_600_400.webp 2x" 
                            alt="Image of Céline" 
                            style="max-width: 100%; height: auto;">
                    </div>
                    <div class="content">
                        <h1>Group-Member</h1>
                        <h2>Céline Hellwig</h2>
                    </div>
                </div>
                <div class="personal-card">
                    <div class="personal-img">
                        <img src="assets/img/Crew/Alex_300_200.webp" 
                            srcset="assets/img/Crew/Alex_300_200.webp 1x, assets/img/Crew/Alex_600_400.webp 2x" 
                            alt="Image of Alexander" 
                            style="max-width: 100%; height: auto;">
                    </div>
                    <div class="content">
                        <h1>Team-Leader</h1>
                        <h2>Alexander Naumann</h2>
                    </div>
                </div>
                <div class="personal-card">
                    <div class="personal-img">
                        <img src="assets/img/Crew/Helena_300_200.webp" 
                            srcset="assets/img/Crew/Helena_300_200.webp 1x, assets/img/Crew/Helena_600_400.webp 2x" 
                            alt="Image of Helena" 
                            style="max-width: 100%; height: auto;">
                    </div>
                    <div class="content">
                        <h1>Group-Member</h1>
                        <h2>Helena Romer</h2>
                    </div>
                </div>
            </div>
        </section>
    `;

    crewButton.addEventListener("click", () => {
        if (dynamicContent.innerHTML === crewContent) {
            dynamicContent.innerHTML = "";
            dynamicContent.classList.add("hidden");
        } else {
            dynamicContent.innerHTML = crewContent;
            dynamicContent.classList.remove("hidden");
            dynamicContent.scrollIntoView({
                behavior: "smooth", 
                block: "start" 
            });
        }
    });
});

// story
const storyButton = document.querySelector(".btn-left");
const storyContent = `
<section id="story" class="block-padding inline-padding">
    <h2 class="story-heading">Story</h2>
    <div class="story-container">  
        <div class="story-text">
            <p>
                In a small village called Grywald, hidden in a forest clearing, live the adventurous Casper and his best friend, Wolf.
                The evening seems peaceful and calm, just like any other day. But today, something feels different.
            </p>
            <p>
                While playing hide and seek, Casper and Wolf don’t realize that a terrifying monster is approaching from the forest—until it’s almost too late.
                At the last second, they manage to hide. The villagers have already taken cover in their homes,
                watching helplessly as the monster storms through the village, destroying and stealing whatever it finds.
            </p>
            <p>
                When the creature finally disappears back into the forest with its stolen goods,
                the villagers slowly come out of their houses to assess the damage. Their barn has been completely destroyed.
                Casper and Wolf examine the ruins closely, and that’s when Casper makes a discovery—a clue or an idea that might just help save the village.
            </p>
        </div>
    </div>
</section>
`;

// character
const characterButton = document.querySelector(".btn-center");
characterButton.addEventListener("click", () => {
    const dynamicContent = document.getElementById("dynamicContent");
    const characterContent = `
    <section id="character" class="block-padding inline-padding">
        <div class="character-container">
            <div class="character-model">
                <model-viewer 
                    src="assets/3d/villager.glb" 
                    alt="3D-Modell von Casper"
                    auto-rotate 
                    shadow-intensity="1"
                    rotation-per-second="30deg">
                </model-viewer>
            </div>   
            <div class="character-text">
                <h2>Villager</h2>
                <div class="character-list">
                    <p><span class="label">Name</span> <span class="separator">:</span> <span class="value">Cecilia</span></p>
                    <p><span class="label">Age</span> <span class="separator">:</span> <span class="value">25 Years</span></p>
                    <p><span class="label">Height</span> <span class="separator">:</span> <span class="value">1,65m</span></p>
                    <p><span class="label">Sex</span> <span class="separator">:</span> <span class="value">Feminine</span></p>
                    <p><span class="label">Creature</span> <span class="separator">:</span> <span class="value">Human</span></p>
                    <p><span class="label">Residence</span> <span class="separator">:</span> <span class="value">Grywald</span></p>
                </div>
                <div class="character-description">
                    <p>Cecilia is a passionate adventurer, specializing in herbalism.
                    She loves spending time in nature, discovering new plants, and expanding her knowledge of their healing properties.
                    Her curiosity leads her to take daily walks. She enjoys the beauty of nature and also notices strange things happening in the forest,
                    which she thinks are signs of something unusual.</p>
                    <p>At home, Cecilia runs a small alchemy shop where she uses her expertise in herbalism. Her healing herbs are especially in demand.</p>
                </div>
            </div>    
        </div>
    </section>


    <section id="character" class="block-padding inline-padding">
        <div class="character-container">
            <div class="character-model">
                <model-viewer 
                    src="assets/3d/casper.glb" 
                    alt="3D-Modell von Casper"
                    auto-rotate 
                    shadow-intensity="1"
                    rotation-per-second="30deg">
                </model-viewer>
            </div>   
            <div class="character-text">
                <h2>Protagonist</h2>
                <div class="character-list">
                    <p><span class="label">Name</span> <span class="separator">:</span> <span class="value">Caspar</span></p>
                    <p><span class="label">Age</span> <span class="separator">:</span> <span class="value">11 Years</span></p>
                    <p><span class="label">Height</span> <span class="separator">:</span> <span class="value">1,45m</span></p>
                    <p><span class="label">Sex</span> <span class="separator">:</span> <span class="value">Masculine</span></p>
                    <p><span class="label">Creature</span> <span class="separator">:</span> <span class="value">Human</span></p>
                    <p><span class="label">Residence</span> <span class="separator">:</span> <span class="value">Grywald</span></p>
                </div>
                <div class="character-description">
                    <p>Casper is a boy who lives in a small, charming village. He’s well-known as a friendly and helpful neighbor.
                    He enjoys playing with his best friend, "Wolf" (a small mouse), especially games like hide-and-seek.
                    Whether he’s exploring or helping his dad at work, he always stands out because of his clever, brave, and funny nature.</p>
                </div>
            </div>    
        </div>
    </section>


    <section id="character" class="block-padding inline-padding">
        <div class="character-container">
            <div class="character-model">
                <model-viewer 
                    src="assets/3d/wolf.glb" 
                    alt="3D-Modell von Casper"
                    auto-rotate 
                    shadow-intensity="1"
                    rotation-per-second="30deg">
                </model-viewer>
            </div>   
            <div class="character-text">
                <h2>Wolf</h2>
                <div class="character-list">
                    <p><span class="label">Name</span> <span class="separator">:</span> <span class="value">"Wolf"</span></p>
                    <p><span class="label">Age</span> <span class="separator">:</span> <span class="value">2 Years</span></p>
                    <p><span class="label">Height</span> <span class="separator">:</span> <span class="value">0,07m</span></p>
                    <p><span class="label">Sex</span> <span class="separator">:</span> <span class="value">Masculine</span></p>
                    <p><span class="label">Creature</span> <span class="separator">:</span> <span class="value">Mouse</span></p>
                    <p><span class="label">Residence</span> <span class="separator">:</span> <span class="value">Grywald</span></p>
                </div>
                <div class="character-description">
                    <p>Wolf, a mouse, was named by his best friend Caspar. A year ago, they met in the woods of Grywald when Caspar found Wolf injured and brought her home with him.
                    With the help of Cecilia, he helped him heal. Their friendship grew stronger over time, and today they are inseparable friends, sharing exciting adventures together.</p>
                </div>
            </div>    
        </div>
    </section>


    <section id="character" class="block-padding inline-padding">
        <div class="character-container">
            <div class="character-model">
                <model-viewer 
                    src="assets/3d/forest_spirit.glb" 
                    alt="3D-Modell von Casper"
                    auto-rotate 
                    shadow-intensity="1"
                    rotation-per-second="30deg">
                </model-viewer>
            </div>   
            <div class="character-text">
                <h2>Forest-Spirit</h2>
                <div class="character-list">
                    <p><span class="label">Name</span> <span class="separator">:</span> <span class="value">"Monster"</span></p>
                    <p><span class="label">Age</span> <span class="separator">:</span> <span class="value">Unknown</span></p>
                    <p><span class="label">Height</span> <span class="separator">:</span> <span class="value">2.50m</span></p>
                    <p><span class="label">Sex</span> <span class="separator">:</span> <span class="value">Unknown</span></p>
                    <p><span class="label">Creature</span> <span class="separator">:</span> <span class="value">Spirit</span></p>
                    <p><span class="label">Residence</span> <span class="separator">:</span> <span class="value">Forest</span></p>
                </div>
                <div class="character-description">
                    <p>The Forest Spirit is a terrifying, gigantic creature that looks like a satyr, but its strange shape and actions make it clear that it’s a monster.
                    It leaves large, weird footprints and has a never-ending hunger. When it smells food, its eyes turn red, and you can hear a strange growl from its stomach.
                    Following its sharp sense of smell, it leaves the forest and follows the trail to Grywald's barn.</p>
                </div>
            </div>    
        </div>
    </section>

    `;
    dynamicContent.innerHTML = characterContent;
    dynamicContent.classList.remove("hidden");
    dynamicContent.scrollIntoView({ behavior: "smooth", block: "start" });
});

storyButton.addEventListener("click", () => {
    dynamicContent.innerHTML = storyContent;
    dynamicContent.classList.remove("hidden");
    dynamicContent.scrollIntoView({
        behavior: "smooth",
        block: "start" 
    });
});

//two image-slider: grywald overview, character
let slideIndexes = { slide1: 1, slide2: 1 }; 

function showSlides(sliderClass, n) {
    let slides = document.getElementsByClassName(sliderClass);

    if (n > slides.length) { slideIndexes[sliderClass] = 1; }  
    if (n < 1) { slideIndexes[sliderClass] = slides.length; }

    // hide all sliders
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // show current slider
    slides[slideIndexes[sliderClass] - 1].style.display = "block";
}

function plusSlides(sliderClass, n) {
    showSlides(sliderClass, slideIndexes[sliderClass] += n);
}

document.addEventListener("DOMContentLoaded", () => {
    showSlides("slide1", slideIndexes["slide1"]);
    showSlides("slide2", slideIndexes["slide2"]);
});

// video
function updateVideoSource() {
    var videoElement = document.getElementById('responsive-video');
    var sourceElement = document.getElementById('video-source');
    
    if (window.innerWidth <= 768) {
      sourceElement.src = 'assets/video/animatic_mobil.mp4';
    } else {
      sourceElement.src = 'assets/video/animatic_desktop.mp4';
    }
    
    // Video neu laden
    videoElement.load();
  }
  
  // Beim Laden der Seite und bei jeder Größenänderung
  window.addEventListener('resize', updateVideoSource);
  window.addEventListener('load', updateVideoSource);

  // village-animation
  // Referenzierung der benötigten Elemente
const animationSection = document.getElementById("project");
const animatedElement = document.querySelector(".vectoranimation_village");

console.log(animationSection);

// Einladen der Animation (via Lottie-Library)
lottie.loadAnimation({
  container: animatedElement, // the dom element that will contain the animation
  renderer: "svg",
  loop: true, // Looping
  autoplay: false, // Autoplay (für uns unerheblich, da wir weiter unten die Wiedergabe manuell triggern)
  speed: 0.5,
  path: "assets/img/vectoranimation/Dorf_Animation.json", // Pfad zu eurer .lottie Datei
  rendererSettings:{
  viewBoxSize: "0 0 1858.78 2300",
  preserveAspectRatio: "xMidYMid slice"

  }

});

const intersectionObserver = new IntersectionObserver((entries) => {
    // If intersectionRatio is 0, the target is out of view
    // and we do not need to do anything.
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            lottie.play();
        }
    });
  });
  // start observing
  intersectionObserver.observe(animatedElement);
  




