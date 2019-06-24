$(document).ready(function () {
    console.log("Hello")
    axios({
        method: 'get',
        url: 'https://api.imgflip.com/get_memes'
    })

    .then((response) => {
        $("h1").text('Successful Request')
        console.log(response)
        $("h1").text(response.data.name);
        $("p").text(`Width: ${response.data.width}, Height: ${response.data.height}`);
    })

    .catch((error) => {
        $('p').text('Request Failed')
    })

    axios({
        method: 'get',
        url: 'https:\/\/i.imgflip.com\random'
    })
    .then((response) => {
        $("h1").text('Successful Request')
        console.log(response)
        $('p').html(`<img src = ${response.data.memes} alt="alt"/>`)
    })
    .catch ((error) => {
        $('p').text('Request Failed')
    })
})