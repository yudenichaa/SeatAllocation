import { combineReducers } from "redux";
import sectorsReducer from "./slices/sectorsSlice";
import fontSizeReducer from "./slices/fontSizeSlice";

export default combineReducers({
    sectors: sectorsReducer,
    fontSize: fontSizeReducer
});