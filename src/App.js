import '../src/css/App.css'
import { CalcBody } from './components/CalcBody';
import KeyState from './context/KeyState';
function App() {
  return (
    <div className="App">
      <KeyState >
        <div className="skeleton">
          <CalcBody/>
        </div>
      </KeyState>
    </div>
  );
}

export default App;
