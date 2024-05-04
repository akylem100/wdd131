const themeSelector = document.querySelector('#themeselector')
const byuiLogo = document.getElementById('img')

function changeTheme() {
    if (themeSelector.value === 'dark') {
        document.body.classList.add('dark');
        byuiLogo.src = 'byui-logo_white.png';
    } else {
        document.body.classList.remove('dark');
        byuiLogo.src = 'byui-logo_blue.webp';
    }    
}

themeSelector.addEventListener('click', changeTheme); {
    if (changeTheme.target.value === 'light') {
        document.body.classList.remove('dark');
        img.src = 'byui-logo_blue.webp';
    } else {
        document.body.classList.add('dark');
        img.src = 'byui-logo_white.png';
    }
}