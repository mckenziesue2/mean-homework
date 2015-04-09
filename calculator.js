var calculator = {
    total: 0,
    add: function(nextNumber){
        this.total += nextNumber;
    },
    subtract: function(nextNumber){
    	this.total -= nextNumber;
    },
    multiply: function(nextNumber){
    	this.total *= nextNumber;
    },
    divide: function(nextNumber){
    	this.total /= nextNumber;
    }
};

calculator.add(5);
calculator.add(5);
calculator.multiply(10);
calculator.divide(10);
calculator.subtract(5);

console.log('Your total is ' + calculator.total);