function fruit(product, weight, pricePerKg) {
    let weightInKG = (weight / 1000);
    let price = Math.abs(weightInKG * pricePerKg).toFixed(2);
    console.log(`I need $${price} to buy ${weightInKG.toFixed(2)} kilograms ${product}.`);
}
fruit('orange', 2500, 1.80)
fruit('apple', 1563, 2.35)
