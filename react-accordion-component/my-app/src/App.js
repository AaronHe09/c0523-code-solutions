import logo from './logo.svg';
import './App.css';
import Accordion from './Accordion';

const topics = [
  {
    topic: 'Hypertext Markup Language',
    definition:
      'Hypertext Markup Language (HTML) is the standard markup langugage for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web',
  },
  {
    topic: 'Cascading Style Sheets',
    definition:
      'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. Css is a cornerstone technology of the World Wide Web alongside HTML and JavaScript.',
  },
  {
    topic: 'JavaScript',
    definition:
      'JavaScript, often abbreviated as JS, is a high-level interpreted programming langugage that conforms to the ECMAScript specifications. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-oreintation and first-class functions.',
  },
];

function App() {
  return (
    <div className="App">
      <Accordion topics={topics} />
    </div>
  );
}

export default App;
