import './App.css';
import Form from './Components/Form';
function App() {
  const [activeTab,setActiveTab]=useState("Home")
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
