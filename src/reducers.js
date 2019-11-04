import { combineReducers } from 'redux' 
import { reducer as toastrReducer } from 'react-redux-toastr'

import MainSidebarReducer from "./components/layout/MainSidebar/MainSidebarReducer";
import DashboardReducer from './components/dashboard/dashboardReducer'

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  toastr: toastrReducer,
  menuVisible: false,
  sidebar: MainSidebarReducer
})

export default rootReducer