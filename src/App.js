import { useEffect, useState } from 'react';
import './App.css'
import { fetchData } from './lib/Quotes';

function App() {
  const [quote, setQuote] = useState();

  useEffect(() => {
    fetchData().then((res) => setQuote(res))
  }, [])

  const refetchData = () => {
    fetchData().then((res) => setQuote(res))
  }

  return (
    <div className='app'>
      <div className='group'>
        <div className="container">
          {quote ? (
            <>
              <p>{quote.quote}</p>
              <span>- {quote.author}</span>
            </>
          ) : (
            <p> Loading...</p>
          )}
        </div>
        <button onClick={() => { refetchData() }}>Generate new quote</button>
      </div>
    </div >
  );
}

export default App;
