export default (state = [], action) => {
    switch(action.type) {
        case 'FETCH_PLAYER_DATA':
            return action.payload;
        default:
            return state;
    }
};