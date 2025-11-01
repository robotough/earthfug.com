const imageList = [
    "indexcard.png",
    "mask.png",
	"monster.png",
	"brian.png",
];

const imageFolder = "images/index_images/";

function displayRandomImage() {
    const randomIndex = Math.floor(Math.random() * imageList.length);

    const randomFileName = imageList[randomIndex];

    const fullImagePath = imageFolder + randomFileName;

    const imgElement = document.getElementById("randomImage");

    imgElement.src = fullImagePath;
    imgElement.alt = `Random image: ${randomFileName}`;
	
    console.log(`Displayed: ${fullImagePath}`);
}

document.addEventListener('DOMContentLoaded', displayRandomImage);