function lastKnum(n, k) {
    if (n <= 0 || k <= 0) {
        return [];
    }
    const sequence = [1];
    for (let i = 1; i < n; i++) {
        let sum = 0;
        for (let j = Math.max(0, i - k); j < i; j++) {
            sum += sequence[j];
        }
        sequence.push(sum);
    }
    return sequence;
}
console.log(lastKnum(6, 3));
console.log(lastKnum(8, 2));