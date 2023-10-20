const Send = document.getElementById("send");
const optOut = document.getElementById("opt-out");
const modelSent = document.getElementById("model-sent");


Send.addEventListener("click", function() {
    if (isHidden) {
        modelSent.style.display = "block";
    } else {
        modelSent.style.display = "none"; 
    }

    isHidden = !isHidden;
});

optOut.addEventListener("click", function() {
    modelSent.style.display = "none"; 
    isHidden = true; 
});


// modelSent.style.display = "block"; 
// 
// isHidden = true; 