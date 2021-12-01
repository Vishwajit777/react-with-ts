
import './App.css';
import { User } from './context/User';
import { UserContextProvider } from './context/UserContext';
import { Timer } from './effect/Timer';
import { GenericMain } from './generics/GenericMain';
import { PropsMain } from './props/PropsMain';
import Routing from './routing/Routing';
import { UseRef } from './useRef/UseRef';
import UseStateHook from './useState/UseStateHook';

function App() {


  return (
    <div >
   {/* Routing */}
        <Routing />
      <hr />
      {/* End of Routing */}
    
    <div className="App">
      <GenericMain />
      <hr />

      <PropsMain />
      <hr />  
     
      {/* Context */}
      <h2 className="text-success">Context </h2>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <hr />
      {/* End of ontext */}
     
    
      {/* Effect */}
      <h2 className="text-success">Effect </h2>
      <Timer />
      {/* End of Effect */}

      <hr />

       {/* UseStateHook */}
       <h2 className="text-success">UseStateHook </h2>
      <UseStateHook />
      {/* End of UseStateHook */}

      <hr />

      {/* UseRef */}
      <h2 className="text-success">UseRef </h2>
      <UseRef />
      {/* End of UseRef */}
      <hr />
    </div>
    </div>

  );
}

export default App;
