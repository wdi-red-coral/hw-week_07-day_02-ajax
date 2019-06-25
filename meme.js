$(document).ready(function(){
    axios({
        method: 'get',
        url: 'https://api.imgflip.com/get_memes'
    })
    .then((response) => {
        console.log(response);


        const keys = Object.keys(response.data.memes)
        keys.forEach(key=> $('ul').append(`<li>${key}</li>`))

        $("p").text(response.data.memes.name)
        $("img").attr("src",`${response.data.memes.url}`)
        // $("p").after(`<img src= ${response.data.memes.url} />`);

        $('li').on('click', function(){
            $('img').hide()
        })
        

        const search = memes.filter($("form"))
            console.log(search)
        
    })
    .catch((error) => {
        // console.log("There was an error!!");
    });

})