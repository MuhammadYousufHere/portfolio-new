// import { useState } from 'react';

// const Pill = ({ text, onClick, clicked, setClicked, state }) => {
//    const click = () => {
//       setClicked(!clicked);
//       onClick();
//    };
//    return (
//       <li
//          style={{
//             color: clicked && state == text && 'black',
//             backgroundColor: clicked && state == text && 'white',
//          }}
//          onClick={click}
//          className={styles.pill}
//       >
//          {text}
//       </li>
//    );
// };
// .pill {
//     display: inline-flex;
//     border: 1px solid #fff;
//     color: white;
//     font-size: calc(1.3125rem + .75vw);
//     border-radius: 36px;
//     padding: 14px 20px;
//     margin-bottom: 20px;
//     margin-right: 15px;
//     line-height: 1.1;
//     letter-spacing: -.03em;
//     cursor: pointer;
// }

// .pill:hover {
//     background-color: #fff;
//     color: black;
// }
// export default Pill;
