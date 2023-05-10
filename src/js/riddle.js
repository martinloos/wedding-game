export function doRiddle ()
{
    document.getElementById("myform").addEventListener("submit", function(event){
        event.preventDefault()
        let value = document.getElementById("answer").value;
        let tries = document.getElementById("tries").innerHTML;
        document.getElementById("tries").innerHTML = parseInt(tries) + 1;
        console.log('tries' , tries)
        if(tries > 1 ) {
            document.getElementsByClassName('hint-btn')[0].classList.remove('hidden')
            console.log('inside if')
        }
    
        if (btoa(value.toLowerCase().trim()) == 'aGVhZCBvZiBkZXZlbG9wbWVudA==') {
            //correct
            document.getElementById("stand").innerHTML= 'Code: 23';
            document.getElementsByClassName('current-stand')[0].classList.remove('wrong');
            document.getElementsByClassName('current-stand')[0].classList.add('correct');
        }else {
            // incorrect
            //erase the value and show a message
            document.getElementById("answer").value = "";
            document.getElementById("stand").innerHTML= 'wrong';
            document.getElementsByClassName('current-stand')[0].classList.remove('correct');
            document.getElementsByClassName('current-stand')[0].classList.add('wrong');
        }
    });
    
    document.getElementById("hint").addEventListener("click", function(event){
        document.getElementsByClassName('hint-btn')[0].innerHTML = 'Your position @Communiacs [ENG.]';
    })
}