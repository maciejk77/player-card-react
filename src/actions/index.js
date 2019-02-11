import data from '../data/data.json'

export const fetchPlayerData = () => async dispatch => {
        const response = await data;
        dispatch({ 
            type: 'FETCH_PLAYER_DATA', 
            payload: response
    })
}