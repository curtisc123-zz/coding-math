const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const width = canvas.width = 1366;
const height = canvas.height = 768;

context.fillRect(0, 0, width, height);

const scaleMode = "showAll";

const img = document.createElement('img');
img.addEventListener('load', onImageLoad);
img.src = 'https://wallpaperstock.net/nature-wallpapers_25696_1280x720.jpg';

function onImageLoad() {
  let imageWidth;
  let imageHeight;

  // get the image aspect ratio
  let imageAspectRatio = img.width / img.height;

  // get the container aspect ratio
  let containerAspectRatio = width / height;

  // based on how we want to scale, we want to determine if the image or container has 
  // a greater aspect ratio
  widthFirst = getWidthFirst(scaleMode, imageAspectRatio, containerAspectRatio);

  if (widthFirst) {
    imageWidth = width;
    imageHeight = imageWidth / imageAspectRatio;
  } else {
    imageHeight = height;
    imageWidth = imageHeight * imageAspectRatio;
  }

  // center the image in the canvas
  let centerPositionY = (height - imageHeight) / 2;
  let centerPositionX = (width - imageWidth) / 2;

  context.drawImage(img, 0, 0, 1280, 720, centerPositionX, centerPositionY, imageWidth, imageHeight);
}

function getWidthFirst(scaleMode, imageAspectRatio, containerAspectRatio
) {
  if (scaleMode === 'showAll') {
    return imageAspectRatio > containerAspectRatio;
  } else {
    return imageAspectRatio < containerAspectRatio;
  }
}