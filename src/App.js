import logo from './logo.svg';
import './App.css';
import StateHook from './statehook';
import EffectHook from './effecthook';
import ReducerHook from './reducerhook';
import ContextHook from './contexthook';
import RefHook from './refhook';
import MemoHook from './memohook';
import CallbackHook from './callbackhook';
function App() {
  return (
    <div className="App" >
      <header className="App-header">
        <div style={{display:"flex"}}>
       <StateHook></StateHook>
       <EffectHook></EffectHook>
       <ReducerHook></ReducerHook>
       <ContextHook></ContextHook>
       <RefHook></RefHook>
       <MemoHook></MemoHook>
       <CallbackHook></CallbackHook>
       </div>
      </header>
    </div>
  );
}

export default App;
