const BASE_URL = 'https://irob466.github.io/hawtube/static'
const openers = [jackass, beRightBack, popups];

// mst3k silhouette
function mst3k() {
  const silhouette = document.createElement("img");
  silhouette.src = `${BASE_URL}/mst3k.png`
  silhouette.style.position = "absolute";
  silhouette.style.bottom = 0;
  silhouette.style.right = "15px";
  silhouette.style.zIndex = 1;
  document.querySelector("#videowrap").appendChild(silhouette);

  const button = document.createElement("button")
  button.classList.add("btn", "btn-sm", "btn-default");
  button.innerText = "Hide MST3K Boys";
  button.addEventListener('click', () => {
    silhouette.classList.toggle("hidden");
    const action = silhouette.classList.contains("hidden") ? "Show" : "Hide"
    button.innerText = `${action} MST3K Boys`
  });

  document.querySelector("#leftcontrols").appendChild(button);
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
            <div class="ms-window-icon minimise"></div>
            <div class="ms-window-icon maximise"></div>
            <div class="ms-window-icon close"></div>
        </header>
        <img src="https://irob466.github.io/hawtube/static/inner-winner.jpg">`;

  const height = window.innerHeight - 600;
  const width = window.innerWidth - 800;
  ieWindow.style.top = `${Math.ceil(Math.random() * height) + 150}px`;
  ieWindow.style.left = `${Math.ceil(Math.random() * width)}px`;

  document.body.appendChild(ieWindow);
  setTimeout(() => {
    document.body.removeChild(ieWindow);
    ieWindow = null;
  }, 7000);
}

function waHoTransform(elements) {
  elements
    .filter(node => !!node.querySelector('.waho-container'))
    .map(node => node.querySelector('.waho-container'))
    .forEach(node => {
      const text = node.innerText.split('');
      const parent = node.parentNode;
      parent.removeChild(node);
      text.forEach(letter => {
        const container = document.createElement('span');
        container.innerHTML = `<p style="margin: auto; color: #231F20;">${letter}</p>`;
        container.classList.add(/\s/.test(letter) ? 'waho-space' : 'waho-letter');
        parent.appendChild(container);
      });
    });
}

function waHo() {
  const chatBox = document.querySelector('#messagebuffer');
  waHoTransform(Array.from(chatBox.childNodes));

  const config = { childList: true };

  const callback = (mutations, observer) => {
    mutations.forEach(mutation => {
      switch (mutation.type) {
        case ('childList'):
          waHoTransform(Array.from(mutation.addedNodes));
          break;
        default:
          break;
      }
    })
  };

  const observer = new MutationObserver(callback);
  observer.observe(chatBox, config);
}

mst3k();
waHo();
openers[Math.floor(Math.random() * openers.length)]();
