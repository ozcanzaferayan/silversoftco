import React, { useState } from 'react';
import { css, html } from 'react-strict-dom';
import Sayfa1 from './components/Sayfa1';
import SayfalamaButonları from './components/SayfalamaButonları';

const egStyles = css.create({
  safearea: {
    paddingBottom: 50,
    paddingTop: 50,
    backgroundColor: 'white'
  }
});

const App = () => {
  const [sayfa, setSayfa] = useState(Sayfa1);

  return (
    <html.div style={egStyles.safearea}>
      <SayfalamaButonları setSayfa={setSayfa} />
      {sayfa}
    </html.div>
  );
};

export default App;
