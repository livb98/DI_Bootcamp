import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapCard from './boostrap';
// import { planets } from './planet';

// // exercise1
// export const celebrities = [
//   {
//       title: 'Bob Dylan',
//       imageUrl: 'https://miro.medium.com/max/4800/1*_EDEWvWLREzlAvaQRfC_SQ.jpeg',
//       buttonLabel: 'Go to Wikipedia',
//       buttonUrl: 'https://en.wikipedia.org/wiki/Bob_Dylan',
//       description:
//           'Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.',
//   },
//   {
//       title: 'McCartney',
//       imageUrl:
//           'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg',
//       buttonLabel: 'Go to Wikipedia',
//       buttonUrl: 'https://en.wikipedia.org/wiki/Paul_McCartney',
//       description:
//           'Sir James Paul McCartney CH MBE (born 18 June 1942) is an English singer, songwriter, musician, composer, and record and film producer who gained worldwide fame as co-lead vocalist and bassist for the Beatles.',
//   },
// ]


// function App() {
//   return (
//     <div>
//       <BootstrapCard title = {celebrities[0].title}
//        imageUrl = {celebrities[0].imageUrl}
//        buttonLabel = {celebrities[0].buttonLabel}
//        buttonUrl = {celebrities[0].buttonUrl}
//        description = {celebrities[0].description}
//        />
//       <BootstrapCard title = {celebrities[1].title}
//        imageUrl = {celebrities[1].imageUrl}
//        buttonLabel = {celebrities[1].buttonLabel}
//        buttonUrl = {celebrities[1].buttonUrl}
//        description = {celebrities[1].description}
//        />
      
//     </div>
    
//   );
// }

// exercise2


export const planets = ['Mars','Venus','Jupiter','Earth','Saturn','Neptune' ];
function App() {
  return (<ul class="list-group">{planets.map((item, i) => (
    <li key={i} class="list-group-item" >{item}</li>
 ))}</ul>);
  
}


export default App;
