import React, {useState} from 'react';
import Languages from './Components/languages';
import './App.css';
import Field from './Components/field';
import Translate from './Components/translate';

const App = () => {
  const [language, setLanguage] = useState("es");
  const [text, setText] = useState("");
  return (
    <div className="App">
      <Field onChange={setText} />
      <Languages language={language} onLanguageChange={setLanguage} />
      <hr />
      <Translate text={text} language={language} />
    </div>
  );
}

export default App;
