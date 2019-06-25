$(document).ready(function () {
    axios({
        method:'get',
        url: 'https://api.imgflip.com/get_memes'
    })
    .then(response => {
        response.data.data.memes.forEach( item => {
            $("body").append(`<div class="card" style="width: 18rem;">
            <img src=${item.url} class="card-img-top" alt="${item.name}">
            <div class="card-body">
            <h5 class="card-title"><span class="badge badge-secondary">${item.name}</span></h5>
            </div>
            </div>
            `)
            $("img").css({width: item.width, height: item.height, display: "none"})        
        }
        )
        $(".card").click(function (e) { 
            e.preventDefault();
            $(this).find('img').toggle();
            
        });
    })

    .catch(error => $("body").append(`<h4>${error}</h4>`))
} )