const openModal = document.getElementById("openModal");
const Modal = document.getElementById("modal");
const returnModal = document.getElementById("return");

var isHidden = true;

openModal.addEventListener("click", function() {
    if (isHidden) {
        Modal.style.display = "block";
    } else {
        Modal.style.display = "none"; 
    }

    isHidden = !isHidden;
});


returnModal.addEventListener("click", function() {
    Modal.style.display = "none"; 
    isHidden = true; 
});



