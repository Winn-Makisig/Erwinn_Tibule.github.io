$('Top').on('click',function(){
    const back = $('#landing-page').position().top;

    $('html, body').animate({
        scroll: back
    },2000);
});
