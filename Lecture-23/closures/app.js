function somefun(){
    let username = 'Maniket';
    function printName(){
        console.log(username);
    }
    return printName;
}

let returnedValue = somefun();
returnedValue();