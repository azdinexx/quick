import React from 'react';

function Row() {
  return (
    <tr className='text-center'>
      <td className='border-r p-2 border-stone-100'>image</td>
      <td className='border-r p-2 border-stone-100'>title</td>
      <td className='p-2'>price</td>
    </tr>
  );
}

export default Row;
