import { useState } from "react";

const App = () => {
  const [sayfa, setSayfa] = useState(0);
  const hello = "<img src='#' onerror=alert(1) />";

  return (
    <div>
      <button onClick={() => setSayfa(0)}>JS101'e git</button>
      <button onClick={() => setSayfa(1)}>React101'e git</button>
      {sayfa === 0 && (
        <>
          <h1>JS101</h1>
          <p>JS101 içeriği</p>
        </>
      )}
      {sayfa === 1 && (
        <>
          <h1>React101</h1>
          <p>React 101 içeriği {hello}</p>
        </>
      )}
    </div>
  );
};

export default App;
