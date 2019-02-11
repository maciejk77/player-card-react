import { combineReducers } from 'redux';
import playerDataReducer from './playerDataReducer';

export default combineReducers({
    player: playerDataReducer
});