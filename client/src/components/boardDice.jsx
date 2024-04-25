import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBar, deleteBar, resetTable } from '../redux/dataSlice';



const BoardDice = () => {
    const {currentData} = useSelector((state)=>state.data)
    const [um,setUm] = useState([currentData.boardDice.um])
    console.log(um)
    const [dois,setDois] = useState([])
    const [tres,setTres] = useState([])
    const [quatro,setQuatro] = useState([])
    const [cinco,setCinco] = useState([])
    const [seis,setSeis] = useState([])
    const [escala,setEscala] = useState(28)
    const [update,setUpdate] = useState(false)
    const [looping,setLooping] = useState(false)
    const ref = useRef(false)
    const [height,setHeight] = useState(0)
    console.log(currentData)
    console.log(height)

    const dispatch = useDispatch()
    
    
    const add = (e)=>{
        if(e == 1){
            dispatch(addBar({type:"dado",number:"um"}))
        }else if(e==2){
            dispatch(addBar({type:"dado",number:"dois"}))
        }else if(e==3){
            dispatch(addBar({type:"dado",number:"tres"}))
        }else if(e==4){
            dispatch(addBar({type:"dado",number:"quatro"}))
        }else if(e==5){
            dispatch(addBar({type:"dado",number:"cinco"}))
        }else if(e==6){
            dispatch(addBar({type:"dado",number:"seis"}))
        }
    }
    const addRandomBar=()=>{
        let a =0
            const intervalId = setInterval(() => {
                if (a<=100) {
                    a++
                  const e = Math.floor(Math.random() * 6) + 1; // Generate random number between 1 and 6
                  let number;
                  switch (e) {
                    case 1:
                      number = "um";
                      setUm([...um,e])
                      break;
                    case 2:
                      number = "dois";
                      break;
                    case 3:
                      number = "tres";
                      break;
                    case 4:
                      number = "quatro";
                      break;
                    case 5:
                      number = "cinco";
                      break;
                    case 6:
                      number = "seis";
                      break;
                    default:
                      break;
                  }
                  dispatch(addBar({ type: "dado", number: number }));
                } else {
                  clearInterval(intervalId); // Stop the interval once condition is met
                }
              }, 10);


            // while (currentData.boardDice.um.length <= 25) {
            //     console.log(currentData.boardDice.um.length)
            //     let e = Math.floor(Math.random() * 6) + 1; // Generate random number between 1 and 6
            //     let number;
                
            //     switch (e) {
            //     case 1:
            //         number = "um";
            //         break;
            //     case 2:
            //         number = "dois";
            //         break;
            //     case 3:
            //         number = "tres";
            //         break;
            //     case 4:
            //         number = "quatro";
            //         break;
            //     case 5:
            //         number = "cinco";
            //         break;
            //     case 6:
            //         number = "seis";
            //         break;
            //     default:
            //         break;
            //     }
                
            //     dispatch(addBar({ type: "dado", number: number }));
            //     }
        
        
    }
    const barDelete = (e)=>{
        if(e == 1){
            dispatch(deleteBar({type:"dado",number:'um'}));
        }else if(e==2){
            dispatch(deleteBar({type:"dado",number:'dois'}));
        }else if(e==3){
            dispatch(deleteBar({type:"dado",number:'tres'}));
        }else if(e==4){
            dispatch(deleteBar({type:"dado",number:'quatro'}));
        }else if(e==5){
            dispatch(deleteBar({type:"dado",number:'cinco'}));
        }else if(e==6){
            dispatch(deleteBar({type:"dado",number:'seis'}));
        }
    }
    
    useEffect(()=>{
        if(ref.current==false){
            let a = document.getElementById("hReference1").offsetHeight
            console.log(a)
            setHeight(a/escala)
            for(let i=1;i<=escala;i++){
                const number = document.createElement('div')
                number.textContent = i
                let result = a/escala
                number.style.height = result+'px'
                number.classList = ` border border-black flex justify-center items-center font-bold text-lg line-height`
                document.querySelector('#escala1').appendChild(number)
            }
            setHeight(a/escala)
        }
        console.log(ref)
        ref.current = true
        
    },[escala]) 
    return (
        <div className='p-4 px-6 rounded-md bg-white h-[100%] w-1/2 flex flex-col'> 
            <header className='  text-2xl font-bold text-center h-[9%]'>
                Resultado dos dados de tabuleiro
            </header>
            
            <div id='hReference1' className='flex h-[88%]  '>
                <div id="escala1" className='h-full  w-[10%] flex flex-col-reverse'>
                    
                </div>
                <section className='flex w-[100%] h-full justify-between items-end pl-[6px] overflow-hidden'>
                    <div onClick={()=>barDelete(1)} className='h-full w-[16%] px-1 border border-black flex flex-col-reverse justify-start items-center text-xl font-bold'>
                        {/* <div className='w-full h-full bg-blue-700'>
                            
                        </div> */}
                        {currentData.boardDice.um && currentData.boardDice.um.map(()=>(
                            // <div className={`bg-blue-700 w-full h-[${height}px]`}>.</div>
                            <div style={{height: height+"px"} }className={`p-[1px] w-full`}>
                                <div className='w-full h-full bg-blue-700'></div>
                            </div>
                        ))}
                    </div>
                    <div onClick={()=>barDelete(2)} className='h-full w-[16%] px-1 border border-black flex flex-col-reverse justify-start items-center text-xl font-bold'>
                        {/* <div className='w-full h-full bg-blue-700'>
                            
                        </div> */}
                        {currentData.boardDice.dois && currentData.boardDice.dois.map(()=>(
                            // <div className={`bg-blue-700 w-full h-[${height}px]`}>.</div>
                            <div style={{height: height+"px"} }className={`p-[1px] w-full`}>
                                <div className='w-full h-full bg-blue-700'></div>
                            </div>
                        ))}
                    </div>
                    <div onClick={()=>barDelete(3)} className='h-full w-[16%] px-1 border border-black flex flex-col-reverse justify-start items-center text-xl font-bold'>
                        {/* <div className='w-full h-full bg-blue-700'>
                            
                        </div> */}
                        {currentData.boardDice.tres && currentData.boardDice.tres.map(()=>(
                            // <div className={`bg-blue-700 w-full h-[${height}px]`}>.</div>
                            <div style={{height: height+"px"} }className={`p-[1px] w-full`}>
                                <div className='w-full h-full bg-blue-700'></div>
                            </div>
                        ))}
                    </div>
                    <div onClick={()=>barDelete(4)} className='h-full w-[16%] px-1 border border-black flex flex-col-reverse justify-start items-center text-xl font-bold'>
                        {/* <div className='w-full h-full bg-blue-700'>
                            
                        </div> */}
                        {currentData.boardDice.quatro && currentData.boardDice.quatro.map(()=>(
                            // <div className={`bg-blue-700 w-full h-[${height}px]`}>.</div>
                            <div style={{height: height+"px"} }className={`p-[1px] w-full`}>
                                <div className='w-full h-full bg-blue-700'></div>
                            </div>
                        ))}
                    </div>
                    <div onClick={()=>barDelete(5)} className='h-full w-[16%] px-1 border border-black flex flex-col-reverse justify-start items-center text-xl font-bold'>
                        {/* <div className='w-full h-full bg-blue-700'>
                            
                        </div> */}
                        {currentData.boardDice.cinco && currentData.boardDice.cinco.map(()=>(
                            // <div className={`bg-blue-700 w-full h-[${height}px]`}>.</div>
                            <div style={{height: height+"px"} }className={`p-[1px] w-full`}>
                                <div className='w-full h-full bg-blue-700'></div>
                            </div>
                        ))}
                    </div>
                    <div onClick={()=>barDelete(6)} className='h-full w-[16%] px-1 border border-black flex flex-col-reverse justify-start items-center text-xl font-bold'>
                        {/* <div className='w-full h-full bg-blue-700'>
                            
                        </div> */}
                        {currentData.boardDice.seis && currentData.boardDice.seis.map(()=>(
                            // <div className={`bg-blue-700 w-full h-[${height}px]`}>.</div>
                            <div style={{height: height+"px"} }className={`p-[1px] w-full`}>
                                <div className='w-full h-full bg-blue-700'></div>
                            </div>
                        ))}
                    </div>

                   
                </section>
            </div>
            <div className='border border-black h-[7%] w-[90%] self-end flex justify-between mt-2'>
                <div onClick={(e)=>add(e.target.textContent)} className='h-full w-[16%] border border-black flex justify-center items-center text-xl font-bold cursor-pointer'>
                    1
                </div>
                <div onClick={(e)=>add(e.target.textContent)} className='h-full w-[16%] border border-black flex justify-center items-center text-xl font-bold cursor-pointer'>
                    2
                </div>
                <div  onClick={(e)=>add(e.target.textContent)} className='h-full w-[16%] border border-black flex justify-center items-center text-xl font-bold cursor-pointer'>
                    3
                </div>
                <div onClick={(e)=>add(e.target.textContent)} className='h-full w-[16%] border border-black flex justify-center items-center text-xl font-bold cursor-pointer'>
                    4
                </div>
                <div onClick={(e)=>add(e.target.textContent)} className='h-full w-[16%] border border-black flex justify-center items-center text-xl font-bold cursor-pointer'>
                    5
                </div>
                <div onClick={(e)=>add(e.target.textContent)} className='h-full w-[16%] border border-black flex justify-center items-center text-xl font-bold cursor-pointer'>
                    6
                </div>
                
            </div>
            
            <div className='absolute -bottom-14 left-0 flex gap-2'>
                <button onClick={()=>addRandomBar()} className='p-2 border border-gray-700 rounded-md bg-lime-600 text-white cursor-pointer hover:bg-opacity-80'>Resultado aleatorio</button>
                <button onClick={()=>dispatch(resetTable("dado"))} className='p-2 border border-gray-700 rounded-md bg-lime-600 text-white cursor-pointer hover:bg-opacity-80'>Resetar</button>
                <input type="number" placeholder='escala' className='border-black border rounded-md px-2 w-20'onChange={(e)=>(setEscala(e.target.value),ref.current=false)}/>
            </div>
            
        </div>
    );
};

export default BoardDice;