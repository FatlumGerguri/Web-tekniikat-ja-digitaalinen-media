'use strict';
const picArray = [
  {
    title: 'Mikä on CSS?',
    caption: 'CSS -esimerkki\n \n',
    description: 'CSS tarkoittaa Cascading Style Sheets<br>' +
        '         CSS kuvaa HTML -elementtien näyttämistä näytöllä, paperilla tai muulla medialla ' +
        '         CSS säästää paljon työtä. Se voi hallita useiden verkkosivujen asettelua kerralla<br>' +
        '         Ulkoiset tyylitaulukot tallennetaan CSS –tiedostoihin<br>' +
       '         ' +
        '         Miksi käyttää CSS?\n<br>' +
        '         Käytetään Web -sivujen tyylien määrittämiseen, mukaan lukien suunnittelu, asettelu ja näyttövaihtoehdot eri laitteille ja näytön koolle.<br>' +
        '         <br>' +
        '         CSS -esimerkki\n<br>' +
        '         <br>' +
        '         body {<br>' +
        '         background-color: lightblue;<br>' +
        '         }<br>' +
        '         h1 {<br>' +
        '         color: #fff;<br>' +
        '         text-align: center<br>' +
        '         }<br>' +
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
    filename: 'images/pic2.png',
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
