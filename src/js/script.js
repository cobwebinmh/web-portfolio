const sections = document.querySelectorAll('section');

function checkVisibility() {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            section.classList.add('in-view');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

const moreBtn = document.getElementById("moreBtn");
const hiddenText = document.getElementById("hiddenText");

moreBtn.addEventListener("click", () => {
    hiddenText.classList.toggle("hidden");
    
    if (hiddenText.classList.contains("hidden")) {
        moreBtn.textContent = "More about me";
    } else {
        moreBtn.textContent = "Hide";
    }
});

document.getElementById('message').addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
});

// Обработчик для формы
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const messageText = document.querySelector("#message").value.trim();

    if (name === "" || messageText === "") {
        showToast("Please fill in all fields", "error");  // Передаем класс "error" для ошибки
        return;
    }

    showToast("Message sent successfully!", "success");  // Класс "success" для успешного сообщения
    form.reset();
});

function showToast(text, type) {
    const message = document.createElement("div");
    message.textContent = text;
    message.classList.add("toast-message", type);  // Добавляем тип сообщения (error или success)
    document.body.appendChild(message);

    setTimeout(() => {
        message.classList.add("hide");
        setTimeout(() => message.remove(), 1000);
    }, 4000);
}

