import React from 'react'

const Footer=()=>{
    let footerStyle={
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        height:"30px",
        backgroundColor:"#090514"
    }
    return (
        <>
        <br/><br/>
        <div className="text-light py-1" style={footerStyle}>
            <p className="text-center" style={{color:"gray"}}> &copy; ToDo App | Developer : Uttam Kumar</p>  
        </div>
        </>
    )
}

export default Footer