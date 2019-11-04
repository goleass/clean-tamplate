import React from 'react'
import ReduxToastr from 'react-redux-toastr'
import 'react-redux-toastr/lib/css/react-redux-toastr-t.min.css'

export default props => (
  <ReduxToastr 
    timeOut={40000}
    preventDuplicates
    position="top-right"
    transitionIn="fadeIn"
    transitionOut="fadeOut"
    progressBar
  />
)