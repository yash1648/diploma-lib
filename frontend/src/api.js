export async function fetchHelloWorld() {
    try {
      const response = await fetch('/api/hello'); // Replace with your API URL
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.message; // Assuming API returns { message: "Hello, World!" }
    } catch (error) {
      console.error('Error fetching hello world:', error);
      throw error;
    }
  }