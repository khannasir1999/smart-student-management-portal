const data = {
    userGet : "",
    
}
const reRenderReducer = (state = data, action) => {
    switch (action.type) {
        case "userGet":
            return {
                ...state,
                userGet : action.payload
            };
            
    
        default:
            return state
    }
}

export default reRenderReducer