// learning OOP

var transport = {
    days: 4,
    price: 150,

    getTotalTransport: function() {
        var totalTransports = transport.days * transport.price * 2;
        console.log("getTotalTransportPerWeek:", totalTransports);
    }
    
}

transport.getTotalTransport();




var monthlySpendings = {
    days: 30,
    amount: 1200,

    totalSpending: function(){
        var totalExpennses = monthlySpendings.days * monthlySpendings.amount;
        console.log("Total monthly Spendings: ", totalExpennses);
    }
}

 console.log(monthlySpendings.days);
 console.log(monthlySpendings.amount);

monthlySpendings.totalSpending();


var yearlySpendings = {
    months: 12,
    amount: monthlySpendings.amount * monthlySpendings.days,

    totalSpending: function(){
        var totalExpennses = yearlySpendings.months * yearlySpendings.amount;
        console.log("Total yearly Spendings: ", totalExpennses);
    }
}

yearlySpendings.totalSpending();