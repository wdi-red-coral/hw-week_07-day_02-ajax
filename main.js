$(document).ready(function () {

    axios({
        method: "get",
        url: `https://api.imgflip.com/get_memes`
    })
        .then((info) => {

            info.data.data.memes.forEach((m) => {
                $('div').append(` 
                <p>${m.name}</p>
                <br>
                <img src=' ${m.url}' height='${m.height}' width='${m.width}'>
                <hr>`)
            })


            console.log(info);


        }).catch({

        })
});