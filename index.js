const questionList=[
    {
    'que':'which of the following is a markup language?',
    'a':'HTML',
    'b':'CSS',
    'c':'Javascript',
    'd':'php',
    'correct':'a'
},
{
    'que':'which year javascript launched',
    'a':'1996',
    'b':'1995',
    'c':'1998',
    'd':'1994',
    'correct':'b'
},
{
    'que':'what does css stand for',
    'a':'Hyper text mark up language',
    'b':'Cascading style Sheet',
    'c':'javascript object notation',
    'd':'None of these',
    'correct':'b'
}
]
let index=0;
let total=questionList.length;
let right=0,wrong=0;

const input=document.getElementsByTagName("input")
// console.log(input);
const loadQuestion=()=>{
    const question=document.getElementById("questions")
    if(index===total){
        return endQuiz()
    }
    else{
        const data=questionList[index];
    question.innerHTML=`${index+1}) ${data.que}`
    const optionslabel=document.getElementsByTagName("label");
    optionslabel[0].innerText=data.a;
    optionslabel[1].innerText=data.b;
    optionslabel[2].innerText=data.c;
    optionslabel[3].innerText=data.d;
    reset()

    }
    

}
const getAns=()=>{
    let selectedValue
   Array.from(input).forEach((element)=>{
    if(element.checked){
        // console.log(element.value);
        selectedValue= element.value;
    }
    
   })
   return selectedValue

}
const submitQuiz=()=>{
    let ans=getAns()
    const data=questionList[index];
   
    if(ans==data.correct){
        
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion()
    return;
}
const reset=()=>{
   Array.from(input).forEach((element)=>{
    element.checked=false;

   })

}
const endQuiz=()=>{
    document.getElementById("box").innerHTML=`
    <h2>Thank you for playing the quiz:</h2>
    <h2 style="color:blue">Result:</h2>
    <h3 style="color:green; ">${right}/${total} are correct</h3>
    
    `
}

loadQuestion()