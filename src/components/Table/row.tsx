import React from 'react';

function Row() {
  return (
    <tr className='border-b '>
      <td className='min-w-[280px] border-x  bg-gray-100 p-3'>Hundai i10</td>

      {Array.from({ length: 7 }, (_, index) => {
        return <TD key={index} day={index + 1} />;
      })}
    </tr>
  );
}

export default Row;

function TD({ day }: { day: number }) {
  const today = new Date().getDay();

  return (
    <td
      className={`min-w-[150px] border-r ${day > today ? 'opacity-30' : ''}`}
      aria-disabled={day > today}
    >
      <select name='monday border bg-red-300' id='' disabled={day > today}>
        <option value=''>rented</option>
        <option value=''>idle</option>
        <option value=''>repair</option>
        <option value=''>booked</option>
      </select>
    </td>
  );
}
