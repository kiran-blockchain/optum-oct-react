import { Header } from "./components/Header";
import { Register } from "./pages/Register";
import  {HeaderConfig}  from "./utils/config";

const App = () => {
  return (
    <div>
      <Header headerConfig ={HeaderConfig}/>
      <Register/>
    </div>)
};

export default App;

