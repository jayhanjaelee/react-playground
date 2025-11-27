import { Link } from 'react-router';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-8 text-gray-800">React Playground</h1>
        <p className="text-gray-600 mb-6">Welcome to the React Playground</p>
        <Link
          to="/playground"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Go to Playground
        </Link>
      </div>
    </div>
  );
}

export default App;
