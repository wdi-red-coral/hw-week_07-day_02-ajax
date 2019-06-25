$(document).ready(function(){

    axios({

        method: 'get',
        url: 'https://api.imgflip.com/get_memes',

    })
    .then((response) => {
        response.data.data.memes.forEach((item) => {
            $("body").append( `<img src=${item.url}>`)
            $("body").append( `<h2>${item.name}</h2>`)
            $("img").css({"width": item.width, "height": item.height})
           
        }); 
       
          

                

    }).catch((err) => {
        
    });

});