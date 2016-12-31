$(document).ready(function(){
    $(document).click(function(event) {
        if($(event.target).is('#proj1') || $(event.target).is('#proj1 p') ){
            // console.log("hide proj1, show proj2");
            $('#proj2').show();
        } else if ($(event.target).is('#about1') || $(event.target).is('#about1 p')){
            // console.log("hide about1, show about2");
            $('#about2').show();
        } else if($(event.target).parent().is('.window')) {
            console.log("clicked on a window");
            $('.page').hide();
            $('#proj2').css({width:"80%", height:"80vh", top:"10%", "border-radius":"4em", 
                    "-webkit-filter": "none", "-moz-filter": "none", "-o-filter": "none",
                    "-ms-filter": "none", "filter": "none"});
        } else if ($(event.target).is('#a163') || $(event.target).is('#a163 h3')){
            console.log("clicked on 163 entry")
            if ($('.page').is(":visible")){
                $('.page').hide();
                $('#proj2').css({width:"80%", height:"80vh", top:"10%", "border-radius":"4em", 
                    "-webkit-filter": "none", "-moz-filter": "none", "-o-filter": "none",
                    "-ms-filter": "none", "filter": "none"});
            } else {
                $('.page').hide();
                $('#page-163').show();
                $('#proj2').css({width:"95%", height:"95vh", top:"2.5%", "border-radius":"0", 
                    "-webkit-filter": "blur(5px)", "-moz-filter": "blur(5px)", "-o-filter": "blur(5px)",
                    "-ms-filter": "blur(5px)", "filter": "blur(5px)"});
                
            }
        } else if ($(event.target).is('#3dscanner') || $(event.target).is('#3dscanner h3')){
            console.log("clicked on 3dscanner entry")
            if ($('.page').is(":visible")){
                $('.page').hide();
                $('#proj2').css({width:"80%", height:"80vh", top:"10%", "border-radius":"4em", 
                    "-webkit-filter": "none", "-moz-filter": "none", "-o-filter": "none",
                    "-ms-filter": "none", "filter": "none"});
            } else {
                $('.page').hide();
                $('#page-3dscanner').show();
                $('#proj2').css({width:"95%", height:"95vh", top:"2.5%", "border-radius":"0", 
                    "-webkit-filter": "blur(5px)", "-moz-filter": "blur(5px)", "-o-filter": "blur(5px)",
                    "-ms-filter": "blur(5px)", "filter": "blur(5px)"});
            }
        } else if ($(event.target).is('#longboard') || $(event.target).is('#longboard h3')){
            console.log("clicked on longboard entry")
            if ($('.page').is(":visible")){
                $('.page').hide();
                $('#proj2').css({width:"80%", height:"80vh", top:"10%", "border-radius":"4em", 
                    "-webkit-filter": "none", "-moz-filter": "none", "-o-filter": "none",
                    "-ms-filter": "none", "filter": "none"});
            } else {
                $('.page').hide();
                $('#page-longboard').show();
                $('#proj2').css({width:"95%", height:"95vh", top:"2.5%", "border-radius":"0", 
                    "-webkit-filter": "blur(5px)", "-moz-filter": "blur(5px)", "-o-filter": "blur(5px)",
                    "-ms-filter": "blur(5px)", "filter": "blur(5px)"});
            }
        } else if ($(event.target).is('#suitcase') || $(event.target).is('#suitcase h3')){
            console.log("clicked on suitcase entry")
            if ($('.page').is(":visible")){
                $('.page').hide();
                $('#proj2').css({width:"80%", height:"80vh", top:"10%", "border-radius":"4em", 
                    "-webkit-filter": "none", "-moz-filter": "none", "-o-filter": "none",
                    "-ms-filter": "none", "filter": "none"});
            } else {
                $('.page').hide();
                $('#page-suitcase').show();
                $('#proj2').css({width:"95%", height:"95vh", top:"2.5%", "border-radius":"0", 
                    "-webkit-filter": "blur(5px)", "-moz-filter": "blur(5px)", "-o-filter": "blur(5px)",
                    "-ms-filter": "blur(5px)", "filter": "blur(5px)"});
            }
        } else if ($(event.target).is('#drip') || $(event.target).is('#drip h3')){
            console.log("clicked on drip entry")
            if ($('.page').is(":visible")){
                $('.page').hide();
                $('#proj2').css({width:"80%", height:"80vh", top:"10%", "border-radius":"4em", 
                    "-webkit-filter": "none", "-moz-filter": "none", "-o-filter": "none",
                    "-ms-filter": "none", "filter": "none"});
            } else {
                $('.page').hide();
                $('#page-drip').show();
                $('#proj2').css({width:"95%", height:"95vh", top:"2.5%", "border-radius":"0", 
                    "-webkit-filter": "blur(5px)", "-moz-filter": "blur(5px)", "-o-filter": "blur(5px)",
                    "-ms-filter": "blur(5px)", "filter": "blur(5px)"});
            }
        } else if ($(event.target).is('#checkedin') || $(event.target).is('#checkedin h3')){
            console.log("clicked on checkedin entry")
            if ($('.page').is(":visible")){
                $('.page').hide();
                $('#proj2').css({width:"80%", height:"80vh", top:"10%", "border-radius":"4em", 
                    "-webkit-filter": "none", "-moz-filter": "none", "-o-filter": "none",
                    "-ms-filter": "none", "filter": "none"});
            } else {
                $('.page').hide();
                $('#page-checkedin').show();
                $('#proj2').css({width:"95%", height:"95vh", top:"2.5%", "border-radius":"0", 
                    "-webkit-filter": "blur(5px)", "-moz-filter": "blur(5px)", "-o-filter": "blur(5px)",
                    "-ms-filter": "blur(5px)", "filter": "blur(5px)"});
            }
        } else if($(event.target).is('.page')) {
            console.log("click on a page");
            // $('.page').hide();
        } else if (!$(event.target).closest('#proj2').length && !$(event.target).closest('#about2').length) {
            console.log("clicked outside proj2 and outside about2");
            if($('#proj2').is(":visible")) {
                console.log("proj2 is visible");
                $('#proj2').hide();
                $('#proj2').css({width:"80%", height:"80vh", top:"10%", "border-radius":"4em", 
                    "-webkit-filter": "none", "-moz-filter": "none", "-o-filter": "none",
                    "-ms-filter": "none", "filter": "none"});
            }
            if($('#about2').is(":visible")) {
                console.log("about2 is visible");
                $('#about2').hide();
            }
            if($('.page').is(":visible")) {
                $('.page').hide();
            }
        }       
    });




});