$(document).ready(function(){

axios ({ method:'get', url: 'https://api.imgflip.com/get_memes' })

.then(response => response.data.data.memes.forEach(memes => {

$("div").append(`<img src=${memes.url}>`)

$("div").append(`<h2> ${memes.name} </h2>`)

$("img").css({width: memes.width, hight: memes.hight})

})).catch()})