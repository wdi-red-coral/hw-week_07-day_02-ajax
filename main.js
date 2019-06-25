$(document).ready(function () {
axios ({
    method: 'get',
    url: 'https://api.imgflip.com/get_memes'
})
.then((response) => {
    console.log(response)
    let data = response.data.data.memes;
    data.forEach(element => {
        let url = element.url;
        let width= element.width
        let height = element.height
        $('body').prepend(`<img style="width:${width}; height:${height}"src= "${url}">`)
    });
    let names = response.data.data.memes;
    names.forEach(name => {
        let imgName = name.name;
        $('.names').append(`<li> ${imgName} </li>`)

    })
})
.catch(error => console.log("there was an error"))

})