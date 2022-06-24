function fibo(first, second, count, n){
    if(count<n){
        c=first+second 
        return fibo(second, c, count+1, n)
    }
    return first
}
console.log(fibo(1,1,1, 10));