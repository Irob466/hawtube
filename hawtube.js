const BASE_URL = 'https://irob466.github.io/hawtube'

const silhouette = document.createElement("img");

silhouette.src = `${BASE_URL}/mst3k.png`
silhouette.style.position = "absolute";
silhouette.style.bottom = 0;
silhouette.style.right = "15px";
silhouette.style.zIndex = 1;

document.querySelector("#videowrap").appendChild(silhouette);

const audio = new Audio(`${BASE_URL}/jackass.mp3`);
audio.addEventListener('canplaythrough', e => audio.play());