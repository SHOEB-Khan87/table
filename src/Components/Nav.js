import React, { useState } from 'react'
import menu from "../Assets/cross.webp"
import { useSelector } from 'react-redux'
import Home from './Home'
function Nav() {
    let state = useSelector(state => state.mainReducer)
    let [show,setShow] = useState(true)
    let hide = () => {
        setShow(show => !show)
    }
    console.log(show)
  return (
    <>
<div style={{display:"flex"}}>
   {show ?  <div style={{background:"gray",width:"30%",height:"100vh"}}>
        <div style={{display:"flex",justifyContent:"end",marginRight:"15px"}}>
        <button style={{cursor:"pointer"}} onClick={hide}><img src={menu} width="30px" height="30px"/></button> 
        </div>
    <div>
        <ul style={{listStyle:"none"}}>
            <li style={{marginBottom:"15px"}} className='hov'>Home</li>
            <li style={{marginBottom:"15px"}} className='hov'>About</li>
            <li style={{marginBottom:"15px"}} className='hov'>Contact</li>
           
        </ul>
    </div>
    </div> : <div style={{display:"flex",justifyContent:"end"}}>
        <button style={{cursor:"pointer"}} onClick={hide}><img src={menu} width="30px" height="30px"/></button> 
        </div>}
        
   <div style={{background:"green",width:"100%",height:"40px",display:"flex",alignItems:"center",flexDirection:"column"}} > 
   
    
    <div>
        <table style={{display:"flex",gap:"20px",border:"1px solid black",flexWrap:"wrap"}}>
            {state[0] &&  state[0].map(elem=>{
                return <tr >
                <td style={{border:"1px solid black"}}>{elem.brand}</td>
            </tr>
            })}
            
            
        </table>
    </div>
    <div style={{marginTop:"50px",}}>
        <Home/>
    </div>
   
    </div>
    
    
</div>

    </>
  )
}

export default Nav