function loop(n,i){
    if(n>=i){
        console.log(n)
        return loop(n-1,i)
    }
}
loop(10,1)