const BASE_URL = 'https://irob466.github.io/hawtube'

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
    const brb = new Image();
    brb.src = `${BASE_URL}/wellbrb.png`;
    brb.classList.add('brb');
    const brbSound = new Audio(`${BASE_URL}/wellbrb.mp3`);

    const frostedPane = document.createElement('div');
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

mst3k();
[jackass, beRightBack][Math.floor(Math.random() * 2)]();
