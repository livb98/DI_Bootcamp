import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Greeting from './component/Greeting';
import Counter from './component/Counter';
import UserCard from './component/UserCards';
import Fetch from './component/Fetch';

function App() {
  const user = {
    name: "David",
    age: 23,
  };

  return (
    <>
      <header>Exercise XP</header>
      {/* exercise2 */}
      <Greeting name={"John"} />
      {/* exercise3 */}
      <Counter />
      {/* exercise4 */}
      <UserCard user={user} />
      {/* exercise5 */}
      <Fetch/>

    </>
  );
}

export default App;
