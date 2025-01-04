import Clouser from "./components/Clouser";
import Counter_Mine from "./components/Counter_Mine";
import CounterComponent from "./components/CounterComponent";
// import "./practice/practice";
// import "./practice/Closure/OuterInnerFunction";
// import "./practice/Closure/PrivateVariable";
import "./practice/Closure/CountDownTimer"





function App() {
 

  return (
    <>
      <div>
        <h1 className="text-center text-3xl font-bold underline">React Revision</h1>
       
        <Clouser></Clouser>
        
        {/* <CounterComponent></CounterComponent> */}
        <Counter_Mine></Counter_Mine>
      </div>
    </>
  )
}

export default App
