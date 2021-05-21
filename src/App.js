import './App.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TranslatableTypeahead from './TranslatableTypeahead';
import { useRequest } from 'ahooks';

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchData() {
  const data = [
    "Item 1", "Item 2", "Item 3", "Item 4"
  ];

  await sleep(500);

  return data;
}


function App() {
  const { loading, run, data } = useRequest(fetchData);

  return (
    <TranslatableTypeahead 
      id="test"
      translate={{typeToSearch: "Warte auf Eingabe", searching: "Suchen...", noMatchesFound: "Keine Mitarbeiter gefunden."}}
      onSearch={run}
      isLoading={loading}
      options={data}
      minLength={0} />
  );
}

export default App;
