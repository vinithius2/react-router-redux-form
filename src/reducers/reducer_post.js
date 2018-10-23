import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
        case DELETE_POST:
            return _.omit(sate, action.payload);
        case FETCH_POST:
            // const post = action.payload.data;
            // const newState = { ..state }
            // newState[post.id] = post;
            // return newSate;
            return {...state, [action.payload.data.id]: action.payload.data };
        case FETCH_POSTS:
            return _.mapKeys(actions.payload.data, 'id');
        default:
            return state;
    }
}