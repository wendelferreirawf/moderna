$(document).ready(()=>{
    
    window.addEventListener('resize',monitorarLargura);

    $('.mobile').click(()=>{
        $('.menu_mobile').slideToggle(500);
    });

    function monitorarLargura(){
        var largura = $(document).width();
        if(largura >= 900){
            document.querySelector('.menu_mobile').style.display = 'none';
        }   
    }
});