$(document).ready(function(){
    axios({
        method: 'get',
        url: "https://api.imgflip.com/get_memes"
    })
    .then(responce => {
        console.log(responce)
        $('.msg').text("You can start").css("color", "Green")
        /**
         * Extract the data from the url using forEach 
         * append the data inside list 
         */
        responce.data.data.memes.forEach(  img => {
            $("ul").append(`<li><img src="${img.url}" height="${img.height}" width="${img.width}"> <p>${img.name}</p></li>`)
        })
        /**
         * When user click on the image name it should 
         * hide or show the image of clicked name using toggle()
         */
        $('p').on('click', function(event){
            $(event.target).parent().find("img").toggle();
        })
        /**
         * When user type inside the input field 
         * it start take that input from that field and save it in inputValue  
         * through the class inside <ul> I used filter() 
         * to start find the user input  
         */
        $(".userInput").on("keyup", function() {
            let inputValue = $(this).val().toLowerCase();
            $(".item li").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(inputValue) > -1)
            });
        })
    })//END .then()
    .catch(error => {
        console.log("You got an error "+error)
        $('.msg').text("You got an error "+error).css("color", "red")
    })//END .catch()
    
})
