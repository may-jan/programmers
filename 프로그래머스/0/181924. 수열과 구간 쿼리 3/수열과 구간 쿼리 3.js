function solution(arr, queries) {
    queries.forEach((query) => {
        const [i, j] = query;
        const a = arr[i];
        const b = arr[j];
        arr[i] = b;
        arr[j] = a;
    })
    return arr;
}