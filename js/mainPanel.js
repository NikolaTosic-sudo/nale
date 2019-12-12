$(document).ready(function() {
    $('.tab-panels .ar .br .tabs li').on('click', function(){

    var $panel = $(this).closest('.tab-panels');

    $panel.find('.ar .br .tabs li.active').removeClass('active');

    $(this).addClass('active');

    //figure out which panel to show

    var panelShow = $(this).attr('data-panel');


    //hide current panel

    $panel.find('.ar .cr .panel.active').slideUp(300, showNextPanel);


    //show new panel

    function showNextPanel() {

        $(this).removeClass('active');

        $('#'+panelShow).slideDown(300, function() {
            $(this).addClass('active');

        });
    };

    });
});