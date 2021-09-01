
const TransactionReducer = (state, action) => {
    switch (action.type) {

         case "ADD": 
            return [action.payload, ...state]
            case "Delete":
                let del =state[action.payload]
                console.log(action.payload)
                let arr=state.filter(obj => obj!==del)
                console.log('hello reducer',state,del,arr)

            return arr
        
        default:
            return state;
    };
}
export default TransactionReducer;