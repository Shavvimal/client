// import React, { useEffect, useState, useRef } from "react"

// const Countdown = ({sec}) => {
    
//     let intervalRef = useRef(null);
//     const [seconds, setSeconds] = useState(sec);
 
//     const startCountdown = () => {
//         let test = seconds;
          
//         const id = setInterval(() =>{
//             --test
//             // console.log(test)
//             setSeconds(test);
//             // console.log(seconds)
//             if(test < 1){
//                 return clearInterval(intervalRef);
//             }
//         }, 1000);

//         intervalRef=id;
        
//     }
    
//     useEffect(() =>{
//         startCountdown();
//         return () => {
//             if(seconds < 1){
//                 console.log("here2")
//                 clearInterval(intervalRef);
//             }
//         }
//     }, []);

//     return(
//         <>
//             <h1>{seconds}</h1>
        
//         </>
//     ); 
// }

// export default Countdown;
