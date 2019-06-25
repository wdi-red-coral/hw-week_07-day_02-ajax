$(document).ready(function(){ 
    axios({
        method:"get",
        url:"https://api.imgflip.com/get_memes"
    })
    .then((response) =>{
        response.data.data.memes.forEach(memes =>{

            $('.pic').append(`<img src="${memes.url}" >`)
        })
        
        console.log(response)
    })

    .catch((error)=>{
        console.log("Erorrrrrrrrr....");
    })    
})