$(document).ready(function () {

    axios({

        method: "get",

        url: " https://api.imgflip.com/get_memes"

    })
    
        .then((meme) => {
            let iimg = meme.data.data.memes.forEach(element => {
                console.log(element)
                $('div').append(`<img src="${element.url}" >`)
                $('div').append(`<h1>${element.name}</h1>`)
                $('img').css({ width: element.width, height: element.height })

                $('h1').on('click',function (event) {
                    console.log("clicked")
                    $('img').show()
                    $('img').hide()
                 
                })
                // $('h1').on('click', function (event) {
                    
                // })
                // console.log(meme)
                // console.log(iimg)
                    
            })
    });
       
    

})

//     .catch((error) => {
// console.log(error)

//     })
