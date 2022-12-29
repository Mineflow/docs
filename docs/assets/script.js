document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const languageButtons = document.getElementsByClassName("change-language");
        for (let i = 0; i < languageButtons.length; i++) {
            const button = languageButtons[i];
            button.addEventListener("click", (event) => {
                location.assign(`../${event.target.dataset.language}/${location.hash}`);
            });
        }
    }, 1000); // HACK: wait 1 sec
});
