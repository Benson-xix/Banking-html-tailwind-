var viewElement = document.getElementById("view");
var showButton = document.getElementById("show");
var hideButton = document.getElementById("disappear");
var anotherViewElement = document.getElementById("hide-too");
var showBlock = document.getElementById("manage");
var hideBlock = document.getElementById("block");
var manageBlock = document.getElementById("manage-block");
var hideText = document.getElementById("text");
var takeBack = document.getElementById("back");
var blockInfo = document.getElementById("block-info");
var manageCard = document.getElementById("manage-card");
var isHidden = true;
var isNotHidden = true;

showButton.addEventListener("click", function() {
    if (isHidden) {
        viewElement.style.display = "flex";
        showButton.style.display = "none";
        hideButton.style.display = "flex";
        anotherViewElement.style.display = "flex";
    } else {
        viewElement.style.display = "none";
        showButton.style.display = "flex";
        hideButton.style.display = "none";
        anotherViewElement.style.display = "none";
    }

    isHidden = !isHidden;
});

hideButton.addEventListener("click", function() {
    if (!isHidden) {
        viewElement.style.display = "none";
        showButton.style.display = "flex";
        hideButton.style.display = "none";
        anotherViewElement.style.display = "none";
    } 
    isHidden = !isHidden;
});

hideBlock.addEventListener("click", function() {
    if (isNotHidden) {
        showBlock.style.display = "none";
        showButton.style.display = "none";
        hideBlock.style.display = "none";
        manageBlock.style.display = "flex";
        hideText.style.display = "none";
        takeBack.style.display = "flex";
        blockInfo.style.display = "flex";
    }
});

takeBack.addEventListener("click", function() {
    if (isHidden) {
        showBlock.style.display = "flex";
        showButton.style.display = "flex";
        hideBlock.style.display = "flex";
        manageBlock.style.display = "none";
        hideText.style.display = "block";
        takeBack.style.display = "none";
        blockInfo.style.display = "none";
        manageCard.style.display = "none";
    }
});

showBlock.addEventListener("click", function() {
    if (isHidden) {
        showBlock.style.display = "none";
        hideBlock.style.display = "none";
        manageCard.style.display = "flex";
        hideText.style.display = "none";
        takeBack.style.display = "flex";
        showButton.style.display = "none";
    }
});
