export const initialState = {
    note: null,
    playing: false,
    speaker: null,
    stage: null,
    toneModifier: 1,
    volumeModifier: 1,
};

export const reducer = (state, newState) => ({
    ...state,
    ...newState,
});
