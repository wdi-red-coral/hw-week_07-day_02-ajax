$(document).ready(function(){
    let memeName = prompt("Enter the name:")
    axios({
        method: "get",
        url:'https://api.imgflip.com/get_memes'
    })
    
    .then((response)=>{
        //console.log(response)
        //console.log(response.data.data);
        
        // To check for input from user
        let array = response.data.data.memes.filter((meme)=> meme.name.includes(memeName))
        //console.log(array)
        if(array.length==0)//means user chose nothing or no result found
        {
            response.data.data.memes.forEach((meme)=>
            {
                $('h1').text("No Search results")
                $('.text').append(`<p>${meme.name}</p>`)
            })

        }
        else {//only searches user results
            array.forEach((meme)=>
            {
                $('h1').text(`${array.length} Search results`)
                $('.text').append(`<p>${meme.name}</p>`)

            })
            
        }
        
        $('.text p').on('click', function(event)
            {
                $('.text p').removeClass('red');//removes class added on clikced event
                $('.picture').html('')
                let meme = response.data.data.memes.find((meme)=> meme.name ==$(event.target).text())
                let image = meme.url
                //adds styles to the list and images
               $(`<style>
                    img
                    {
                        height: ${meme.height}px; 
                        width: ${meme.width}px;
                    } 
                    .picture {
                        float: left;
                        width: 80%;
                        display: flex;
                        flex-wrap: wrap;
                    } 
                    .text {
                        float: left;
                        width: 20%;
                        margin: 0;
                        padding: 0;
                        overflow: scroll;
                        height: ${meme.height}px; 
                    }
                    .red {
                        color:red
                    }
                </style>`).appendTo("head");

                $(event.target).addClass('red');
                $('.picture').append(`<img src=${image}>`)
                // console.log(`Width : ${meme.width}`)
                // console.log(`Height : ${meme.height}`)
            })
        
    })
    
    .catch((error) => {  
        $("h1").text("Request Failed!!");
        console.log("There was an error");
        console.log(error);
    })

});