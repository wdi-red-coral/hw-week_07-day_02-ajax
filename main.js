$(document).ready(function(){


    axios({
        method:"get",
        url:"https://api.imgflip.com/get_memes"
            })

        .then((info)=>{
            console.log(info)
            info.data.data.memes.forEach((response) => {
                    $('h1').append(`<p>${response.name}</p>        
                <img src=' ${response.url}' height='${response.height}' width='${response.width}'>`)
                            })
                $('h1').on('click', function(event){
                    $('p').html('')
                    let breed = $(event.target).text()
})


})


                .catch((error)=>{
                $("p").text("request faild")        
                console.log("there was an error")
                })
                }) 