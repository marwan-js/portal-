import React from 'react'
import {createPortal} from 'react-dom'
const style={
    width:'300px',
    height:'1000px',
    border:"1px solid transparent",
    zIndex:'700',
    position:'fixed',
    top:0,
    backgroundColor:'orange',
    color:'white',
    transition: 'width 2s, height 2s, transform 2s',
    borderRadius:'5px',
    margin:'10px',
    padding:'12px'
}
const styleClose1 = {
    display : 'block',
    cursor:'pointer',
    width:'20px',
    height:'2px',
    marginTop:"3px",
    backgroundColor:'black',
    transform: 'rotate(45deg)',
    }
const styleClose2 = {
        display : 'block',
        cursor:'pointer',
        width:'20px',
        height:'2px',
        marginTop:"3px",
        backgroundColor:'black',
        transform: 'rotate(-45deg)',
        position:'relative',
        top: '-4px',

        }
function Portal({open,close}) {
    if(!open) return null
    return createPortal(
        <div className='portal' style={style}>
            <div onClick={close} >
                <span style={styleClose1} ></span>
                <span style={styleClose2} ></span>
            </div>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aliquid doloribus rerum labore sapiente commodi maiores necessitatibus laudantium culpa molestiae adipisci repudiandae voluptatum architecto pariatur, qui odit nisi quas asperiores!</h3>
        </div>,
        document.getElementById('portal')
    )
}

export default Portal