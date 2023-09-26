/*
1. Copio l'array in un mio array
2. Destrutturo la data degli oggetti dell'array 
3. La riordino 
4. 
*/

import Post from "./class/Post.js";

const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];
const container = document.getElementById('container')

let newPost;

posts.forEach((post, index) => {
    newPost = new Post(post.id, post.author, post.content, post.media, post.likes, post.created)
    const {media, likes, created, author, content, id} = newPost;

    let {
        name,
        image,
    } = author;

    newPost._idPost = index;

    container.innerHTML += `
    <div class="post">
        <div class="post__header">

            <div class="post-meta">

                <div class="post-meta__icon">
                    <img class="profile-pic" src="${image}" alt="${name}">                    
                </div>

                <div class="post-meta__data">
                    <div class="post-meta__author">${name}</div>
                    <div class="post-meta__time">${created}</div>
                </div>  

            </div>

        </div>

        <div class="post__text">${content}</div>

        <div class="post__image">
            <img src="${media}" alt="">
        </div>

        <div class="post__footer">
            <div class="likes js-likes">

                <div class="likes__cta">
                    <a class="like-button  js-like-button like-button--liked" href="#" data-postid="${id}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>

                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone
                </div>

            </div> 
        </div>       

    </div>
`;
});

// Creo un array dove aggiungerò i post con "mi piace" cliccato
let likedPosts = [1, 3];

// likedPosts.forEach((el) => {
//     console.log(el)
// })

// Creo un array con tutti i bottoni, poi li ciclo e gli assegno il comportamento
const likeButtons = document.querySelectorAll('.js-like-button');

likeButtons.forEach((btn, index) => {

    btn._index = index;

    btn.addEventListener('click', function(e) {
        e.preventDefault();
        if (likedPosts.includes(this._index)) {
            btn.classList.toggle('like-button--liked');
        }
    });

});

//TODO: funzione di stampa avatar fallback
// function printAuthorImg(name, img) {
    
// }



// function printPost(el) {

// };












// myPosts.forEach((post) => {

//     let stringDataArray = post.created.split('-');

//     let [ year, month, day ] = stringDataArray;

//     post.created = '';

//     // post.created = [month, day, year] //US data
//     post.created = [day, month, year] //IT data

//     let outputData = post.created.join('-')

    

//     console.log(outputData)

// });

// console.log(myPosts);