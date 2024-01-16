function pieceOfAPie(flavors, start, end) {
    let startIdx = flavors.indexOf(start);
    let endIdx = flavors.indexOf(end);
    let result = flavors.slice(startIdx, endIdx + 1);
    return result;
}
console.log(pieceOfAPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'))
console.log(pieceOfAPie(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'))