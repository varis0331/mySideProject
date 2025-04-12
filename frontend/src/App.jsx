import React, { useEffect, useState } from 'react';

const App = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:3000') // 後端伺服器地址
            .then(response => response.text())
            .then(data => setMessage(data));
    }, []);

    return <div>{message}</div>;
};

export default App;
