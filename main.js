$(document).ready(function(){
  
    axios ({
        method: 'get', 
        url: 'https://api.imgflip.com/get_memes'
    }) 
    .then ((response) => {
       console.log(response) 
       for (i =0; i <= 100; i++){
        $('body').after(`<img src=${response.data.data.memes[i].url}>`)
        $('ul').append(`<li>${response.data.data.memes[i].name}</li>`)
       }
        
    }) 

    .catch((error) =>{
        console.log(error) 
        console.log("There was an error!!");
    }); 

})