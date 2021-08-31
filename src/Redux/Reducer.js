const initialState = [];

 const Add_Reducer =(state = initialState,action )=>{
    switch (action.type) {
        case "ADD_CONTACT" :
            state = [...state, action.payload] ;
        return state;
           
        case "UPDATE_CONTACT":
         const updatestate = state.map(contact => contact.id === action.payload.id  ? action.payload : contact);
         state = updatestate;
         return state;
          

         case "DELETE_CONTACT":
             
             const cons = state.filter(contact => contact.id !== action.payload && contact);
             state = cons;
              return state;
             default:
            return state;
            
    }

}

export  default Add_Reducer;