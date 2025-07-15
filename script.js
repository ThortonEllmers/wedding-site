const gallery = document.getElementById('gallery');
const slide = document.getElementById('slide');
const imageList = [];
const maxPhotos = 10000;
const extensions = ['jpg'];
let currentIndex = 0;

function checkImage(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = url;
    img.onload = () => resolve(url);
    img.onerror = () => resolve(null);
  });
}

async function loadImages() {
  for (let i = 1; i <= maxPhotos; i++) {
    for (const ext of extensions) {
      const url = `images/HotShots${i}.${ext}`;
      const result = await checkImage(url);
      if (result) {
        imageList.push(result);
        addImageToGallery(result);
        break;
      }
    }
  }

  if (imageList.length > 0) {
    startSlideshow();
  }
}

function startSlideshow() {
  slide.src = imageList[0];
  setInterval(() => {
    currentIndex = (currentIndex + 1) % imageList.length;
    slide.src = imageList[currentIndex];
  }, 3000);
}

function addImageToGallery(src) {
  const wrapper = document.createElement('div');
  wrapper.className = 'image-wrapper';

  const img = document.createElement('img');
  img.src = src;
  img.addEventListener('click', () => openFullscreen(img));

  const btn = document.createElement('a');
  btn.textContent = 'Save';
  btn.href = src;
  btn.download = '';
  btn.className = 'save-button';

  wrapper.appendChild(img);
  wrapper.appendChild(btn);
  gallery.appendChild(wrapper);
}

function openFullscreen(img) {
  if (img.requestFullscreen) {
    img.requestFullscreen();
  } else if (img.webkitRequestFullscreen) {
    img.webkitRequestFullscreen();
  } else if (img.msRequestFullscreen) {
    img.msRequestFullscreen();
  }
}

loadImages();
