export const initialState = {
    notes: [],
    playing: false,
    audio: null,
    volume: null,
};

export const reducer = (state, newState) => ({
    ...state,
    ...newState,
});
