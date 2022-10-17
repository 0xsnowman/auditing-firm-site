import { combineReducers } from "redux";

import { ThemeReducer } from "./theme";
import { RequestAuditModalReducer } from "./requestAuditModal";

export default combineReducers({
  ThemeReducer,
  RequestAuditModalReducer,
});
