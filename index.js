let toggleBar = document.querySelector("#nav-toggle-bar");
let navContainer = document.querySelector("#nav-container");

toggleBar.addEventListener('click', () => {
    if(navContainer.classList.contains('hidden')){
        navContainer.classList.remove('hidden');
    }else{
        navContainer.classList.add('hidden');
    }
})