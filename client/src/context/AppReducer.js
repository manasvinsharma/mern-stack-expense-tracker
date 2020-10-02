// reducer is used to change the state

export default (state, action) => {
  switch(action.type) {
    case 'GET_TRANSACTIONS':
      return {
        ...state,
        loading:false,
        transactions:action.payload
      }
    case 'TRANSACTION_ERROR':
      return {
        ...state,
        error:action.payload
      }
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
      }
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [...state.transactions,action.payload]
      }
    default: // default case mtlb kuch change nhi krna state me ,return krdo same state
      return state;
  }
}