function squareOfStars(param) {
    for (let i = 0; i < param; i++) {
        let stars = '* '.repeat(param);
        console.log(stars);
    }
}
squareOfStars(1)
squareOfStars(2)
squareOfStars(5)
squareOfStars(7)