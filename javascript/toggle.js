var elementToToggle = document.getElementById("hide");
var toggleButton = document.getElementById("toggle");
var closeButton = document.getElementById("close");
var isHidden = true;

toggleButton.addEventListener("click", function() {
    
    if (isHidden) {
        elementToToggle.style.display = "block"; 
    } else {
        elementToToggle.style.display = "none"; 
    }

    isHidden = !isHidden; 
});


closeButton.addEventListener("click", function() {
    elementToToggle.style.display = "none"; 
    isHidden = true; 
});

