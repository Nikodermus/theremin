export const initialState = {
    audio: null,
    notes: [],
    playing: false,
    toneModifier: 1,
    volume: null,
    volumeModifier: 1,
};

export const reducer = (state, newState) => ({
    ...state,
    ...newState,
});
