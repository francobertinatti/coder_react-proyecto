import React, { useState } from 'react';

const ItemCount = ({ onAdd, stock, initial }) => {
  const [count, setCount] = useState(initial);

  const onPlus = () => {
    if (count < stock) setCount(count + 1);
  };

  const onDecrement = () => {
    if (count > initial) setCount(count - 1);
  };

  return (
    // <div className='container'>
    //   <div className='row align-items-center p-2'>
    //     <div className='col-sm-2'>
    //       <button type='button' className='btn btn-secondary' onClick={onDecrement}>
    //         -
    //       </button>
    //     </div>
    //     <div className='col-sm-2'>
    //       <label className='d-flex justify-content-center'>{count}</label>
    //     </div>
    //     <div className='col-sm-2'>
    //       <button type='button' className='btn btn-secondary' onClick={onPlus}>
    //         +
    //       </button>
    //     </div>
    //     <div className='col-sm-6'>
    //       <button type='button' className='btn btn-secondary' onClick={() => onAdd(count)}>
    //         Añadir Carrito
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div className='d-flex align-items-center'>
      <button className='btn btn-secondary m-2' onClick={onDecrement}>
        -
      </button>
      <span className='mx-2 m-2'>{count}</span>
      <button className='btn btn-secondary m-2' onClick={onPlus}>
        +
      </button>
      <button className='btn btn-success ml-2' onClick={() => onAdd(count)}>
        Añadir al carrito
      </button>
    </div>
  );
};

export default ItemCount;

// ! Mi codigo, funciona
// const ItemCount = ({onAdd, stock, initial}) => {
//   const [count, setCount] = useState(1);

//   const sumarItem = () => {
//     console.log('suma 1');
//     setCount(count + 1);
//   };
//   const restarItem = () => {
//     console.log('resta 1');
//     if (count > 1) setCount(count - 1);
//   };

//   useEffect(() => {
//     // console.log('se monto el componente');
//   }, []);

//   return (
//     <div className='container'>
//       <div className='row '>
//         <button onClick={restarItem} className='col'>
//           -
//         </button>
//         <div className='col'>{count}</div>
//         <button onClick={sumarItem} className='col'>
//           +
//         </button>
//       </div>
//     </div>
//   );
// };
