$(document).ready(function(){
    axios({
        method: 'get',
        url: 'https://api.imgflip.com/get_memes'
    })
        .then(response => {
            response.data.data.memes.forEach(meme => {
                $('div').append(`<img class="${meme.name}" 
                                      src="${meme.url}" 
                                      height="${meme.height}" 
                                      width="${meme.width}" 
                                       >`);
                $('div').append(`<p>${meme.name}<p/>`)

            });

        })
        .catch(error => {
            $('h3').text('');
            console.log('');
        })
})