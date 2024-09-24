let userInput=document.querySelector("#date")
const result= document.querySelector(".result")
const reSet= document.querySelector(".reset")
userInput.max=new Date().toISOString().split("T")[0]//isse aaj ke date se aage ki date select nahi kar payega
function calcAge(){
    let birthDate=new Date(userInput.value)
    let d1=birthDate.getDate()
    let m1=birthDate.getMonth()+1
    let y1=birthDate.getFullYear()
    // console.log(m1,d1,y1)
    let today=new Date()
    let d2=today.getDate()
    let m2=today.getMonth()+1
    let y2=today.getFullYear()
    // console.log(m2,d2,y2)

    let m3=0
    y3=y2-y1;
    if(m2>=m1){
        m3=m2-m1
    }else{
        y3--
        m3=12+m3-m1
    }
    if(d2>=d1){
        d3=d2-d1
    }else{
        m3--;
        d3=getDaysInMonts(y1,m1)+d2-d1;
    }
    if(m3<0){
        m3=11;
        y3--;
    }
    console.log("your age is ", y3,"year",m3," month",d3,"days")
    result.innerText=`your age is  ${y3} year ${m3} month ${d3},days`

}

function getDaysInMonts(year,month){
    return new Date(year,month,0).getDate();
}


reSet.addEventListener("click",()=>{
    document.result.innerHTML.style.backgroundColor = 'lightblue';
})