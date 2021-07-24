const reducer = (state = '', action) => {
    switch(action.type) {
        case '>>':
            return action.value(state);
        case 'C':
         return   '';  
        case 'SYB':
            return state + action.value;
        case '=':           
          return   action.value(state);        
        default:
            state += action.value;
    } 
}

export default reducer;