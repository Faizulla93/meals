// images
import plov from '../img/Plov.png';
import manti from '../img/Manti.png';
import dolma from '../img/Dolma.jpg';
import dimlama from '../img/Dimlama.jpg';
import kovurma from '../img/Kovurma.jpg';
import lagmanSoup from '../img/Lagman-Soup.jpg';
import qurutob from '../img/Qurutob.jpg';
import mastava from '../img/Mastava.jpg';
import shurpa from '../img/Shurpa.jpg';
import chuchvara from '../img/Chuchvara.jpg';
import koreanCarrotSalad from '../img/Korean-carrot-salad.jpg';
import olivye from '../img/Olivye.jpg';
import achichuk from '../img/Achichuk.jpg';
import greekSalad from '../img/Greek-salad.jpg';
import honeyCake from '../img/Honey-cake.jpg';
import birdsMilkCake from '../img/Birds-milk-cake.jpg';
import appleCake from '../img/Apple-cake.jpg';
import baklava from '../img/Turkish-baklava.jpg';
import tulumbaTatlisi from '../img/Tulumba_tatlisi.jpg';
function getData() {
    return [{
            name: "Plov",
            description: "Plov (pilaf) is a national dish of the country which is similar to Iranian biryani. It is a rice based dish which contains beef, roasted garlic, dried fruits and shredded carrot.",
            ingredients: "moderately fat lamb, shoulder or ribs, carrot, oil, onion, rice",
            price: 600,
            thumbNail: plov,
            id: 12,
            category: "hotDishes",
            quantity: 0
        },
         {
            name: "Manti dumpling",
            description: "Manti dumpling is a popular cuisine in Kazakstan, Central Asia and South Caucasus which consists typically of a mixture of meat usually lamb or beef. The meat is stuffed in with an addition of squash or pumpkin with some black pepper in it and topped with some garlic or onion sauce.",
            ingredients: "Meat, onion, flour, water, salt",
            price: 600,
            thumbNail: manti,
            id: 13,
            category: "hotDishes",
            quantity: 0
        },
        {
            name: "Dolma",
            description: "Kazy is a homemade horsemeat sausage which is made locally just from meat horse without any chemical additives. The sausage is stuffed in with meat, fat and spices such as garlic, pepper, zira etc. It can be sliced thinly and be eaten with various dishes such as naryn and plov.",
            ingredients: "Horsemeat, salt",
            price: 1000,
            thumbNail: dolma,
            id: 14,
            category: "hotDishes",
            quantity: 0
        },
        {
            name: "Dimlama",
            description: "It is a Turkic stew made with combinations of potatoes, onions, vegetables and meats. Sometimes the dish is also added with some fruits. The main meat of this dish is either lamb or beef cut into large pieces and put to cook in slowly in their own juice.",
            ingredients: "Oil, meat, potato, onion, vegetables",
            price: 650,
            thumbNail: dimlama,
            id: 15,
            category: "hotDishes",
            quantity: 0
        },
        {
            name: "Qurutob",
            description: "This is another popular meal of the over the nation and it’s made by dissolving the salted cheese in water and then pouring it the non. It’s seasoned with fried onions, melted butter or linseed oil and served with some fresh vegetables such as cucumber, tomatoes and pepper.",
            ingredients: "Salted cheese, fried onions, bread",
            price: 550,
            thumbNail: qurutob,
            id: 16,
            category: "hotDishes",
            quantity: 0
        },
        {
            name: "Kovurma",
            description: "The Turks were great nomads and they were well known for preserving meat. Kovurma is a meat dish which is finely chopped into small pieces and fried in its fat. It's considered to be the best dish and it can be eaten hot or cold.",
            ingredients: "Salt, meat, onion, vegetables",
            price: 600,
            thumbNail: kovurma,
            id: 17,
            category: "hotDishes",
            quantity: 0
        },
        {
            name: "Lagman Soup",
            description: "Lagman is a meat and vegetable noodle dish. It is one of the signature dishes of the Uzbeks served along with manty, plov, kebabs and samsas. There is a variety of Lagman made from different vegetables, meats and noodles. Lagman also comes in a non-soupy version.",
            ingredients: "olive oil, onion, pound beef chuck, black pepper, poatato, tomato, flour",
            price: 600,
            thumbNail: lagmanSoup,
            id: 18,
            quantity: 0
        },
        {
            name: "Manti with pumpkin",
            description: "Of course the meat dumplings taste so much better if you used lamb, but the pumpkin and they turn out delicious and flavorful.",
            ingredients: "Pumpkin, salt, flour, oil, vegetables, onion, potato",
            price: 700,
            thumbNail: manti,
            id: 19,
            category: "hotDishes",
            quantity: 0
        },
        {
            name: "Olivye",
            description: "Olivye (olive-yea), Olivier salad, Oливье cалат, Ukrainian/Russian Potato Salad, however you prefer to call it, is such a popular salad in the Slavic cuisine. It’s well-known for its creamy mixture of potatoes, pickles, bologna, and many other ingredients. All those delicious and tender ingredients create a perfectly balanced and nutritiously rich salad. ",
            ingredients: "Potatoes, salt, carrot, egg, mayonnaise, frozen peas, dill.",
            price: 400,
            thumbNail: olivye,
            id: 40,
            category: "salads",
            quantity: 0
        },
        {
            name: "Achichuk Salad",
            description: "This is one of the most popular vegetarian dishes in Uzbekistan as the country does not have much to offer the diehard vegetarian. It's a traditional Uzbek salad dressed in a chopped salad with many fresh vegetables of tomatoes, onions, cucumbers, radishes and carrots.",
            ingredients: "Tomatoes, onion, cucumber, salt redish.",
            price: 450,
            thumbNail: achichuk,
            id: 41,
            category: "salads",
            quantity: 0
        },
        {
            name: "Greek salad",
            description: "A traditional Greek salad consists of sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese. This classic combination is delicious, so I stick to it, just adding a handful of mint leaves for a fresh finishing touch.",
            ingredients: "Potatoes, salt, carrot, egg, mayonnaise, frozen peas, dill.",
            price: 400,
            thumbNail: greekSalad,
            id: 42,
            category: "salads",
            quantity: 0
        },
        {
            name: "Korean Carrot Salad",
            description: "Olivye (olive-yea), Olivier salad, Oливье cалат, Ukrainian/Russian Potato Salad, however you prefer to call it, is such a popular salad in the Slavic cuisine. It’s well-known for its creamy mixture of potatoes, pickles, bologna, and many other ingredients. All those delicious and tender ingredients create a perfectly balanced and nutritiously rich salad. ",
            ingredients: "Potatoes, salt, carrot, egg, mayonnaise, frozen peas, dill.",
            price: 400,
            thumbNail: koreanCarrotSalad,
            id: 43,
            category: "salads",
            quantity: 0
        },
        {
            name: "Chorba",
            description: "Chorba, a lamb and tomato soup, is eaten in Turmenistan and known as \"dogroma chorba.\"",
            ingredients: "Lumb, tomato, vegetables.",
            price: 400,
            thumbNail: shurpa,
            id: 150,
            category: "soups",
            quantity: 0
        },
        {
            name: "Mastava",
            description: "Mastava is a thick soup made of rice, meat, and vegetables. There are two variants of this dish – boiled and fried. The boiled mastava is considered to be dietary.",
            ingredients: "Meat, onion, vegetables",
            price: 450,
            thumbNail: mastava,
            id: 151,
            category: "soups",
            quantity: 0
        },
        {
            name: "Chuchvara",
            description: "Mastava is a thick soup made of rice, meat, and vegetables. There are two variants of this dish – boiled and fried. The boiled mastava is considered to be dietary.",
            ingredients: "Meat, onion, vegetables",
            price: 550,
            thumbNail: chuchvara,
            id: 152,
            category: "soups",
            quantity: 0
        },
        {
            name: "Honey Cake (Medovik)",
            description: "This honey cake is so soft and fantastic. The honey baked into the cake layers pairs perfectly with the simple sour cream frosting. ",
            ingredients: "Honey, flour, sugar, egg",
            price: 250,
            id: 201,
            thumbNail: honeyCake,
            category: "desserts",
            quantity: 0
        },
        {
            name: "Bird’s Milk Cake",
            description: "Using sour cream as the main ingredient had me a little skeptical, but this cake is delicious, With a light, thin, sweet milk-soaked cake as a base, the sour cream filling is smooth with just the right amount of sweet and sour. ",
            ingredients: "Honey, flour, sugar, egg",
            price: 250,
            id: 202,
            thumbNail: birdsMilkCake,
            category: "desserts",
            quantity: 0
        },
        {
            name: "Apple Cake",
            description: "You might think that five ingredients aren’t enough to make a wonderfully moist and flavorful cake.",
            ingredients: "Honey, flour, sugar, egg",
            price: 250,
            id: 203,
            thumbNail: appleCake,
            category: "desserts",
            quantity: 0
        },
        {
            name: "Baklava",
            description: "The world-famous baklava will reach your dining table in less than two hours.",
            ingredients: "Honey, flour, sugar, egg",
            price: 250,
            id: 204,
            thumbNail: baklava,
            category: "desserts",
            quantity: 0
        },
        {
            name: "Tulumba tatlisi",
            description: "Tulumba tatlısı is a crispy fried dessert commonly sold as street food in Turkey.These Turkish pastries resemble standard churros, but are tastier because they’re soaked in a lemon syrup.",
            ingredients: "Honey, flour, sugar, egg",
            price: 250,
            id: 205,
            category: "desserts",
            thumbNail: tulumbaTatlisi,
            quantity: 0
        }
    ]
    }

export default getData;