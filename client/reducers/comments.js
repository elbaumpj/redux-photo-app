function postComments(state = [], action) {
    switch(action.type) {
        case 'ADD_COMMENT': 
            return [
                ...state,
                {
                    user: action.author,
                    text: action.comment
                }
            ]; 
        case 'REMOVE_COMMENT': 
            return [
                //from start to comment
                ...state.slice(0, action.i), 
                // and everything after the deleted comment
                ...state.slice(action.i + 1)
            ]
        default: 
            return state; 
    }
    return state; 
}

function comments(state = [], action) {
    if(typeof action.postId !== 'undefined') {
        return {
            // take current state
            ...state, 
            // but overwrite just this array of posts with a new one
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state;
}

export default comments; 