import { Button } from "react-native";
import Sayfa1 from "./Sayfa1";
import Sayfa2 from "./Sayfa2";

type Props = {
  setSayfa: (sayfa: () => JSX.Element) => void;
};

const SayfalamaButonları = (props: Props) => {
  return (
    <>
      <Button onPress={() => props.setSayfa(Sayfa1)} title={"JS101'e git"} />
      <Button onPress={() => props.setSayfa(Sayfa2)} title={"React101'e git"} />
    </>
  );
};

export default SayfalamaButonları;
