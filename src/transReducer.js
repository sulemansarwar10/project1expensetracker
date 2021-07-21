


const TransactionReducer = (state, action) => {
    switch (action.type) {

         case "ADD": 
            return [action.payload, ...state]
            case "Delete":
                console.log(action.payload)
                console.log('hello reducer')
            return[state]
        
        default:
            return state;
    };
}
export default TransactionReducer;