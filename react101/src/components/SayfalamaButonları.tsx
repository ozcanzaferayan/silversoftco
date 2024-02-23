import Sayfa1 from "./Sayfa1";
import Sayfa2 from "./Sayfa2";

type Props = {
  setSayfa: (sayfa: () => JSX.Element) => void;
};

const SayfalamaButonları = (props: Props) => {
  return (
    <>
      <button onClick={() => props.setSayfa(Sayfa1)}>JS101'e git</button>
      <button onClick={() => props.setSayfa(Sayfa2)}>React101'e git</button>
    </>
  );
};

export default SayfalamaButonları;
