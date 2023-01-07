window.onload = () => {
    const se     = document.querySelector('#btn_audio');
    document.querySelector("#demo_btn").addEventListener("click", () => {
        se.play();
    });
};