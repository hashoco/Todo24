const images =[
    "0.jpeg",
    "1.jpeg",
    "3.jpeg",
    "4.jpeg",
]

const chosenImages = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImages}`;

document.body.appendChild(bgImage);
bgImage.id = 'bgImage';