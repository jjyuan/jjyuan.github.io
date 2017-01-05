$(document).ready(function(){
    $(document).click(function(event) {
        if($(event.target).is('#proj1') || $(event.target).is('#proj1 p') ){
            // console.log("hide proj1, show proj2");
            $('#about1').animate({width: "0%"}, 500, "linear", function(){
                $('#about1').css({display:"none"});
            });

            $('#proj1').animate({width:"80%"}, 500, "linear", function(){
                $('#proj2').show();
                $('.entry').hide();
                $('.entry').fadeIn(300, "linear");
                $('#proj1').hide();
            });
            
        } else if ($(event.target).is('#about1') || $(event.target).is('#about1 p')){
            // console.log("hide about1, show about2");
            $('#proj1').animate({width:"0%"}, 500, "linear", function(){
                $('#proj1').css({display:"none"});
            });
            $('#about1').animate({width:"80%"}, 500, "linear", function(){
                $('#about2').show(); 
                $('#about1').hide();
            });
        } else if($(event.target).parent().is('.window')) {
            console.log("clicked on a window");
            $('.page').fadeOut(300, "linear");
            $('#proj2').animate({width: "80%", height: "80vh", top:"15%", "border-radius":"4rem"}, 
                300, "linear", function(){
                    $('#proj2').css({"-webkit-filter": "none", "-moz-filter": "none", 
                        "-o-filter": "none", "-ms-filter": "none", "filter": "none"});
                    $('#header').fadeIn(300, "linear");
                });
        } else if ($(event.target).is('#a163') || $(event.target).is('#a163 h3')){
            console.log("clicked on 163 entry")
            if ($('.page').is(":visible")){
                $('.page').fadeOut(300, "linear");
                $('#proj2').animate({width: "80%", height: "80vh", top:"15%", "border-radius":"4rem"}, 
                    300, "linear", function(){
                        $('#proj2').css({"-webkit-filter": "none", "-moz-filter": "none", 
                            "-o-filter": "none", "-ms-filter": "none", "filter": "none"});
                        $('#header').fadeIn(300, "linear");
                    });
            } else {
                $('.page').fadeOut(300, "linear");
                $('#header').fadeOut(300, "linear");
                $('#proj2').animate({width: "95%", height: "95vh", top: "2.5%", "border-radius": "4rem"}, 
                    300, "linear", function(){
                        $('#proj2').css({"-webkit-filter": "blur(5px)", "-moz-filter": "blur(5px)", 
                            "-o-filter": "blur(5px)", "-ms-filter": "blur(5px)", "filter": "blur(5px)"});
                        $('#page-163').fadeIn(300, "linear");
                    
                });
                
            }
        } else if ($(event.target).is('#3dscanner') || $(event.target).is('#3dscanner h3')){
            console.log("clicked on 3dscanner entry")
            if ($('.page').is(":visible")){
                $('.page').fadeOut(300, "linear");
                $('#proj2').animate({width: "80%", height: "80vh", top:"15%", "border-radius":"4rem"}, 
                    300, "linear", function(){
                        $('#proj2').css({"-webkit-filter": "none", "-moz-filter": "none", 
                            "-o-filter": "none", "-ms-filter": "none", "filter": "none"});
                        $('#header').fadeIn(300, "linear");
                    });
            } else {
                $('.page').fadeOut(300, "linear");
                $('#header').fadeOut(300, "linear");
                $('#proj2').animate({width: "95%", height: "95vh", top: "2.5%", "border-radius": "4rem"}, 
                    300, "linear", function(){
                        $('#proj2').css({"-webkit-filter": "blur(5px)", "-moz-filter": "blur(5px)", 
                            "-o-filter": "blur(5px)", "-ms-filter": "blur(5px)", "filter": "blur(5px)"});
                        $('#page-3dscanner').fadeIn(300, "linear");
                    
                });
            }
        } else if ($(event.target).is('#longboard') || $(event.target).is('#longboard h3')){
            console.log("clicked on longboard entry")
            if ($('.page').is(":visible")){
                $('.page').fadeOut(300, "linear");
                $('#proj2').animate({width: "80%", height: "80vh", top:"15%", "border-radius":"4rem"}, 
                    300, "linear", function(){
                        $('#proj2').css({"-webkit-filter": "none", "-moz-filter": "none", 
                            "-o-filter": "none", "-ms-filter": "none", "filter": "none"});
                        $('#header').fadeIn(300, "linear");
                    });
            } else {
                $('.page').fadeOut(300, "linear");
                $('#header').fadeOut(300, "linear");
                $('#proj2').animate({width: "95%", height: "95vh", top: "2.5%", "border-radius": "4rem"}, 
                    300, "linear", function(){
                        $('#proj2').css({"-webkit-filter": "blur(5px)", "-moz-filter": "blur(5px)", 
                            "-o-filter": "blur(5px)", "-ms-filter": "blur(5px)", "filter": "blur(5px)"});
                        $('#page-longboard').fadeIn(300, "linear");
                    
                });
            }
        } else if ($(event.target).is('#suitcase') || $(event.target).is('#suitcase h3')){
            console.log("clicked on suitcase entry")
            if ($('.page').is(":visible")){
                $('.page').fadeOut(300, "linear");
                $('#proj2').animate({width: "80%", height: "80vh", top:"15%", "border-radius":"4rem"}, 
                    300, "linear", function(){
                        $('#proj2').css({"-webkit-filter": "none", "-moz-filter": "none", 
                            "-o-filter": "none", "-ms-filter": "none", "filter": "none"});
                        $('#header').fadeIn(300, "linear");
                    });
            } else {
                $('.page').fadeOut(300, "linear");
                $('#header').fadeOut(300, "linear");
                $('#proj2').animate({width: "95%", height: "95vh", top: "2.5%", "border-radius": "4rem"}, 
                    300, "linear", function(){
                        $('#proj2').css({"-webkit-filter": "blur(5px)", "-moz-filter": "blur(5px)", 
                            "-o-filter": "blur(5px)", "-ms-filter": "blur(5px)", "filter": "blur(5px)"});
                        $('#page-suitcase').fadeIn(300, "linear");
                    
                });
            }
        } else if ($(event.target).is('#drip') || $(event.target).is('#drip h3')){
            console.log("clicked on drip entry")
            if ($('.page').is(":visible")){
                $('.page').fadeOut(300, "linear");
                $('#proj2').animate({width: "80%", height: "80vh", top:"15%", "border-radius":"4rem"}, 
                    300, "linear", function(){
                        $('#proj2').css({"-webkit-filter": "none", "-moz-filter": "none", 
                            "-o-filter": "none", "-ms-filter": "none", "filter": "none"});
                        $('#header').fadeIn(300, "linear");
                    });
            } else {
                $('.page').fadeOut(300, "linear");
                $('#header').fadeOut(300, "linear");
                $('#proj2').animate({width: "95%", height: "95vh", top: "2.5%", "border-radius": "4rem"}, 
                    300, "linear", function(){
                        $('#proj2').css({"-webkit-filter": "blur(5px)", "-moz-filter": "blur(5px)", 
                            "-o-filter": "blur(5px)", "-ms-filter": "blur(5px)", "filter": "blur(5px)"});
                        $('#page-drip').fadeIn(300, "linear");
                    
                });
            }
        } else if ($(event.target).is('#checkedin') || $(event.target).is('#checkedin h3')){
            console.log("clicked on checkedin entry")
            if ($('.page').is(":visible")){
                $('.page').fadeOut(300, "linear");
                $('#proj2').animate({width: "80%", height: "80vh", top:"15%", "border-radius":"4rem"}, 
                    300, "linear", function(){
                        $('#proj2').css({"-webkit-filter": "none", "-moz-filter": "none", 
                            "-o-filter": "none", "-ms-filter": "none", "filter": "none"});
                        $('#header').fadeIn(300, "linear");
                    });
            } else {
                $('.page').fadeOut(300, "linear");
                $('#header').fadeOut(300, "linear");
                $('#proj2').animate({width: "95%", height: "95vh", top: "2.5%", "border-radius": "4rem"}, 
                    300, "linear", function(){
                        $('#proj2').css({"-webkit-filter": "blur(5px)", "-moz-filter": "blur(5px)", 
                            "-o-filter": "blur(5px)", "-ms-filter": "blur(5px)", "filter": "blur(5px)"});
                        $('#page-checkedin').fadeIn(300, "linear");
                        
                });
            }
        } else if($(event.target).closest('.page').length) {
            console.log("clicked on a page");
            // $('.page').fadeOut(300, "linear");
        } else if (!$(event.target).closest('#proj2').length && !$(event.target).closest('#about2').length) {
            console.log("clicked outside proj2 and outside about2");
            if($('#proj2').is(":visible")) {
                console.log("proj2 is visible");
                $('#proj1').show();
                $('#proj1').css({width:"45%"});
                $('#about1').show();
                $('#about1').css({width:"45%"});
                $('#proj2').fadeOut(500,"linear", function(){
                    $('#proj2').css({width:"80%", height:"80vh", top:"15%", "border-radius":"4em", 
                        "-webkit-filter": "none", "-moz-filter": "none", "-o-filter": "none",
                        "-ms-filter": "none", "filter": "none"});
                });
            }
            if($('#about2').is(":visible")) {
                console.log("about2 is visible");
                $('#about2').hide();
                $('#about2').css({width:"80%", height:"80vh", top:"15%", "border-radius":"4em", 
                    "-webkit-filter": "none", "-moz-filter": "none", "-o-filter": "none",
                    "-ms-filter": "none", "filter": "none"});
                $('#about1').show();
                $('#about1').css({width:"45%"});
                $('#proj1').show();
                $('#proj1').css({width:"45%"});
            }
            if($('.page').is(":visible")) {
                console.log("page was visisble");
                $('.page').hide();
                $('#header').fadeIn(300, "linear");
            }
        }       
    });




});
// $(document).keyup(function(e) {
//      if (e.keyCode == 27) { // escape key maps to keycode `27`
//         if($)
//     }
// });