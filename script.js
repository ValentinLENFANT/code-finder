document.addEventListener("DOMContentLoaded", () => {
    const correctCode = "1234"; // Code correct à vérifier
    let inputCode = "";
    let attempts = 0;
    const maxAttempts = 3;
    const display = document.getElementById("display");
    const message = document.getElementById("message");
    const keys = document.querySelectorAll(".key");

    keys.forEach(key => {
        key.addEventListener("click", () => {
            const keyValue = key.getAttribute("data-key");
            if (keyValue) {
                if (inputCode.length < 4) {
                    inputCode += keyValue;
                    updateDisplay();
                }
                if (inputCode.length === 4) {
                    checkCode();
                }
            } else if (key.id === "clear") {
                inputCode = "";
                updateDisplay();
                message.textContent = "";
            }
        });
    });

    function updateDisplay() {
        display.textContent = inputCode.padEnd(4, "_");
    }

    function checkCode() {
        if (inputCode === correctCode) {
            message.textContent = "Félicitations ! Code correct.";
            message.style.color = "#5cb85c";
        } else {
            attempts++;
            if (attempts >= maxAttempts) {
                message.textContent = "Vous avez perdu. Nombre maximal de tentatives atteint.";
                disableKeypad();
            } else {
                message.textContent = `Code invalide. Tentative ${attempts} sur ${maxAttempts}.`;
                message.style.color = "#d9534f";
            }
        }
        inputCode = "";
        updateDisplay();
    }

    function disableKeypad() {
        keys.forEach(key => {
            key.disabled = true;
            key.style.backgroundColor = "#f0f0f0";
            key.style.cursor = "not-allowed";
        });
    }
});
