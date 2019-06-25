$(document).ready(function(){
    axios({
        method: "get",
        url:"https://api.imgflip.com/get_memes"
    }).then((response)=>{
        console.log(response);
        $('p').text('Successful Request');
        response.data.data.memes.forEach((key)=>{
            // $('h3').text(`${key.name}`)
            console.log("height="+key.height+" width="+key.width);
            $('ul').append(`<li><h3>${key.name}</h3><br><img src="${key.url}"></li><br>`);
            $("img").css('width',`${key.width}`);
            $("img").css('height',`${key.height}`);

            
        })//forEach
        
        $('li').on('click',function(){
            $('div').html('')
            // console.log('xxx')
            // axios({
            //     method: 'get',
            //     url:`https://dog.ceo/api/breed/${$(event.target).text()}/images`
            // })
           
        
            // .then((response)=>{
            //     response.data.message.forEach(image => {
            //         $('div').append(`<img src="${image}" >`)
            //     })
            // })
        
            
            
        })//onClick
  
    }).catch({

    })//catch
});//ready