import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    currentData:{
        boardDice:{
            um:[1],
            dois:[],
            tres:[],
            quatro:[],
            cinco:[],
            seis:[]
        },
        peopleChoice:{
            um:[],
            dois:[],
            tres:[],
            quatro:[],
            cinco:[],
            seis:[]
        }
    },
};

const dataSlice = createSlice({
    name:'data',
    initialState,
    reducers:{
        addBar:(state,action)=>{
            if(action.payload.type == "dado"){
                if(action.payload.number=="um"){
                    state.currentData.boardDice.um.push(1)
                }else if(action.payload.number=="dois"){
                    state.currentData.boardDice.dois.push(1)
                }
                
            }else if(action.payload == "choice"){
                state.currentData.peopleChoice.push(1)
            }
        },
        deleteBar:(state,action)=>{
            if(action.payload.type == "dado"){
                state.currentData.boardDice.um.pop()
            }else if(action.payload == "dado"){
                state.currentData.peopleChoice.um.pop()
            }
        },
    }
})

export const { addBar,deleteBar,} = dataSlice.actions;
export default dataSlice.reducer