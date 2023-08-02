const btn = document.getElementById("joke");
const tweet = document.getElementById("link");
btn.addEventListener("click", getJoke);

function getJoke(){
    fetch("https://icanhazdadjoke.com/", {
        headers:{
            Accept: "application/json",
        },
    })
    .then(function(response){
        return response.json();
    })
    .then(function (data) {
        const joke = data.joke;
        document.getElementById("content").innerText = joke;
        const twt = `https://twitter.com/share?text=${joke}`;
        tweet.setAttribute("href", twt);
    })
    .catch(function(error){
        document.getElementById("content").innerText = "Oops! Some error occurs";
        tweet.removeAttribute("ref");
    })
}

getJoke();