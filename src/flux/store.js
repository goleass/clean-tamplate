import { EventEmitter } from "events";

import Dispatcher from "./dispatcher";
import Constants from "./constants";
import getSidebarNavItems from "../data/sidebar-nav-items";

let _store = {
  menuVisible: false,
  navItems: getSidebarNavItems(),
  showAlert: false,
  alertType: "",
  msg: ""
};

class Store extends EventEmitter {
  constructor() {
    super();

    this.registerToActions = this.registerToActions.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);

    Dispatcher.register(this.registerToActions.bind(this));
  }

  registerToActions({ actionType, payload }) {
    switch (actionType) {
      case Constants.TOGGLE_SIDEBAR:
        this.toggleSidebar();
        break;
      case Constants.SHOW_ALERT:
        switch (payload.type) {
          case "warning":
              this.setAlertType("warning")
            break;
          case "success":
              this.setAlertType("success")
            break;
          case "danger":
            this.setAlertType("danger")
            break;
          case "info":
            this.setAlertType("info")
            break;
          case "primary":
            this.setAlertType("primary")
            break;
          default:
            break;
        }
        this.setMsg(payload.err)
        this.showAlert()
        break;
      default:
    }
  }

  toggleSidebar() {
    _store.menuVisible = !_store.menuVisible;
    this.emit(Constants.CHANGE);
  }

  showAlert = () => {
    _store.showAlert = !_store.showAlert
    this.emit(Constants.CHANGE)
  }

  getAlertType = () => {
    return _store.alertType
  }

  setAlertType = type => {
    _store.alertType = type
    this.emit(Constants.CHANGE)
  }

  getMsg = () => {
    return _store.msg
  }

  setMsg = (msg) => {
    _store.msg = msg
    this.emit(Constants.CHANGE)
  }

  getAlertShow = () => {
    return _store.showAlert
  }

  getMenuState() {
    return _store.menuVisible;
  }

  getSidebarItems() {
    return _store.navItems;
  }

  addChangeListener(callback) {
    this.on(Constants.CHANGE, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(Constants.CHANGE, callback);
  }
}

export default new Store();
