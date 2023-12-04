import React from 'react';
import Row from './Row';

export default function CarTable() {
  return (
    <table className='text-stone-700  bg-white'>
      <tr className='border-b border-stone-100 text-gray-800'>
        <th className='p-2 bg-stone-100/30'>image</th>
        <th className='p-2'>title</th>
        <th className='p-2'>price</th>
      </tr>
      <Row />
      <Row />
      <Row />
    </table>
  );
}
