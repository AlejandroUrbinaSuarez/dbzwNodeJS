function personajes() {
  const urlAPI =
    "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=a649010248a68a63ae754f447ecd4fa6&hash=81f89850f2c1efb4abf3ac1c385c2075";
  const container = document.querySelector("#marvel-row");
  let contentHTML = "";

  fetch(urlAPI)
    .then((res) => res.json())
    .then((json) => {
      for (const hero of json.data.results) {
        let urlHero = hero.urls[0].url;
        contentHTML += `
                <div class="col-md-4">
                    <a href="${urlHero}" target="_blank">
                        <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                    </a>
                    <h3 class="title">${hero.name}</h3>
                </div>`;
      }
      container.innerHTML = contentHTML;
    });
}

function comics() {
  const urlAPI =
    "https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=a649010248a68a63ae754f447ecd4fa6&hash=81f89850f2c1efb4abf3ac1c385c2075";
  const container = document.querySelector("#marvel-row");
  let contentHTML = "";

  fetch(urlAPI)
    .then((res) => res.json())
    .then((json) => {
      for (const comic of json.data.results) {
        let urlComic = comic.urls[0].url;
        contentHTML += `
                <div class="col-md-4">
                    <a href="${urlComic}" target="_blank">
                        <img src="${comic.thumbnail.path}.${comic.thumbnail.extension}" alt="${comic.name}" class="img-thumbnail">
                    </a>
                    <h3 class="title">${comic.title}</h3>
                </div>`;
      }
      container.innerHTML = contentHTML;
    });
}

function series() {
  const urlAPI =
    "https://gateway.marvel.com:443/v1/public/series?ts=1&apikey=a649010248a68a63ae754f447ecd4fa6&hash=81f89850f2c1efb4abf3ac1c385c2075";
  const container = document.querySelector("#marvel-row");
  let contentHTML = "";

  fetch(urlAPI)
    .then((res) => res.json())
    .then((json) => {
      for (const serie of json.data.results) {
        let urlSerie = serie.urls[0].url;
        contentHTML += `
                <div class="col-md-4">
                    <a href="${urlSerie}" target="_blank">
                        <img src="${serie.thumbnail.path}.${serie.thumbnail.extension}" alt="${serie.title}" class="img-thumbnail">
                    </a>
                    <h3 class="title">${serie.title}</h3>
                </div>`;
      }
      container.innerHTML = contentHTML;
    });
}

//personajes();
