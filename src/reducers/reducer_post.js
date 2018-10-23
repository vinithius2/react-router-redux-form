import _ from 'lodash';
import { FECTH_POSTS, FECTH_POST, DELETE_POST } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
        case DELETE_POST:
            return _.omit(state, action.payload);
        case FECTH_POST:
            // const post = action.payload.data;
            // const newState = { ..state }
            // newState[post.id] = post;
            // return newSate;
            return {...state, [action.payload.data.id]: action.payload.data };
        case FECTH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}
