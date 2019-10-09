import React from 'react'
import { Alert } from 'shards-react'

const AlertI = ({ show, text, theme, onClose }) => {
  if(show){
    return (
      <Alert dismissible onClose={onClose} theme={theme} onClose>
        {text}
      </Alert>
    )
  } 
  return <React.Fragment></React.Fragment>
}

export default AlertI