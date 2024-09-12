function submitHandler(){
    let checkbox1 = document.querySelector('#checkbox1').value
    let checkbox2 = document.querySelector('#checkbox2').value

    let jsonObj = {
        webPage = checkbox1,
        developer = checkbox2
    }
    alert(JSON.stringify(jsonObj))
}