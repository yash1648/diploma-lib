import React, { useEffect, useState } from 'react';
import { fetchHelloWorld } from './api'; // Adjust path if needed

function App() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    // Call the API when the component mounts
    fetchHelloWorld()
      .then((msg) => setMessage(msg))
      .catch((err) => setError('Failed to fetch message.'));
  }, []);

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <h1>{message || 'Loading...'}</h1>
    </div>
  );
}

export default App;
