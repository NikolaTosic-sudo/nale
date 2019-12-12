$(document).ready(function() {
    $('.tab-panels .ar .cr .panel .tabs2 li').on('click', function(){

    var $panel = $(this).closest('.tab-panels');

    $panel.find('.ar .cr .panel .tabs2 li.active').removeClass('active');

    $(this).addClass('active');

    //figure out which panel to show

    var panelShow = $(this).attr('data-target');


    //hide current panel

    $panel.find('.ar .cr .panel .panell.active').slideUp(300, showNextPanel);


    //show new panel

    function showNextPanel() {

        $(this).removeClass('active');

        $('#'+panelShow).slideDown(300, function() {
            $(this).addClass('active');

        });
    };

    });
});