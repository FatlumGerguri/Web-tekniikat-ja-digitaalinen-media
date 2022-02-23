'use strict';
const picArray = [
  {
    title: 'Mikä HTML on:',
    caption: 'HTML- yksinkertainen kuvaesimerkki',
    description: 'HTML tarkoittaa lyhennettä Hyper Text Markup Language <br>' +
        '         HTML on verkkosivujen luomisen vakiomerkki<br>' +
        '         HTML kuvaa verkkosivun rakennetta<br>' +
        '         HTML koostuu sarjasta elementtejä<br>' +
        '         HTML -elementit kertovat selaimelle, miten sisältö näytetään<br>' +
        '         HTML -elementit merkitsevät sisällön osia, kuten "tämä on otsikko", "tämä on kappale", "tämä on linkki" jne.<br><br><br>' +
        '         ' +
        '         Yksinkertainen HTML -asiakirja<br>' +
        '         < !DOCTYPE html> -vakuutus määrittää, että tämä asiakirja on HTML5 -asiakirja<br>' +
        '         < html> -elementti on HTML -sivun juurielementti<br>' +
        '         < head>-elementti sisältää HTML -sivun metatietoja<br>' +
        '         < title>Page Title< /title> -elementti määrittää HTML -sivun otsikon (joka näkyy selaimen otsikkorivillä tai sivun välilehdessä)<br>' +
        '         < /head><br>' +
        '         < body> -elementti määrittää asiakirjan rungon ja on säiliö kaikelle näkyvälle sisällölle, kuten otsikoille, kappaleille, kuville, hyperlinkkeille, taulukoille, luetteloille jne.<br>' +
        '         < h1>My First Heading< /h1> -elementti määrittää suuren otsikon<br>' +
        '         < p>My first paragraph.< /p> -elementti määrittää kappaleen<br>' +
        '         < /body> <br>' +
        '         < /html> <br>' +
        '         HTML -linkit määritellään <a> -tagilla:<br>' +
        '         < a href=" https://www.google.com">This is a link</a> <br>' +
        '         Linkin kohde määritellään href -määritettäessä.<br>' +
        '         <br>' +
        '         HTML -kuvat määritetään <img> -tunnisteella.<br>' +
        '         Lähdetiedosto (src), vaihtoehtoinen teksti (alt), leveys ja korkeus annetaan määritteinä: <br>' +
        '         < img src=”img.jpg" alt=”IMG" width="104" height="142"><br>',
    filename: 'images/pic1.png',
  },
];

// Put code of task E here

// etsitään main-tagi html-sivulta
const mainElementti = document.querySelector('main');

// Eihän ope osaa kuin vähä eka kuvan tietoja laitella.
let ekaKuva = picArray[0];
let kuvaCaption = picArray[0];
let kuvaDescription = picArray[0];
let kuvaTitle = picArray[0];


// luodaan tarvittavat elementit main-elementin sisään.
// Huom: täällä puhutaan main-elementistä, html sivulla html-tagista.
let articleElem = document.createElement('article');      // <article>
let headerElem = document.createElement('header');        // <header>
let h2Elem = document.createElement('h2');

// tehdään header-elementti valmiiksi
h2Elem.innerText = kuvaTitle.title;                   // h2 sisältö
headerElem.appendChild(h2Elem);                     // <h2> laitetaan <header> sisään

let figureElem = document.createElement('figure');            // <figure>
let imgElem = document.createElement('img');                  // <img>
let imgCaption = document.createElement('figcaption');
let pTag = document.createElement('p');

// annetaan img-arvoja
imgElem.src = ekaKuva.filename;
pTag.innerHTML = ekaKuva.description;


// myös kuvan caption pitäisi olla.
// tehdään figure-elementti valmiiksi
figureElem.appendChild(imgElem);
figureElem.appendChild(imgCaption);

// lisätään article-elementille sen lapset
articleElem.appendChild(headerElem);
articleElem.appendChild(figureElem);
articleElem.appendChild(imgCaption);

// lisätään article-elementti mainin lapseksi
mainElementti.appendChild(articleElem);               // <article> laitetaam <main> sisään


for (let i = 0; i < picArray.length; i++) {
  // tänne eo. mainElementti.innerHTML += ` . . . ` koodi
  mainElementti.innerHTML = `
    <section class="language" >
        <div class="max-width">
            <h2 class="title">${picArray[i].title}</h2>
            <div class="lang-content">
                <div class="lcmd">
                    <p class="ltext">${picArray[i].description}</p>                     
                </div>
                <div class="lcmd">
                    <img src=${picArray[i].filename} alt="" data-lightbox="roadtrip">
                   <figcaption>${picArray[i].caption}</figcaption>
                </div>
            </div>
        </div>
    </section>
`;
}
