import React from 'react'

const Footer = () => {

    const style = {
        backgroundColor: "#F8F8F8",
        borderTop: "1px solid #E7E7E7",
        textAlign: "center",
        padding: "20px",
        position: "fixed",
        left: "0",
        bottom: "0",
        height: "60px",
        width: "100%"
      };

  return (
    <div className= "col">
    <div className="row bg-dark text-light justify-content-center" style={style}>
        Copyright Roberto Lopez
    </div>
    </div>
  )
}

export default Footer