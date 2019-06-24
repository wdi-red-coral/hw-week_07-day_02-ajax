$(document).ready(function(){
    
    axios({
        method: "get",
        url:" https://api.imgflip.com/get_memes"
      
    })
    .then((response)=>{
        console.log(response)
        response.data.data.memes.forEach(mt => $("h1").append (`<p>${mt.name}</p> <img src="${mt.url}">`)
       

        )

    
    })
})



