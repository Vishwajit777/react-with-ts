
import './App.css';
import { User } from './context/User';
import { UserContextProvider } from './context/UserContext';
import { Timer } from './effect/Timer';
import Generics from './generics/Generics';
//import  Generics  from './generics/Generics';
import { Greet } from './props/Greet';
import { Person } from './props/Person';
import { PersonList } from './props/PersonList';

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
    <div className="App">
      {/* Generics component
       In this example we have passed different types of data but typescript not showing error
      because of we have type as generic 
      */}
      <Generics data={personName} />
      <Generics data={[1, 2, 3, 4, 5, 6]} />
      <Generics data={10} />
      <Generics data="vishwajit" />
      <Generics data={true} />
      {/* End of generic component */}


      {/*Props components
    Passing different types of  Props */}
      <h2 className="text-primary">From Greet Component</h2>
      <Greet name='Vishwajit' messageCount={10} isLoggedIn={true} />
      <hr />
      <h2 className="text-primary"> From Person Component</h2>
      <Person name={personName} />
      <hr />
      <h2 className="text-primary">From PersonList Component</h2>
      <PersonList names={nameList} />
      <hr />
      {/*End of generics of props component */}
     
      {/* Context */}
      <h2 className="text-primary">Context </h2>
      <UserContextProvider>
        <User />
      </UserContextProvider>
     <hr/>
      {/* End of ontext */}

      {/* Effect */}
      <h2 className="text-primary">Effect </h2>
      <Timer />
      {/* End of Effect */}
    </div>

  );
}

export default App;
