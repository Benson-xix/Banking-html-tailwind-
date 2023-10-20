const Pay = document.getElementById("pay");
const payModal = document.getElementById("pay-modal");
const End = document.getElementById("end");


Pay.addEventListener("click", function() {
    if (isHidden) {
        payModal.style.display = "block";
    } else {
        payModal.style.display = "none"; 
    }

    isHidden = !isHidden;
});

End.addEventListener("click", function() {
    payModal.style.display = "none"; 
    isHidden = true; 
});

