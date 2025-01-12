//json it stores only key value 

/*
let jsonObj = {
    id: 9,
    fname: "arjun",
    lname: "kadam"
}

console.log(`
    ID    ::${jsonObj.id}
    First Name  ::${jsonObj.fname}
    Last Name   ::${jsonObj.lname}
    
    `)
    */

// Array of Object

let arrObj = [
    {
        id: 9,
        fname: "arjun",
        lname: "kadam",
        country:{
            cid:1,
            cname:"india"
        }
    },
    {
        id: 10,
        fname: "arn",
        lname: "kam",
        country:{
            cid:2,
            cname:"inda"
        }
    },
    {
        id: 3,
        fname: "arun",
        lname: "kadm",
        country:{
            cid:3,
            cname:"in"
        }
    }
];
for (let i = 0; i < arrObj.length; i++) {
    console.log(`
        ID           :: ${arrObj[i].id}
        First Name   :: ${arrObj[i].fname}
        Last Name    :: ${arrObj[i].lname}
        Country      :: ${arrObj[i].country.cname}
        `)
}