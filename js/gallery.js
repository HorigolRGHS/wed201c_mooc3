function upDate(element) {
    var image = document.getElementById('image');
    image.style.backgroundImage = "URL(" + element.src + ")";
    image.innerHTML = element.alt;
    image.style.lineHeight = 5;
    image.style.textAlign = 'left';
    image.style.fontSize = '30px';
    image.style.color = 'white';
}

function unDo() {
    var image = document.getElementById('image');
    image.style.backgroundImage = "none";
    image.innerText = "Hover over an image below to display here.";
    image.style.lineHeight = "300px";
    image.style.display = "block";
    image.style.width = "300px";
    image.style.height = "300px";
    image.style.textAlign = "center";
    image.style.backgroundColor = "blue";
    image.style.margin = "20px auto";
    image.style.fontWeight = "bolder";
    image.style.border = "10px dotted black";
    image.style.fontSize = "16px";
    image.style.color = 'black';
}

function setImages(className) {
    var options = ["banana.gif", "corn.gif", "noodle.gif", "ramen.gif", "sausage.gif", "snack.gif"];
    var currentImages = document.querySelectorAll("." + className);
    for (var i = 0; i < currentImages.length; i++) {
        console.log("Image " + i + " is set");
        var randomIndex = Math.floor(Math.random() * options.length);
        var randomImg = "imgs/" + options[randomIndex];
        currentImages[i].setAttribute("tabindex", 0);
        currentImages[i].src = randomImg;
        currentImages[i].alt = options[randomIndex].substring(0, options[randomIndex].indexOf("."));
    }
}
