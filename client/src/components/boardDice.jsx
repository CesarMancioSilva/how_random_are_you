import React, { useEffect, useRef, useState } from 'react';



const BoardDice = () => {
    const [um,setUm] = useState([])
    const [dois,setDois] = useState([])
    const [tres,setTres] = useState([])
    const [quatro,setQuatro] = useState([])
    const [cinco,setCinco] = useState([])
    const [seis,setSeis] = useState([])
    const [escala,setEscala] = useState(25)
    const [update,setUpdate] = useState(false)
    const ref = useRef(false)
    const [height,setHeight] = useState(0)
    console.log(height)
    const numb = 100/escala
    
    const add = (e)=>{
        if(e == 1){
            setUm([...um,1])
        }else if(e==2){
            setDois([...dois,1])
        }else if(e==3){
            setTres([...tres,1])
        }else if(e==4){
            setQuatro([...quatro,1])
        }else if(e==5){
            setCinco([...cinco,1])
        }else if(e==6){
            setSeis([...seis,1])
        }
    }
    const barDelete = (e)=>{
        if(e == 1){
            const novoArray = um.slice(0, -1); 
            setUm(novoArray);
        }else if(e==2){
            const novoArray = dois.slice(0, -1); 
            setDois(novoArray);
        }else if(e==3){
            const novoArray = tres.slice(0, -1); 
            setTres(novoArray);
        }else if(e==4){
            const novoArray = quatro.slice(0, -1); 
            setQuatro(novoArray);
        }else if(e==5){
            const novoArray = cinco.slice(0, -1); 
            setCinco(novoArray);
        }else if(e==6){
            const novoArray = seis.slice(0, -1); 
            setSeis(novoArray);
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
        
    },[]) 
    return (
        <div className='p-4 px-6 rounded-md bg-white h-[100%] w-1/2 flex flex-col'> 
            <header className='  text-2xl font-bold text-center h-[9%]'>
                Resultado dos dados de tabuleiro
            </header>
            
            <div id='hReference1' className='flex h-[88%]  '>
                <div id="escala1" className='h-full  w-[10%] flex flex-col-reverse'>
                    
                </div>
                <section className='flex w-[100%] h-full justify-between items-end pl-[6px] '>
                    <div onClick={()=>barDelete(1)} className='h-full w-[16%] px-1 border border-black flex flex-col-reverse justify-start items-center text-xl font-bold'>
                        {/* <div className='w-full h-full bg-blue-700'>
                            
                        </div> */}
                        {um && um.map(()=>(
                            // <div className={`bg-blue-700 w-full h-[${height}px]`}>.</div>
                            <div style={{height: height+"px"} }className={`p-[1px] w-full`}>
                                <div className='w-full h-full bg-blue-700'></div>
                            </div>
                        ))}
                    </div>
                    <div onClick={()=>barDelete(2)} className='h-full w-[16%] px-1 border border-black flex flex-col-reverse justify-start items-center text-xl font-bold'>
                        {/* <div className='w-full h-full bg-blue-700'>
                            
                        </div> */}
                        {dois && dois.map(()=>(
                            // <div className={`bg-blue-700 w-full h-[${height}px]`}>.</div>
                            <div style={{height: height+"px"} }className={`p-[1px] w-full`}>
                                <div className='w-full h-full bg-blue-700'></div>
                            </div>
                        ))}
                    </div>
                    <div onClick={()=>barDelete(3)} className='h-full w-[16%] px-1 border border-black flex flex-col-reverse justify-start items-center text-xl font-bold'>
                        {/* <div className='w-full h-full bg-blue-700'>
                            
                        </div> */}
                        {tres && tres.map(()=>(
                            // <div className={`bg-blue-700 w-full h-[${height}px]`}>.</div>
                            <div style={{height: height+"px"} }className={`p-[1px] w-full`}>
                                <div className='w-full h-full bg-blue-700'></div>
                            </div>
                        ))}
                    </div>
                    <div onClick={()=>barDelete(4)} className='h-full w-[16%] px-1 border border-black flex flex-col-reverse justify-start items-center text-xl font-bold'>
                        {/* <div className='w-full h-full bg-blue-700'>
                            
                        </div> */}
                        {quatro && quatro.map(()=>(
                            // <div className={`bg-blue-700 w-full h-[${height}px]`}>.</div>
                            <div style={{height: height+"px"} }className={`p-[1px] w-full`}>
                                <div className='w-full h-full bg-blue-700'></div>
                            </div>
                        ))}
                    </div>
                    <div onClick={()=>barDelete(5)} className='h-full w-[16%] px-1 border border-black flex flex-col-reverse justify-start items-center text-xl font-bold'>
                        {/* <div className='w-full h-full bg-blue-700'>
                            
                        </div> */}
                        {cinco && cinco.map(()=>(
                            // <div className={`bg-blue-700 w-full h-[${height}px]`}>.</div>
                            <div style={{height: height+"px"} }className={`p-[1px] w-full`}>
                                <div className='w-full h-full bg-blue-700'></div>
                            </div>
                        ))}
                    </div>
                    <div onClick={()=>barDelete(6)} className='h-full w-[16%] px-1 border border-black flex flex-col-reverse justify-start items-center text-xl font-bold'>
                        {/* <div className='w-full h-full bg-blue-700'>
                            
                        </div> */}
                        {seis && seis.map(()=>(
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
            
             {/* <button onClick={()=>(
                setUm(prev => prev+1),
                view())
                }>add</button> */}
        </div>
    );
};

export default BoardDice;