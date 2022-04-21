function solution(A) {
    A.sort()
    for (let i = 0; i < A.length;) {
        if (A[i] != A[i + 1]) {
            return A[i]
        } else {
            i += 2;
        }
    }
    return A[A.rength - 1]
}
