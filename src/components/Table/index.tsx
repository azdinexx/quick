import React from 'react';
import Row from './row';

function Table() {
  const today = new Date();
  console.log(today.getDay());
  console.log(today.getDate());
  return (
    <table className=' my-5 flex flex-col w-fit border-t rounded-xl'>
      <tr className='border-x  bg-gray-50 text-stone-600 rounded-t-xl overflow-hidden'>
        <th className='min-w-[280px] font-bold bg-white border-b'>car</th>
        {days.map((day, index) => {
          return (
            <th key={index} className=' border-b border-l  p-2 min-w-[150px]'>
              {day}
            </th>
          );
        })}
      </tr>
      <Row />
      <Row />
      <Row />
    </table>
  );
}

export default Table;

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
