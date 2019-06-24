$(document).ready(function () {
    axios({
        method:'get',
        url: 'https://api.imgflip.com/get_memes'
    })
    .then(response => {
        console.log(response)
        response.data.data.memes.forEach( meme => {
            $("div").append(`<img src=${meme.url}>`)
            $("div").append(`<span><b>${meme.name}</span>`)
            $("img").css({width: meme.width, height: meme.height})        
        }
        )
    })

    .catch()
} )