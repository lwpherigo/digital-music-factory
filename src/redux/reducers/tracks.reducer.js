const tracksReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_TRACKS':
            return action.payload;
        default:
            return state;
    }
};

export default tracksReducer;