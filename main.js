$(document).ready(function () {

    axios({
        method: 'get',
        url: 'https://api.imgflip.com/get_memes'
    })
    .then( (response)=>{
        console.log('Successful request')
        console.log(response.data)
        response.data.data.memes.forEach(meme => {
            $('ul').append(`<li><h3>meme name : ${meme.name} </h3><img src = ${meme.url} alt="alt"/></li>`)
        })
        $('img').css("max-width" ,"80vw")
        $("li h3").on("click", (event)=> {
            $(event.target).next().toggle();
        })
        $('#search').on("click", (event)=>{
            event.preventDefault()
            let searchValue = $('input').val()
            $('input').val('')
            console.log('val '+ searchValue)
            $('.result').text('Matches found')
            response.data.data.memes.forEach(meme => {
                if (searchValue && meme.name.includes(searchValue)){
                    $('ul').html('')
                    console.log('found ' + searchValue)
                    $('ul').after(`<li><h3>meme name : ${meme.name} </h3><img src = ${meme.url} alt="alt"/></li>`)
                } 
                // else {
                //     console.log('not found ' + searchValue)
                //     // $('.result').text('No Matches found')
                //     // $('li').html('')
                // }
            })
        })


    })
    .catch( (error)=>{
        $('p').text('Request Failed')
    })

})