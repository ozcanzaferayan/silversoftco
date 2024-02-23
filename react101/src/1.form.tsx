import { useState } from "react";

// 1. Imperative yerine declarative kodlama
// 2. Değişken ismi yanlış yazıldığında hata gösteriyor
// 3. XSS gibi güvenlik açıklarını da engelliyor
const App = () => {
  const [isim, setIsim] = useState("Zafer");
  const [soyisim, setSoyisim] = useState("AYAN");

  function gonder() {
    document.write("Merhaba " + isim + " " + soyisim);
  }

  return (
    <div>
      <input
        type="text"
        name="isim"
        placeholder="isminiz"
        value={isim}
        onChange={(e) => {
          setIsim(e.target.value);
        }}
      />
      <input
        type="text"
        name="soyisim"
        placeholder="Soyisminiz"
        value={soyisim}
        onChange={(e) => {
          setSoyisim(e.target.value);
        }}
      />
      <button onClick={gonder}>Gönder</button>
    </div>
  );
};

export default App;
