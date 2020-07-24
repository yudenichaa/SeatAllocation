import { createSlice } from "@reduxjs/toolkit";
import { sectorSizes, emptyPlace } from "../../config";

const createSector = (rows, cols, value) => {
    return Array(rows).fill().map(() => Array(cols).fill(value));
};

const emptySectors = sectorSizes.map(sectorSize => {
    return createSector(sectorSize.rows, sectorSize.cols, emptyPlace);
});

const sectorsSlice = createSlice({
    name: "sectors",
    initialState: emptySectors,
    reducers: {
        setMembers(state, action) {
            const { sector, rowFrom, rowTo, placeFrom, placeTo, member, color } = action.payload;
            state[sector].slice(rowFrom, rowTo + 1)
                .forEach(row => row.fill({ member, color }, placeFrom, placeTo + 1));
        },
        setMember(state, action) {
            const { member, color, sector, row, place } = action.payload;
            state[sector][row][place] = { member, color };
        },
        updateMember(state, action) {
            const { oldMember, newMember, color } = action.payload;
            state.forEach(sector => sector.forEach(row => row.forEach((place, index) => {
                if (place.member == oldMember) row[index] = { member: newMember, color };
            })));
        },

        deleteMember(state, action) {
            const { member } = action.payload;
            state.forEach(sector => sector.forEach(row => row.forEach((place, index) => {
                if (place.member == member) row[index] = emptyPlace;
            })));
        },
        freePlaces(state, action) {
            const { sector, rowFrom, rowTo, placeFrom, placeTo } = action.payload;
            state[sector].slice(rowFrom, rowTo + 1)
                .forEach(row => row.fill(emptyPlace, placeFrom, placeTo + 1));
        },
        fillPlaces(state, action) {
            const { member, color } = action.payload;
            state.forEach(sector => sector.forEach(row => row.forEach((place, index) => {
                if (place.member == emptyPlace.member) row[index] = { member, color };
            })));
        },
        clearAll(state) {
            state.forEach(sector => sector.forEach(row => row.forEach((_, index) => {
                row[index] = emptyPlace;
            })));
        },
        loadSectorsData: (_, action) => action.payload.sectors,
    }
});

export const {
    setMembers,
    setMember,
    updateMember,
    deleteMember,
    freePlaces,
    fillPlaces,
    clearAll,
    loadSectorsData } = sectorsSlice.actions;
export default sectorsSlice.reducer;
