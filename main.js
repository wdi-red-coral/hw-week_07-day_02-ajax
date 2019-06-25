$(document).ready(function(){
    axios({
        method: 'get',
        url: 'https://api.imgflip.com/get_memes'
    })
    .then(response => {
        response.data.data.memes.forEach(meme => {
            $('body').append(`<img class="${meme.name}" src="${meme.url}" height="${meme.height}" width="${meme.width}" alt="sorry" >`)
            $('body').append(`<p>${meme.name}<p/>`)
            
        });

    })
    .catch(error => {
        $('p').text('')
        console.log('')
    })
})