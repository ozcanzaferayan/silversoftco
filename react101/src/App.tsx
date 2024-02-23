import { useState } from "react";
import Sayfa1 from "./components/Sayfa1";
import SayfalamaButonları from "./components/SayfalamaButonları";

const App = () => {
  const [sayfa, setSayfa] = useState(Sayfa1);

  return (
    <div>
      <SayfalamaButonları setSayfa={setSayfa} />
      {sayfa}
    </div>
  );
};

export default App;
