// Toggle Dark Mode
const modeToggle = document.querySelector('.mode-toggle');
const body = document.body;

// Check if dark mode is already set (to persist on page reloads)
if (localStorage.getItem('theme') === 'dark') {
    setDarkMode();
    body.classList.add('dark-mode');
    modeToggle.textContent = 'Light Mode';
}

modeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        setLightMode();
        body.classList.remove('dark-mode');
        modeToggle.textContent = 'Dark Mode';
        localStorage.setItem('theme', 'light');
    } else {
        setDarkMode();
        body.classList.add('dark-mode');
        modeToggle.textContent = 'Light Mode';
        localStorage.setItem('theme', 'dark');
    }
});

function setDarkMode() {
    document.documentElement.style.setProperty('--bg-color', '#333');
    document.documentElement.style.setProperty('--text-color', '#f4f4f4');
    document.documentElement.style.setProperty('--link-color', '#80b3ff');
    document.documentElement.style.setProperty('--border-color', '#fff');
    document.documentElement.style.setProperty('--card-bg', '#444');
}

function setLightMode() {
    document.documentElement.style.setProperty('--bg-color', '#f4f4f4');
    document.documentElement.style.setProperty('--text-color', '#333');
    document.documentElement.style.setProperty('--link-color', '#007bff');
    document.documentElement.style.setProperty('--border-color', '#000');
    document.documentElement.style.setProperty('--card-bg', '#fff');
}

