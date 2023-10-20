const toggleDiv = document.getElementById('toggleDiv');
const fairDiv = document.getElementById('fairDiv');
// const blockInfo = document.getElementById('blockInfo'); // Ensure this element is correctly referenced
const unBlockInfo = document.getElementById('no-block-info'); // Ensure this element is correctly referenced

let isFairDivTranslated = false; // Keep track of the fairDiv translation state

fairDiv.addEventListener('click', () => {
    if (!isFairDivTranslated) {
        fairDiv.style.transform = 'translateX(25px)';
        toggleDiv.style.backgroundColor = 'red';
        if (blockInfo) {
            blockInfo.style.display = "none";
        }
        if (unBlockInfo) {
            unBlockInfo.style.display = "flex";
        }
    } else {
        fairDiv.style.transform = 'translateX(0)';
        toggleDiv.style.backgroundColor = 'black';
        if (blockInfo) {
            blockInfo.style.display = "flex";
        }
        if (unBlockInfo) {
            unBlockInfo.style.display = "none";
        }
    }
    isFairDivTranslated = !isFairDivTranslated; // Toggle the fairDiv translation state
});
