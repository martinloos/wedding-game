const openSesame = '060708'
let pswrd = ''

export function init ()
{
    /*--------------------input focus----------------*/
	$( "input" ).focus(function() {
        $( this ).parent().find(".inp-label").addClass("active");
	    //$( this ).parent().find(".input-group-addon").css({"border-color":"#262FB5"});
	    $( this ).parent(".input-group").addClass("focusedLine");
	})
	$( "input" ).blur(function() {
        if( !this.value ) {
            $( this ).parent().find(".inp-label").removeClass("active");  
	  	    $( this ).parent(".input-group").addClass("focusedLine");
        }
	    $( this ).parent(".input-group").removeClass("focusedLine");
	    $( this ).parent().find(".input-group-addon").css( "border-color", "#ccc" );
	})
    $(".btn-primary").on('click', () => {
        pswrd = $('.input-group').find('.form-control').val();

        if (pswrd === openSesame)
        {
            $("#success").addClass("success_active");
            $('.circle-loader').show();

            window.setTimeout(function(){
                $('.checkmark').toggle();
                $('.circle-loader').toggleClass('load-complete');
            }, 1000);
        }
        else 
        {
            console.log('nice try')
        }
    })
}