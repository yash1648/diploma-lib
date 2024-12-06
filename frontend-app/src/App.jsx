import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
    const [message, setMessage] = useState('');
    const [responseData, setResponseData] = useState(null);

    useEffect(() => {
        // Fetch data from Flask API
        axios.get('http://127.0.0.1:5000/api/greet')
            .then(response => {
                setMessage(response.data.message);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const sendDataToFlask = () => {
        // Send POST request to Flask API
        axios.post('http://127.0.0.1:5000/api/data', { exampleKey: 'exampleValue' })
            .then(response => {
                setResponseData(response.data.received);
            })
            .catch(error => console.error('Error sending data:', error));
    };

    return (
        <div>
            <h1>{message}</h1>
            <button onClick={sendDataToFlask}>Send Data to Flask</button>
            {responseData && <pre>{JSON.stringify(responseData, null, 2)}</pre>}
        </div>
    );
};

export default App;
