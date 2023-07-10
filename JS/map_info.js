let data = {
    nAmer: {
        "country": "North America",
        "text": "It was here that the art of graffiti appeared. In a war between warring gangs. Here the art of graffiti has gone through almost all stages of development, from oppression to exaltation.\n" + "\n" + "The most popular personalities in North America are: Stash (Young Josh Franklin) Stash was fascinated by such bright graffiti since childhood - but he did not immediately leave the world of art, like many others. He painted on trains until 1987, only then began to paint on canvas and exhibit in galleries.\n" +
            "Jean-Michel Basquiat: One of the most expensive and famous artists of the post-war era, Jean-Michel Basquiat started by painting graffiti on the walls of Manhattan instead of his friend Al Diaz. Still unknown to anyone, 18-year-olds painted the streets with phrases, each of which contained the word SAMO - that was the name of their creative union.\n" +
            "Shepard Fairey, etc."
    },
    sAmer: {
        "country": "South America",
        "text": "South America, the country in which graffiti is most clearly expressed. There, people decorate themselves with tattoos completely from the face to the genitals. They still use graffiti to mark territory and graffiti. But despite the constant hostility of the gangs, there are wonderful people there who continue to decorate the city with beautiful pictures, make it brighter and more interesting. I imagine South America to be bright and interesting."
    },
    Australia: {
        "country": "Australia",
        "text": "Australia is considered not the most developed graffiti frontier. This art is there, but due to the location and not so highly developed infrastructure, there are not many graffiti and those who could draw it."
    },
    Eurasia: {
        "country": "Eurasia",
        "text": "Graffiti came to Europe inevitably. In Europe, and so has always been a large number of artists. And with the development of graffiti, many began to leave for the gallery. Many graffiti in Europe in the 20th century, as well as at the present time, are political in nature. And in Europe there are artists who were able to excel: one of them was Banksy, he does not stand out with complex pictures and a riot of colors, he has extremely simple images made by stencil, but each of them makes you think about the meaning of life and about the world as a whole. In Eurasia, as well as in America, there are a large number of good artists, but we will not get hung up on them."
    },
    Africa: {
        "country": "Africa",
        "text": "In Africa, graffiti has a special meaning, for pure graffiti in African countries is tied to animals and their destruction by man. Very often there are graffiti of elephants and rhinos that are killed because of the horns. And of course, the graffiti there also bring problems to society, little water and constant wars for power, just such graffiti in Africa."
    }
};

document.getElementById('nAm').onclick = function() {
    document.getElementById('country').innerHTML = data.nAmer.country;
    document.getElementById('text').innerHTML = data.nAmer.text;
}

document.getElementById('sAm').onclick = function() {
    document.getElementById('country').innerHTML = data.sAmer.country;
    document.getElementById('text').innerHTML = data.sAmer.text;
}

document.getElementById('Ast').onclick = function() {
    document.getElementById('country').innerHTML = data.Australia.country;
    document.getElementById('text').innerHTML = data.Australia.text;
}

document.getElementById('Afr').onclick = function() {
    document.getElementById('country').innerHTML = data.Africa.country;
    document.getElementById('text').innerHTML = data.Africa.text;
}

document.getElementById('Ers').onclick = function() {
    document.getElementById('country').innerHTML = data.Eurasia.country;
    document.getElementById('text').innerHTML = data.Eurasia.text;
}

// function OutputInfo() {
//     if (document.getElementById('nAm')) {
//         document.getElementById('country').innerHTML = data.nAmer.country;
//         document.getElementById('text').innerHTML = data.nAmer.text;
//     } else
//         document.getElementById('country').innerHTML = data.sAmer.country;
//         document.getElementById('text').innerHTML = data.sAmer.text;
// }