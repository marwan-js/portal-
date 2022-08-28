import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Portal from './portal'
const style = {
  display : 'block',
  cursor:'pointer',
  width:'20px',
  height:'2px',
  marginTop:"3px",
  backgroundColor:'black',
}
const style2 = {
  cursor:'pointer',
}
const style3 = {
display:'none'}
function App() {
  const [open,setopen]=useState(false)

  return (
    <>
    <div onClick={()=>{setopen(true)}} style={open?style3:style2}>
      <span onClick={()=>setopen(true)} style={style}></span>
      <span onClick={()=>setopen(true)} style={style}></span>
      <span onClick={()=>setopen(true)} style={style}></span>
    </div>
      <Portal open={open} close={()=>setopen(false)} />
    </>
  )
}

export default App
