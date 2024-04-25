import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    currentData:{
        boardDice:{
            um:[],
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
                }else if(action.payload.number=="tres"){
                    state.currentData.boardDice.tres.push(1)
                }else if(action.payload.number=="quatro"){
                    state.currentData.boardDice.quatro.push(1)
                }else if(action.payload.number=="cinco"){
                    state.currentData.boardDice.cinco.push(1)
                }else if(action.payload.number=="seis"){
                    state.currentData.boardDice.seis.push(1)
                }
                
            }else if(action.payload == "choice"){
                state.currentData.peopleChoice.push(1)
            }
        },
        deleteBar:(state,action)=>{
            if(action.payload.type == "dado"){
                if(action.payload.number == "um"){
                    state.currentData.boardDice.um.pop()
                }else if(action.payload.number== "dois"){
                    state.currentData.boardDice.dois.pop()
                }else if(action.payload.number== "tres"){
                    state.currentData.boardDice.tres.pop()
                }else if(action.payload.number== "quatro"){
                    state.currentData.boardDice.quatro.pop()
                }else if(action.payload.number== "cinco"){
                    state.currentData.boardDice.cinco.pop()
                }else if(action.payload.number== "seis"){
                    state.currentData.boardDice.seis.pop()
                }
                
            }else if(action.payload == "dado"){
                state.currentData.peopleChoice.um.pop()
            }
        },
        resetTable:(state,action)=>{
            if(action.payload == "dado"){
                state.currentData.boardDice.um = []
                state.currentData.boardDice.dois = []
                state.currentData.boardDice.tres = []
                state.currentData.boardDice.quatro = []
                state.currentData.boardDice.cinco = []
                state.currentData.boardDice.seis = []
            }
        }
    }
})

export const { addBar,deleteBar,resetTable} = dataSlice.actions;
export default dataSlice.reducer