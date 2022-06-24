// how to store the n value in temp sir output is not coming
function pallindrome(n,rev,temp){
    temp=n
    if(n!=0){
        rem=n%10
        rev=10*rev+rem
        y=Math.floor(n/10)
        return pallindrome(y,rev,temp)
    }
    if(rev==temp){
       console.log("pallindrome")
    }
    else(
        console.log("not a pallindrome")
    )
}
pallindrome(123,0,0)

// please correct this program sir