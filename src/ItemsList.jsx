import { useState,useEffect} from "react";
function Item({name,isPacked=false}){
    return (<li>
        {name} {isPacked && '✓'}
    </li>);
}
export default function ItemsList(){
    const [keyword,setkeyword] = useState("");
    useEffect(()=>{
        console.log("this component is loaded.")
        return()=>{
            alert("component unloaded!");
        }
    },[]);

    const items=[{name:"Sunglass",isPacked:false},{name:"Sunblock",isPacked:true},{name:"Swimmingsuits",isPacked:true}
        ,{name:"Powerbank",isPacked:false},{name:"Towel",isPacked:true}
    ];

    const filterList = items.filter(i=>i.name.toLowerCase().includes(keyword.toLowerCase()));
    const itemsList=filterList.map(i=><Item key ={i.name} name={i.name} isPacked={i.isPacked}/>)
    
    return (<>
    <input type="text" value={keyword} onChange={e=> setkeyword(e.target.value)}/>
    <ui>
        {itemsList}
    </ui>
    </>);
}