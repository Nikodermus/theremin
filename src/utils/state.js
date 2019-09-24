export const initialState = {
    audio: null,
    notesInner: [],
    playing: false,
    toneModifier: 1,
    volume: null,
    volumeModifier: 1,
};

export const reducer = (state, newState) => ({
    ...state,
    ...newState,
});

export const setInRange = (val, min = 0, max = 100) =>
    Math.max(Math.min(max, val), min);
