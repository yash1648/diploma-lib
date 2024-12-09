import { useState, useEffect } from 'react';
import { fetchWelcomeMessage, createItem } from './api';

const App = () => {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState(null);

    useEffect(() => {
        const getMessage = async () => {
            const data = await fetchWelcomeMessage();
            setMessage(data.message);
        };
        getMessage();
    }, []);

    const handleCreateItem = async () => {
        const item = { name: 'Laptop', description: 'A powerful device', price: 1500 };
        const data = await createItem(item);
        setResponse(data);
    };

    return (
        <div>
            <h1>{message}</h1>
            <button onClick={handleCreateItem}>Create Item</button>
            {response && <p>{response.message}</p>}
        </div>
    );
};

export default App;
