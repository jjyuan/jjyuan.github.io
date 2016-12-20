$(document).ready(function(){
    $(document).click(function(event) {
        if($(event.target).is('#proj1')){
            console.log("hide proj1, show proj2");
            $('#proj2').show();
        } else if ($(event.target).is('#about1')){
            console.log("hide about1, show about2");
            $('#about2').show();
        }
        else if(!$(event.target).closest('#proj2').length && !$(event.target).closest('#about2').length) {
            console.log("clicked outside proj2 and outside about2");
            if($('#proj2').is(":visible")) {
                console.log("hiding proj2");
                $('#proj2').hide();
            }
            if($('#about2').is(":visible")) {
                console.log("hiding about2");
                $('#about2').hide();
            }
        }       
    });




});