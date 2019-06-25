$(document).ready(function(){
    axios({
        method: 'get',
        url: 'https://api.imgflip.com/get_memes'
    })
    .then((response) => {
        console.log(response);


        
        for( i = 0 ; i <= 100 ; i++){
            $("ul").append(`<li> ${response.data.data.memes[i].name} </li>`)
            $("p").after(`<img src= ${response.data.data.memes[i].url} />`);


        }
        
        $('li').on('click', function(){
           $('img').hide();
         })
        

    //     const search = memes.filter($("form"))
    //         console.log(search)
        
    })
    .catch((error) => {
        // console.log("There was an error!!");
    });

})