//import * as actions from ''


const initialState = {
    messageVisibility: false,
};



const message = (state = initialState, action) => {
    switch(action.type){
        case 'TOGGLE_MESSAGE':
            return { 
                ...state,
                messageVisibility: !state.messageVisibility,
            }
        default:
            return state;
    }
};

export default message 