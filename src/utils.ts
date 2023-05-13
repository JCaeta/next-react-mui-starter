
// export default function checkDevice(){
//     if(window.clientInformation.userAgentData.mobile){
//         if(window.innerHeight < window.innerWidth){
//             return "mobile-landscape";
//         } else {
//            return "mobile-portrait";
//         }
//     } 
//     return "desktop";
// }

// import { useEffect, useState } from 'react';

// export function checkDevice() {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       setIsMobile(width < 768); // Change 768 to whatever width you consider the breakpoint between mobile and desktop
//     };
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);
// }
// export function checkDevice(): string {
//     if(window.clientInformation.userAgentData.mobile){
//         if(window.innerHeight < window.innerWidth){
//             return "mobile-landscape";
//         } else {
//            return "mobile-portrait";
//         }
//     } 
//     return "desktop";
//   }