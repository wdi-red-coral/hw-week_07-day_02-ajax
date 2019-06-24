$(document).ready(function(){

    axios({
        method:"get",
        url: "https://api.imgflip.com/get_memes"

    })
    .then((x)=> {
     x.data.data.memes.forEach((element)=>{

         console.log(element.url);

        $("div").append(`<img src=${element.url}>`)
        $("div").append(`<h4>${element.name}</h4>`)
        $("img").css({width: element.width, height: element.heigth})

     });

        
    //  console.log(x.memes.name)

    //  console.log(x.memes.width)

    //  console.log(x.memes.height)


        
    })
    .catch((error)=>{

    })


});