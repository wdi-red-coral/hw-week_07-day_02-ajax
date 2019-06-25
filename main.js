$(document).ready(function(){
    let name = prompt("Enter the name:")
    axios({
        method: "get" ,
        url:'https://api.imgflip.com/get_memes' 
    })
    .then((response) =>{
        // console.log(response)
        response.data.data.memes.forEach((TheMem )=> {
            $(".image").append(`<img src =${TheMem.url}>`)
            $(".names").append(`<h3> ${TheMem.name}</h3>`)
            $('img').css({width: TheMem.width, height: TheMem.height})
        })

    }) 
    .catch(() =>{

    })
})