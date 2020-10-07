const BASE_URL = 'https://irob466.github.io/hawtube/static'

// mst3k silhouette
function mst3k() {
    const silhouette = document.createElement("img");
    silhouette.src = `${BASE_URL}/mst3k.png`
    silhouette.style.position = "absolute";
    silhouette.style.bottom = 0;
    silhouette.style.right = "15px";
    silhouette.style.zIndex = 1;
    document.querySelector("#videowrap").appendChild(silhouette);
}

// jackass intro
function jackass() {
    const audio = new Audio(`${BASE_URL}/jackass.mp3`);
    audio.addEventListener('canplaythrough', e => audio.play());
}

// we'll be right back
function beRightBack() {
    let brb = new Image();
    brb.src = `${BASE_URL}/wellbrb.png`;
    brb.classList.add('brb');
    const brbSound = new Audio(`${BASE_URL}/wellbrb.mp3`);

    let frostedPane = document.createElement('div');
    frostedPane.classList.add('frosted-pane');
    frostedPane.appendChild(brb);

    brbSound.addEventListener('ended', e => {
        setTimeout(() => {
            document.body.removeChild(frostedPane);
            document.body.style.overflow = 'visible';
            frostedPane = null;
            brb = null;
        }, 1000);
    });

    brbSound.addEventListener('play', e => {
        document.body.appendChild(frostedPane);
        document.body.style.overflow = 'hidden';
        window.scrollTo(0, 0);
    });

    brbSound.addEventListener('canplaythrough', e => {
        brbSound.play();
    });
}

function popups() {
    let ieWindow = document.createElement('div');
    ieWindow.classList.add('ms-window');
    ieWindow.innerHTML = `
        <header class="ms-header">
            <img src="https://irob466.github.io/hawtube/static/html-0.png">
            <span>You've won an iPod - Microsoft Internet Explorer</span>
            <div class="window-icon minimise"></div>
            <div class="window-icon maximise"></div>
            <div class="window-icon close"></div>
        </header>
        <img src="https://irob466.github.io/hawtube/static/inner-winner.jpg">`;

    const height = window.innerHeight - 400;
    const width = window.innerWidth - 800;
    ieWindow.style.top = Math.ceil(Math.random() * height);
    ieWindow.style.left = Math.ceil(Math.random() * width);

    document.appendChild(ieWindow);
    setTimeout(() => {
        document.removeChild(ieWindow);
        ieWindow = null;
    }, 7000);
}

mst3k();
popups();
// [jackass, beRightBack][Math.floor(Math.random() * 2)]();
