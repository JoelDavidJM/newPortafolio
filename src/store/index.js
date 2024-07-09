import { configureStore } from "@reduxjs/toolkit";
import change from './states/changeStates'

export default configureStore({
    reducer: {
        change
    }
})