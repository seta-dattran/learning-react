export const ADD_USER =  'ADD_USER';
export const DEL_USER =  'DEL_USER';
export const EDIT_USER = 'EDIT_USER';
export const SEL_USER =  'SEL_USER';

export const addUser = username => ({
    type: ADD_USER,
    payload: {
        username
    }
})

export const delUser = username => ({
    type: DEL_USER,
    payload: {
        username
    }
})  

export const editUser = (name, newName) => ({
    type: EDIT_USER,
    payload: {
        name,
        newName
    }
})  

export const selUser = (username) => ({
    type: SEL_USER,
    payload: {    
        username
    }
})
