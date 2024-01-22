function cityTaxes(name, population, treasury) {
    return {
        name: name,
        population: Math.floor(population),
        treasury: Math.floor(treasury),
        taxRate: 10,

        collectTaxes: function () {
            this.treasury += Math.floor(this.population * this.taxRate);
        },

        applyGrowth: function (percentage) {
            this.population = Math.floor(this.population * (1 + percentage / 100));
        },

        applyRecession: function (percentage) {
            this.treasury = Math.floor(this.treasury * (1 - percentage / 100));
        }
    };
}


let myCity = cityTaxes('Tortuga',
  7000,
  15000);
console.log(myCity);
myCity.collectTaxes();
console.log(myCity);
myCity.applyGrowth(5);
console.log(myCity);
myCity.applyRecession(2);
console.log(myCity);