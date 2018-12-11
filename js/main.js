$(document).ready(()=> {
                $('#pagepiling').pagepiling();
                $('#para1').hide();
                $('#para2').hide();
                $('#para3').hide();
                $('#para4').hide();

                $('.btn-primary1').on('click',()=>{
                $('#para1').toggle();
          });
          $('.btn-primary2').on('click',()=>{
          $('#para2').toggle();
    });
    $('.btn-primary3').on('click',()=>{
    $('#para3').toggle();
});
$('.btn-primary4').on('click',()=>{
$('#para4').toggle();
});
});
