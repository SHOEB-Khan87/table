import React from 'react'

import { useSelector } from 'react-redux'
function Home() {
    let state = useSelector(state => state.mainReducer)
    console.log( state[0] &&  state[0])
  return (
    <>
    
 <div >
        <table style={{display:"flex",flexWrap:"wrap",gap:"20px",border:"1px solid black",background:"white"}}>
            {state[0] &&  state[0].map(elem=>{
                return <tr >
                <td style={{border:"1px solid black"}}><p style={{color:"white"}}> {elem.category}</p></td>
            </tr>
            })}
            
            
        </table>
    </div>

    </>
  )
}

export default Home