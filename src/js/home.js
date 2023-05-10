const openSesame = '11209981231161419999994555'
let pswrd = ''

export function init ()
{
    console.log('init home')
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
        pswrd = $('#home .input-group').find('.form-control').val();
        console.log(pswrd)
        if (pswrd === openSesame)
        {
            $("#success").addClass("success_active");
            $('#home .circle-loader').show();

            window.setTimeout(function(){
                $('#home .checkmark').toggle();
                $('#home .circle-loader').toggleClass('load-complete');
            }, 1000);
        }
        else 
        {
            console.log('nice try')
        }
    })
}