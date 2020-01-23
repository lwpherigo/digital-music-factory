const selectArtistReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_ARTIST':
            return action.payload;
        case 'DESELECT_ARTIST':
            return {};
        default:
            return state;
    }
};

export default selectArtistReducer;