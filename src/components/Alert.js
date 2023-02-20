import React from 'react'

function Alert(props) {
  return (

    //if props.alert =! null, evaluate the furthur statement
    <div style={{height : '50px'}}>
    {props.alert && <div className = {`alert alert-${props.alert.type} alert-dis}missible fade show`} role = "alert" >
        <strong>{(props.alert.type).toUpperCase()}</strong> : {props.alert.msg}
     </div>}
     </div>
  )
}
export default Alert
//CLS-->Cumulative Layout Shift should be as low as possible...google prefers ur website then