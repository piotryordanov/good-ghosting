import Fade from 'react-reveal/Fade';
import faq from '../copy/faq.json'

const listItems = faq.map((entry) =>
  <ul className="bg-white rounded-md shadow-xs p-4 my-4 text-gray-accent">
    <li className="font-bold text-xl mb-1" key={entry.question}>{entry.question}</li>
    <li className="text-lg" key={entry.answer} dangerouslySetInnerHTML={{ __html: entry.answer }} />
  </ul>
);
export default () => (
  <div id="faq" className="container">
    <div className="box w-full">
      <p className="text-4xl font-bold mb-8">Frequently Asked Question</p>
      {listItems}
    </div>
  </div>
);
