function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let maxNum = 0
    let goalArray = Array(N)
    goalArray.fill(0)
    
    let i = 0;
    for (; i < A.length; i++) {
        if (N < A[i]) {
            goalArray.fill(maxNum)
        } else {
            goalArray[A[i] - 1]++
            if (maxNum < goalArray[A[i] - 1]) {
                maxNum = goalArray[A[i] - 1]
            }
        }
    }
    return goalArray
}