 export const addAction= (data)=>{
    return{
        type : "ADD_CONTACT",
        payload : data,
    };
}

 export  const addUpdate = (data)=>{
    return{
        type : "UPDATE_CONTACT",
        payload : data
    }
}

 export  const deleteAction= (id)=>{
  
    return{
    type  : "DELETE_CONTACT",
    payload : id
    }
 }

 