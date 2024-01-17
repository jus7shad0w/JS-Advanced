function diagonalSum(matrix) {
    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    let size = matrix.length;

    for (let i = 0; i < size; i++) {
        mainDiagonalSum += matrix[i][i];
        secondaryDiagonalSum += matrix[i][size - 1 - i];
    }

    console.log(mainDiagonalSum, secondaryDiagonalSum);
}
diagonalSum([[20, 40], [10, 60]])
diagonalSum([[3, 5, 17], [-1, 7, 14], [1, -8, 89]])