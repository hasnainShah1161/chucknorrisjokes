document.querySelector("#joke-form").addEventListener("submit", getJokes);

function getJokes(e) {
  const xhr = new XMLHttpRequest();

  const numberOfJokes = document.getElementById("number").value;
  //this function is used for the spinner
  xhr.onprogress = function() {
    document.getElementById("loadingGif").style.display = "block";
  };

  xhr.open("GET", `http://api.icndb.com/jokes/random/${numberOfJokes}`, true);

  xhr.onload = function() {
    if (this.status === 200) {
      document.getElementById("loadingGif").style.display = "none";
      const ol = document.createElement("ol");
      ol.type = "1";
      //const ol = document.getElementById('orderedList');
      const container = document.getElementById("container");
      const jokes = JSON.parse(this.responseText);

      jokes.value.forEach(function(joke) {
        if (jokes.type === "success") {
          container.appendChild(ol);

          ol.innerHTML += `<li>${joke.joke}</li>`;
        } else {
          ol.innerHTML += `<li>some thing wrong</li>`;
        }
      });
    }
  };

  xhr.send();

  e.preventDefault();
}
