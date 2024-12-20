import { combineReducers } from "@reduxjs/toolkit";
import { api } from "../../shared/api/api";

export const appReducer = combineReducers({
  [api.reducerPath]: api.reducer,
});
