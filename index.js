// expects a lucky number 33, if the lucky number is 33 then thats a win itself

const playerIntput = (a, b) => {

    if (a === 33 || b === 33){
        return true;
    }

    if (a + b === 33 || b + a === 33 || a - b === 33){
        return true;
    }

    return false;
}


console.log(playerIntput(34, 2));

