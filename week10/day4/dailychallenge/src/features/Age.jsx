// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { ageDownAsync, ageUpAsync } from './ageSlice';

// const Age = () => {
//   const age = useSelector((state) => state.ageReducer.age);
//   const loading = useSelector((state) => state.ageReducer.loading);
//   const dispatch = useDispatch();

//   return (
//     <>
//       <h1>Age Counter</h1>
//       <div>
//         <h2>Age: {loading ? 'Loading...' : age}</h2>
//         <button onClick={() => dispatch(ageUpAsync())} disabled={loading}>
//           Increment
//         </button>
//         <button onClick={() => dispatch(ageDownAsync())} disabled={loading}>
//           Decrement
//         </button>
//       </div>
//     </>
//   );
// };

// export default Age;
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ageDownAsync, ageUpAsync } from './ageSlice';
import reactLogo from '../assets/react.svg'

const Age = () => {
  const age = useSelector((state) => state.ageReducer.age);
  const loading = useSelector((state) => state.ageReducer.loading);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Age Counter</h1>
      <div>
        {loading ?         <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> : <h2>Age: {age}</h2>}
        <button onClick={() => dispatch(ageUpAsync())} disabled={loading}>
          Increment
        </button>
        <button onClick={() => dispatch(ageDownAsync())} disabled={loading}>
          Decrement
        </button>
      </div>
    </>
  );
};

export default Age;
