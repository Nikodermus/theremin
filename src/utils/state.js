export const initialState = {
    audio: null,
    playing: false,
    volume: null,
    volumeModifier: 1,
    toneModifier: 1,
};

export const reducer = (state, newState) => ({
    ...state,
    ...newState,
});
