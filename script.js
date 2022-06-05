 function getAdmins(map){
    let admins = [];
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key)
        }
    }
    return admins;
 }

 const users = new Map();

 users.set('Luiz', 'Admin');
 users.set('Stephany', 'Admin');
 users.set('Jorge', 'User');
 users.set('José', 'User');


 console.log(getAdmins(users));

const meuArray = [30, 30, 40, 5, 223,2049, 3034, 5];

function valoresUnicos(arr){
    const mySet = new Set(arr);

    return [...mySet];
}

console.log(valoresUnicos(meuArray));

