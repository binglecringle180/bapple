document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('video');
    const overlayText = document.getElementById('overlaytext');

    function startVideo() {
        video.play();
        overlayText.style.opacity = "0";
        setTimeout(() => {overlayText.remove();}, 200);
    }

    overlayText.addEventListener('click', startVideo);
});
