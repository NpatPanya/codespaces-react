import {useRef,useState} from 'react';
function Bmitext (bmi){
    if(bmi = 0.00)
        return(null);
    if(0.01 < bmi < 18.5 )
        return<p>Underweight</p>
    else if(18.5 < bmi < 24.9 )
        return<p>Normal</p>
    
    else if(25 < bmi < 29.9)
        return<p>Overweigh</p>
    
}
export default function Bmi(){
    const W_input = useRef(null);
    const H_input = useRef(null);
    const [bmi,setbmi]=useState(0.00);
    function handleClick(){
        let weight = W_input.current.value;
        let height = H_input.current.value/100;
        setbmi(weight/(height*height));
        
    }
    return(<>  
    Weight : <input ref = {W_input}/> KG<br></br>
    Height : <input ref = {H_input}/> Centimeters<br></br>
    <button onClick={handleClick}> calculate </button>
    <p>BMI : {bmi.toFixed(2)}</p>
    <p> you body classification</p>
    <Bmitext bmi={bmi}/>
    </>);
}