$(document).ready(function () {
    axios({
        method:'get',
        url: 'https://api.imgflip.com/get_memes'
    })
    .then(response => {
        response.data.data.memes.forEach( item => {
            $("body").append(`<div class="card" style="width: 18rem;">
            <img src=${item.url} class="card-img-top">
            <div class="card-body">
            <h5 class="card-title"><span class="badge badge-secondary">${item.name}</span></h5>
            </div>
            </div>
            `)
            $("img").css({width: item.width, height: item.height})        
        }
        )
    })

    .catch(error => $("body").append(`<h4>${error}</h4>`))
} )