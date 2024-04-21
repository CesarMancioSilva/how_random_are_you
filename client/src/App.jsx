import React from 'react';
import PeopleChoose from './components/peopleChoose';
import BoardDice from './components/boardDice';

const App = () => {
  return (
    <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-8 h-[95%] w-[95%] '>
      <BoardDice/>
      <PeopleChoose/>
    </div>
  );
};

export default App; 