import React from 'react';
import PeopleChoose from './components/peopleChoose';
import BoardDice from './components/boardDice';
import { useSelector } from 'react-redux';

const App = () => {
  const {currentData} = useSelector((state)=>state.data)
  console.log(currentData)
  return (
    <div className='absolute left-1/2 top-[45%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2 items-start justify-start h-[80%] w-[95%] '>
      <div className='flex gap-8 h-full w-full'>
        <BoardDice/>
        <PeopleChoose/>
      </div>
      
      
    </div>
  );
};

export default App; 