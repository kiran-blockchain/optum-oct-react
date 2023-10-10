import { Header } from "./components/Header";
import { MemoDemo } from "./components/MemoDemo";

import { Register } from "./pages/Register";
import { UserList } from "./pages/UserList";
import  {HeaderConfig}  from "./utils/config";

const App = () => {
  return (
    <div>
      <Header headerConfig ={HeaderConfig}/>
      {/* <UserList/> */}
      <MemoDemo/>
    </div>)
};

export default App;

