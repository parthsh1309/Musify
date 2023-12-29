document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById("searchBar");
    const logoImg = document.getElementById("logoImg");
    const profileBtn = document.getElementById("profileBtn");
    const profileMenu = document.getElementById("profileMenu");
    const closeBtn = document.getElementById("closeBtn");

    setTimeout(() => {
        logoImg.classList.remove('animation_BounceIn');
        logoImg.classList.add('animation_BounceOut');
        setTimeout(() => {
            logoImg.classList.add('hidden');
            searchBar.classList.remove('hidden');
        },900)
    },1000);

    searchBar.addEventListener('input', () => {
        if (searchBar.value.trim() !== "") {
            profileBtn.classList.add("hidden");
            closeBtn.style.display = "block";
        } else {
            profileBtn.classList.remove("hidden");
            closeBtn.style.display = "none"; 
        }
    });

    closeBtn.addEventListener('click', () => {
        searchBar.value = "";
        profileBtn.classList.remove("hidden");
        closeBtn.style.display = "none";
    });

    profileBtn.addEventListener('click', () => {
        profileMenu.classList.toggle("hidden");
    })

    if(!profileMenu.classList.contains("hidden")) {
        document.addEventListener('click', (event) => {
            if (!profileMenu.contains(event.target)) {
                profileMenu.classList.add("hidden");
            }    
        })
    }
})