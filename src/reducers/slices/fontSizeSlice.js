import { createSlice } from "@reduxjs/toolkit";

const fontSizeSlice = createSlice({
    name: "fontSize",
    initialState: 0.65,
    reducers: {
        setFontSize: (_, action) => action.payload.fontSize,
    }
});

export const { setFontSize } = fontSizeSlice.actions;
export default fontSizeSlice.reducer;