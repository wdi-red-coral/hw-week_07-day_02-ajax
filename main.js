$(document).ready(function(){

    axios({

        method: 'get',
        url: 'https://api.imgflip.com/get_memes',

    })
    .then((res) => {
        res.data.data.memes.forEach((i) => {
            $("body").append( `<img src=${i.url}>`)
            $("body").append( `<h2>${i.name}</h2>`)
            $("img").css({"width": i.width, "height": i.height})
           
        }); 
       
          

                  console.log(res);

    }).catch((err) => {
        
    });
    











})