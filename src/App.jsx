import Counter from './components/Counter';
import SearchForm from './components/SearchForm';
import GenreSelect from './components/GenreSelect';

function App() {
  const defaultCounterValue = 10;

  const defaultSearchQuery = 'Default movie name';
  function onSearch(searchQuery) {
    console.log('[you just searched mvoie] : ', searchQuery);
  }

  const defaultGenre = { id: '13a5fee2-47e2-11ee-be56-0242ac120002', name: 'comedy' };
  const genresList = [
    { id: '13a5fa3c-47e2-11ee-be56-0242ac120002', name: 'all' },
    { id: '13a5fd16-47e2-11ee-be56-0242ac120002', name: 'documentary' },
    { id: '13a5fee2-47e2-11ee-be56-0242ac120002', name: 'comedy' },
    { id: '13a60036-47e2-11ee-be56-0242ac120002', name: 'horror' },
    { id: '13a6063a-47e2-11ee-be56-0242ac120002', name: 'crime' }
  ];
  function onSelect(genre) {
    console.log('[you just select genre] : ', genre);
  }

  return (
    <>
      <Counter value={defaultCounterValue} />
      <SearchForm defaultSearchQuery={defaultSearchQuery} onSearch={onSearch} />
      <GenreSelect genres={genresList} genre={defaultGenre} onSelect={onSelect} />
    </>
  );
}

export default App;
