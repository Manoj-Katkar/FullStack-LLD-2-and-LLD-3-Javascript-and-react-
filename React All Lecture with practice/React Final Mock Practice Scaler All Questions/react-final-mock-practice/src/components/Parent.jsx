// import React, { useState } from 'react'
// import Child from './Child';

// const Parent = () => {

//     const [count , setCount] = useState(0);

//   return (
//     // Write a Parent, Child component such that child displays received props.

//     <div>
//         Parent
//         <br />
//         <h3>count : {count}</h3>

//         <Child name="Manoj" count={count} setCount={setCount}/>
//     </div>
//   )
// }

// export default Parent








// !implementation of the useMemo() hook

// import React, { useMemo, useState } from 'react'

// const Parent = () => {
//   let [count , setCount] = useState(0);

//   let [dark , setDark] = useState(false);

//   //!this is the use of the useMemo() hook in react
//   let doubleNumberOfCount = useMemo(() => {
//       return slowerFunction(count);
//   } , [count]);

//   return (
//     <div>
//       <input
//       type="number"
//       name='number'
//       id='number'
//       value={count}
//       onChange={(event) => {
//         setCount(event.target.value);
//       }}
//       />

//       <button onClick={(event) => {
//         setDark((previousValue) => !previousValue)
//       }}>Change Color</button>

//       <h1
//           style={{
//             background:dark? "black" : "white",
//             color:dark? "white" : "black",
//           }}
//           >
//         {doubleNumberOfCount}
//       </h1>
//     </div>
//   )
// }

// export default Parent

// function slowerFunction(number){
//     for(let i = 0 ; i <= 100000000; i++){
//       //just take the time and then return the some doubled value
//     }

//     return (number*2);

// }







// !==================================== useCallback() hook used for the performance optimization =====================


// ^useCallback() hook used for the performance optimization while rendering the differant components
// ^useMemo() hook is used for the performance optimization with-in the that particular component if it is having some slower functions then use useMemo()

// ^react.memo: react.memo is a higher-order component that memoizes a functional component based on its props. It prevents unnecessary re-renders by comparing the previous and current props. 

/**
    * useMemo: return memoize value .
      useCallback:  return Memoizes a function.
      React.memo: it Memoizes a component.
 */

// import React, { useCallback, useState } from 'react'
// import Counter from './Counter.jsx';
// import Button from './Button.jsx';


// const Parent = () => {
//   // lets take the few state
//   let [age , setAge] = useState(25);
//   let [salary , setSalary] = useState(25000);

//   //old functions which was rendering the all components again and again if I change salary then age vala also get re-render and vice versa

//   // let IncrementAge =() => {
//   //   setAge((previousAge) => {
//   //     return previousAge + 1
//   //   }
//   // )}

//   // let IncrementSalary = () => {
//   //   setSalary((previousSalary) => {
//   //     return previousSalary + 10000;
//   //   }
//   // )}

//   // !taking the new functions wit useCallback() hook
//   let IncrementAge = useCallback(() => {
//     setAge((previousAge) => {
//       return previousAge + 1
//     })
//   } , [age])

//   let IncrementSalary = useCallback(() => {
//     setSalary((previousSalary) => {
//       return previousSalary + 10000;
//     })
//   } , [salary])

//   return (
//     <div>

//       <Counter text="age" count={age}/>
//       <Button handleClick={IncrementAge}>Increment Age</Button>
//       <Counter text="salary" count={salary}/>
//       <Button handleClick={IncrementSalary}>Increment Salary</Button>

//     </div>
//   )
// }

// export default Parent






// !Write a custom hook to fetch data.


import React, { useEffect, useState } from 'react'
import useFetchData from '../customHooks/useFetchData';

const Parent = () => {

  const fetchedData = useFetchData("https://fakestoreapi.com/products/");  //like this way you can pass the url 

  const [data , setData] = useState([]);


  useEffect(() => {
    
    if(fetchedData.length > 0){
      // then I have to update the state 
      setData(fetchedData);
    }
  } , [fetchedData]);




  

  return (
    <div className="parent-container">
      
        {data.map((currentProduct , index) => {
          return (
            <ul key={index}>
             <li>{currentProduct.id}</li>
             <li>{currentProduct.title}</li>
            </ul>
          )
        })}
      
    </div>
  )
}

export default Parent

















