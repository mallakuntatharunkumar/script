// console.log('javascript is running')
function validate(){
    const userName=document.getElementById('username').value
    const userPassword=document.getElementById('userpassword').value
    console.log(userName)
    console.log(userPassword)
    if(userName=='tharun' && userPassword=='tharun') 
    {
    open('next.html')
    }
     if (userName=='PrassuBabe' && userPassword=='TharunPrassu'){
        open('next.html')
    }
    else
    {
        open('second.html')
    }
}