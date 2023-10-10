import { Header } from "./components/Header";

import { Register } from "./pages/Register";
import { UserList } from "./pages/UserList";
import  {HeaderConfig}  from "./utils/config";

const App = () => {
  return (
    <div>
      <Header headerConfig ={HeaderConfig}/>
      <UserList/>
    </div>)
};

export default App;

