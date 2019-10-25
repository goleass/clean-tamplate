import { combineReducers } from 'redux' 
import { reducer as toastrReducer } from 'react-redux-toastr'

import DashboardReducer from './components/dashboard/dashboardReducer'

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  toastr: toastrReducer
})

export default rootReducer