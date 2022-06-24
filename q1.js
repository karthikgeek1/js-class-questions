function fact(num, facto){
    if(num>0){
        facto=facto*num 
        return fact(num-1,facto)
    }
    console.log(facto);
}
fact(5,1)