import { Text } from "react-native";
import { styles } from "./Stiller";

const Sayfa2 = () => {
  const hello = "<img src='#' onerror=alert(1) />";

  return (
    <>
      <Text style={styles.header}>React101</Text>
      <Text style={styles.text}>React 101 içeriği {hello}</Text>
    </>
  );
};

export default Sayfa2;
