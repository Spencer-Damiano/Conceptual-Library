import React, { useEffect } from 'react';

const App: React.FC = () => {
  useEffect(() => {
    const fetchTestResult = async () => {
      try {
        const response = await fetch('/api/test/run');
        const data = await response.text();
        console.log("Test API:", data);  // Logs "Test Passed" or "Test Failed: ..." if successful
      } catch (error) {
        console.error('Error fetching test result:', error);
      }
    };

    const fetchHelloWorld = async () => {
      try {
        const response = await fetch('/api/helloworld/sayhello');
        const data = await response.text();
        console.log("HelloWorld API:", data);  // Logs "Hello, World!" if successful
      } catch (error) {
        console.error('Error fetching hello world:', error);
      }
    };

    fetchTestResult();
    fetchHelloWorld();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
      </header>
    </div>
  );
};

export default App;
