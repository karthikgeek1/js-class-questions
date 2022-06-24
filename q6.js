function digits(n,i){
    if(n!=0){
        rem=n%10
        i=i+1
        x=Math.floor(n/10)
        return digits(x, i)
    }
    console.log(i);
}
digits(12345,0);