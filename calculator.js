console.log("Welcome to the calculator");
let screen=document.getElementById('screen');
let screenValue='';
let button=document.querySelectorAll('button');


for(let item of button)
{
    console.log(item);
    
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log(buttonText);
        if(buttonText=='X')
        {
            buttonText='*';
            screenValue+=buttonText;
            screen.value=screenValue;
        }
        else if(buttonText=='C')
        {
            screenValue='';
            screen.value=screenValue;
            console.log(screenValue);
          
        }
    
        else if(buttonText=='=')
        {
            screen.value=eval(screenValue);
        }
    
        else{
            screenValue+=buttonText;
            screen.value=screenValue;
        }
    });
}