/* ------------------
      problem-1
---------------------*/
function seerToMon(seer) {

    //error return part
    if (typeof seer != 'number') {
        return 'Please give a number';
    } else if (seer < 1) {
        return 'Please enter a positive number';
    }
    //seer to mon formula part
    let mon = seer / 40;
    return mon;
}
var mySeer = 80;
var mon = seerToMon(mySeer);
console.log(mon);



/* ------------------
      problem-2
---------------------*/
function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {

    //error return part
    if (typeof shirtQuantity != 'number' || typeof pantQuantity != 'number' || typeof shoeQuantity != 'number') {
        return 'Please give a number';
    }
    else if (shirtQuantity < 0 || pantQuantity < 0 || shoeQuantity < 0) {
        return 'Please enter a positive number';
    }

    // constent variable declaration
    const shirtPrice = 100;
    const pantPrice = 200;
    const shoePrice = 500;

    //calculation
    const shirtTotalPrice = shirtQuantity * shirtPrice;
    const pantTotalPrice = pantQuantity * pantPrice;
    const shoeTotalPrice = shoeQuantity * shoePrice;
    const totalSale = shirtTotalPrice + pantTotalPrice + shoeTotalPrice;
    return totalSale;
}
const firstOption = totalSales(1, 2, 6);
console.log(firstOption);


/* ------------------
      problem-3
---------------------*/

function deliveryCost(tShirtQuantity) {

    //error return part
    if (typeof tShirtQuantity != 'number') {
        return 'Please give a number';
    }
    else if (tShirtQuantity < 0) {
        return 'Please enter a positive number';
    }

    //constent variable declaration 
    const deliveryCostFirst100Tshirt = 100;
    const deliveryCostSecond100Tshirt = 80;
    const deliveryCostRestTshirt = 50;

    //conditions 
    if (tShirtQuantity <= 100) {
        const count = tShirtQuantity * deliveryCostFirst100Tshirt;
        return count;
    }
    else if (tShirtQuantity <= 200) {
        const firstTshirtsCost = 100 * deliveryCostFirst100Tshirt;
        const restTshirtCost = tShirtQuantity - 100;
        const secondTshirtCost = restTshirtCost * deliveryCostSecond100Tshirt;
        const totalCost = firstTshirtsCost + secondTshirtCost;
        return totalCost;
    } else {
        const firstTshirtsCost = 100 * deliveryCostFirst100Tshirt;
        const secondTshirtCost = 100 * deliveryCostSecond100Tshirt;
        const restTshirtCost = tShirtQuantity - 200;
        const restTotalTshirt = restTshirtCost * deliveryCostRestTshirt;
        const totalDeliveryCost = firstTshirtsCost + secondTshirtCost + restTotalTshirt;
        return totalDeliveryCost;
    }

}
const cost = deliveryCost(203);
console.log(cost);




/* ------------------
      problem-4
---------------------*/
const names = ['ety','alom','mira','helal', 'mahin', 'mahia', 'mita'];

function perfectFriend(names) {

    for (let i = 0; i < names.length; i++) {
        //error return part
        if (typeof names[i] != 'string') {
            return 'Please give a string';
        } 
        //main condition part
        else {
            const element = names[i];
            if (element.length == 5) {
                return element;
            }
        }

    }

}

const perfectFriendName = perfectFriend(names);
console.log(perfectFriendName);
