import { useSetting } from "./context/SettingProvider";
import Setting from './components/Setting/Setting';
import Layout from './components/Layout/Layout';

function App() {
  const { showSettings } = useSetting();

  return showSettings ? <Setting /> : <Layout />;
}

export default App;
