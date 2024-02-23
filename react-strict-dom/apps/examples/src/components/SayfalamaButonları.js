import { html } from 'react-strict-dom';
import Sayfa1 from './Sayfa1';
import Sayfa2 from './Sayfa2';

const SayfalamaButonları = (props) => {
  return (
    <>
      <html.button
        style={{ fontSize: 24 }}
        onClick={() => props.setSayfa(Sayfa1)}
      >
        JS101'e git
      </html.button>
      <html.button
        style={{ fontSize: 24 }}
        onClick={() => props.setSayfa(Sayfa2)}
      >
        React101'e git
      </html.button
    </>
  );
};

export default SayfalamaButonları;
