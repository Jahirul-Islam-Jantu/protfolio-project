function submitHandler(){
    let webpage = document.querySelectorAll("input[name='webPage']")
    let developer = document.querySelectorAll("input[name='developer']")

    for (i=0; i<webpage.length; i++){
        if(webpage[i].checked)
            alert(webpage[i].value)
    }
    for (i=0; i<developer.length; i++){
        if(developer[i].checked)
            alert(developer[i].value)
    }

    // let jsonObj = {
    //         webpage = webpage,
    //         developer = developer,
    // }
    // alert(JSON.stringify(jsonObj))
}