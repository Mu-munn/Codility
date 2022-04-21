function solution(A, K) {
    if (A.length) {
        for (let i = 0; i < K; i++) {
            const pop = A.pop()
            A.unshift(pop);
        }
    }
    return A
}
