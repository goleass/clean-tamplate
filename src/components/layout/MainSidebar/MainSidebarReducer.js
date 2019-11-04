import getSidebarNavItems from "../../../data/sidebar-nav-items";

const defaultState = { navItems: getSidebarNavItems() }

export default function(state = defaultState, action) {
    switch (action.type) {
        case 'GET_NAV_ITEMS':
            return { ...state, state }
        default:
            return state
    }
}