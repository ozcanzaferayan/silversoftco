import { useState } from "react";
import { SafeAreaView } from "react-native";
import Sayfa1 from "./components/Sayfa1";
import SayfalamaButonları from "./components/SayfalamaButonları";

export default function App() {
  const [sayfa, setSayfa] = useState(Sayfa1);
  return (
    <SafeAreaView>
      <SayfalamaButonları setSayfa={setSayfa} />
      {sayfa}
    </SafeAreaView>
  );
}
