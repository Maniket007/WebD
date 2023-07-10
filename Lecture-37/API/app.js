
let jsonData = `[
    {
        "id":1,
        "name":"John",
        "occupation":"Software developer",
        "address":[]
    },
    {
        "id":2,
        "name":"Walker",
        "occupation":"design developer",
        "address":[
            {
                "address":1,
                "city":"Delhi",
                "contry":"India"
            }
        ]
    }
]`
//this is a string and i cannot use .(dot notation) here.
//I cannot work on string here because object hi hai.
//usable JS object me convert karega .


//I have JASON string and i cannot work on it directly so i need to parse it first.


let obj = JSON.parse(jsonData)//accpet JASON string..
console.log(obj[0].occupation);

let str = JSON.stringify(obj[0].occupation);
console.log(str);