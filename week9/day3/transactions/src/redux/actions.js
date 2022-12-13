export const INSERT = 'INSERT'
export const UPDATE = 'UPDATE'
export const UPDATE_INDEX = 'UPDATE_INDEX'
export const DELETE = 'DELETE'

export const insert_trx = (trx) => {
  console.log(trx);
  return {
    type:INSERT,
    payload: trx
  }
}

export const update_index = (index) =>{
  return {
    type: UPDATE_INDEX,
    payload: index
  }
}

export const update_trx=trx=>{
  return{
    type:UPDATE,
    payload:trx
  }
}

export const delete_trx=(index)=>{
  return{
    type:DELETE,
    payload:index
  }
}