const gallery = document.getElementById('gallery');
const slide = document.getElementById('slide');
const imageList = [];
const maxPhotos = 999;
const extensions = ['jpg', 'jpeg', 'png', 'webp'];
let currentIndex = 0;

function checkImage(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = url;
    img.onload = () => resolve(url);
    img.onerror = () => resolve(null);
  });
}

function padNumber(num, length) {
  return num.toString().padStart(length, '0');
}

async function loadImages() {
  for (let i = 1; i <= maxPhotos; i++) {
    const baseName = `HotShots${padNumber(i, 3)}`;
    for (const ext of extensions) {
      const url = `images/${baseName}.${ext}`;
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
  slide.addEventListener('click', () => openFullscreen(slide));
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
  img.addEventListener('click', () => {
    openFullscreen(img);
    currentIndex = imageList.indexOf(src);
  });

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

// Navigate images while in fullscreen
document.addEventListener('keydown', (e) => {
  if (document.fullscreenElement && imageList.length > 0) {
    if (e.key === 'ArrowRight') {
      currentIndex = (currentIndex + 1) % imageList.length;
      updateFullscreenImage();
    } else if (e.key === 'ArrowLeft') {
      currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
      updateFullscreenImage();
    }
  }
});

function updateFullscreenImage() {
  if (document.fullscreenElement && document.fullscreenElement.tagName === 'IMG') {
    document.fullscreenElement.src = imageList[currentIndex];
  }
}

// Toggle dark mode
document.getElementById('dark-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

loadImages();
