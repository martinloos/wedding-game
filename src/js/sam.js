export function sam ()
{
    const dialog = document.querySelector("main dialog");
    const input = document.querySelector("main .solution input");
    const button = document.querySelector("main .solution button");
    const closeModalwrong = document.querySelector("main dialog .closewrong");
    const closeModalsuccess = document.querySelector("main dialog .closesuccess");
    const wrong = document.querySelector("main dialog .wrong");
    const success = document.querySelector("main dialog .success");

    const buttonClickHandler = function () {
        if (input.value == "1161419999994555") 
        {
            dialog.showModal();
            success.style.display = "block";
            input.value = "";
            button.removeEventListener("mousedown", buttonClickHandler);
        } 
        else 
        {
            dialog.showModal();
            wrong.style.display = "block";
        }
    }

    button.addEventListener("mousedown", buttonClickHandler);

    closeModalwrong.addEventListener("mousedown", function () {
        dialog.close();
        wrong.style.display = "none";
    });

    closeModalsuccess.addEventListener("mousedown", function () 
    {
        dialog.close();
        success.style.display = "none";
    });
}