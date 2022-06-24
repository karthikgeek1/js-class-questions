function odd(a,b){
    if(a<=b){
        if(a%2==1){
            console.log(a);
            return odd(a+1,b)
        }
        return odd(a+1,b)
    }
}
odd(1,10)