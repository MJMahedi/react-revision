import React, { createContext, useContext, useState } from 'react';
import Clouser from "./components/Clouser";
import Counter_Mine from "./components/Counter_Mine";
import CounterComponent from "./components/CounterComponent";
import Currying from "./components/Currying";
// import "./practice/practice";
// import "./practice/Closure/OuterInnerFunction";
// import "./practice/Closure/PrivateVariable";
// import "./practice/Closure/CountDownTimer"
// import "./practice/Currying/simpleCurrying";
// import "./practice/Currying/powerExponent"
import "./practice/Currying/discountCurrying"
import DigitalClock from './components/DigitalClock';
// Create a Context 
const UserContext = createContext();

// Provider Component 

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: '', isLoggedIn: false });

  const loginUser = (name) => {
    setUser({ name: name, isLoggedIn: true });
  }

  const logoutUser = () => {
    setUser({ name: '', isLoggedIn: false });
  }


  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

const UserProfile = () => {
  const { user, logoutUser, loginUser } = useContext(UserContext);
  return (
    <div className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... font-black text-center  m-10 p-10 rounded border-8 border-white-800'>
      <h1 className='text-3xl  font-semibold'>Name: {user.name || 'Guest'}</h1>

      <p>Status : {user.isLoggedIn ? 'logged In' : 'Logged Out'}</p>
      {user.isLoggedIn ? (
        <button
          className="bg-red-500 text-white py-2 px-4 rounded mt-4" onClick={logoutUser}>Log Out</button>) : (<button className="bg-green-500 text-white py-2 px-4 rounded mt-4" onClick={() => loginUser('MJ')}>Log In</button>)}


    </div>
  )
}

const App = () => (
  <UserProvider>
    <DigitalClock />
    <UserProfile />
    <Clouser></Clouser>
    {/* <CounterComponent></CounterComponent> */}
    <Counter_Mine></Counter_Mine>
    <Currying></Currying>
  </UserProvider>
)

// function App() {


//   //   // return (
//   //   //   <>
//   //   //     <div>
//   //   //       <h1 className="text-center text-3xl font-bold underline">React Revision</h1>






//   //   //       
//   //   //       
//   //   //        */}
//   //   //     </div>
//   //   //   </>
//   //   // )
// }





export default App
