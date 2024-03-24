let initialState = [];

export const mainReducer = (state = initialState,action) => {
  switch(action.type){
    case "allData":
        return [...state,action.payload];
        default:
            return state;
  }
}