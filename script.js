let darkMode = true

const button = document.querySelector("#theme")
function themeClick() {
    if (darkMode) {
        darkMode = false

        document.documentElement.setAttribute('data-bs-theme', 'light')
        document.getElementById("logo").src = logo.src.replace("_light", "_dark")
        document.body.style.backgroundColor = "#d9e3e9"
        button.textContent = "Dark Mode"
        
        const textcols = document.querySelectorAll('.text-bg-dark')
        textcols.forEach(element => {
            element.classList.remove('text-bg-dark');
            element.classList.add('text-bg-light');
        })

        const borders = document.querySelectorAll('.border-secondary')
        borders.forEach(element => {
            element.classList.remove('border-secondary');
            element.classList.add('border-dark');
        })
    } else {
        darkMode = true

        document.documentElement.setAttribute('data-bs-theme', 'dark')
        document.getElementById("logo").src = logo.src.replace("_dark", "_light")
        document.body.style.backgroundColor = "#1C1F21"
        button.textContent = "Light Mode"
        
        const textcols = document.querySelectorAll('.text-bg-light')
        textcols.forEach(element => {
            element.classList.remove('text-bg-light');
            element.classList.add('text-bg-dark');
        })

        const borders = document.querySelectorAll('.border-dark')
        borders.forEach(element => {
            element.classList.remove('border-dark');
            element.classList.add('border-secondary');
        })
    }
}
button.addEventListener('click', themeClick)