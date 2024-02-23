const Sayfa2 = () => {
  const hello = "<img src='#' onerror=alert(1) />";

  return (
    <>
      <h1>React101</h1>
      <p>React 101 içeriği {hello}</p>
    </>
  );
};

export default Sayfa2;
