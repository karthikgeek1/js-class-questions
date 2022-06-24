
function pallindrome(n,rev,temp){
    if(n!=0){
        rem=n%10
        rev=10*rev+rem
        n=Math.floor(n/10)
        return pallindrome(n,rev,temp)
    }
    console.log(rev);
    if(rev==temp){
       return "pallindrome"
    }
    else{
        return "not a pallindrome"
    }
    
}
console.log(pallindrome(121,0,121))

