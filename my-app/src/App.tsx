
import './App.css';
import GetRequest from './axios/GetRequest';
import { User } from './context/User';
import { UserContextProvider } from './context/UserContext';
import { Timer } from './effect/Timer';
import Generics from './generics/Generics';
//import  Generics  from './generics/Generics';
import { Greet } from './props/Greet';
import { Person } from './props/Person';
import { PersonList } from './props/PersonList';
import Login from './useForm/UseForm';

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    }
  ]

  return (
    <div >
   <Login/>
    </div>

  );
}

export default App;
