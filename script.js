const btnEl = document.getElementById("btn");
const animeContainerEl = document.querySelector(".img-container");
const animeImgEl = document.querySelector(".anime-img");
const animeNameEl = document.querySelector(".amine-name");

btnEl.addEventListener("click", async () => {
    try {
        btnEl.disabled = true;
        btnEl.innerHTML = "Loading...";
        animeNameEl.innerHTML = "Updating...";
        let response = await fetch("YOUR_ANIME_API");
        let data = await response.json();
        btnEl.disabled = false;
        btnEl.innerHTML = "Get Anime";

        animeContainerEl.style.display = "block";
        animeImgEl.src = data[0].images.jpg.image_url;
        animeNameEl.innerText = data[0].title.english;
       
        console.log(data);
        
    } catch (error) {
        console.error(error);
        btnEl.disabled = false;
        btnEl.innerHTML = "Get Anime";
        animeNameEl.innerHTML = "An error happened. Please try again later.";
    }
});