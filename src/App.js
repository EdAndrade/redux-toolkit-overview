import './App.css';
import { IcecreamView } from './features/icecream/IcecreamView';
import { UserView } from './features/user/UserView';
import { CakeView } from './features/cake/CakeView';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CakeView/>
        <IcecreamView/>
        <UserView/>
      </header>
    </div>
  );
}

export default App;
