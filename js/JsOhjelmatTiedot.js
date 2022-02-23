'use strict';
const picArray = [
  {
    title: 'JavaScript',
    caption: 'JavaScript -esimerkki\n \n',
    description: 'JavaScript on maailman suosituin ohjelmointikieli. \n<br>' +
        '         JavaScript on webin ohjelmointikieli<br>' +
        '         JavaScript on helppo oppia. \n<br>' +
        '         <br>' +
        '         Miksi opiskella JavaScriptiä?\n<br>' +
        '         JavaScript on yksi kolmesta kielestä, jotka kaikkien verkkokehittäjien on opittava: \n<br>' +
        '         <br>' +
        '         CSS -esimerkki\n<br>' +
        '         <br>' +
        '         1. HTML Web -sivujen sisällön määrittämiseen \n<br>' +
        '         2. CSS määrittää verkkosivujen asettelun\n<br>' +
        '         3. JavaScript ohjelmoimaan verkkosivujen käyttäytymistä <br>' +
        '         <br>' +
        '         < script> -tunniste\n <br>' +
        '         HTML -koodissa JavaScript -koodi lisätään < script> - ja < /script> -tunnisteiden väliin. \n<br>' +
        '         <br>' +
        '         < script><br>' +
        '         document.getElementById("demo").innerHTML = "My First JavaScript";\n <br>' +
        '         </script> \n <br>' ,
    filename: 'images/pic3.png',
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
                  <img src=${picArray[i].filename} alt="">
                   <figcaption>${picArray[i].caption}</figcaption>
                </div>
            </div>
        </div>
    </section>
`;
}
