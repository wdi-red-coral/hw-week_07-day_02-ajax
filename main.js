
$(document).ready(function(){
   
    axios({
        method: "get",
        url:"https://api.imgflip.com/get_memes"
    })
    
    .then((mem)=>{
        // console.log(mem)
        // $(".pics").append.forEach(mem.data.data.memes.url)
      
        
        mem.data.data.memes.forEach(memh=> 
            // console.log(memh)
            {
        $(".pics").append(`<img src= ${memh.url}>`)
        $("img").css({width:memh.width,height:memh.height})
        $(".names").append(`<h5>${memh.name}</h5>`)
        

            }
            )



    })
    
    .catch({
        // $("p").text("Fail Request ")
        // console.log("there was an ERROR ")
    })
});