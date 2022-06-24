function loop(n,i){
    if(i<=n){
        console.log(i)
        return loop(n,i+1)
    }
}
loop(10,1)