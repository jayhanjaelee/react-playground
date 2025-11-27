import { Link, Outlet } from 'react-router';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="hover:text-gray-300 transition">
            Home
          </Link>
          <h1 className="text-xl font-bold">Playground</h1>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-100 border-r border-gray-200 p-4">
          <nav>
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Projects</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/playground/calculator"
                  className="block px-4 py-2 rounded hover:bg-gray-200 transition"
                >
                  Calculator
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        <p className="text-sm">© 2025 React Playground</p>
      </footer>
    </div>
  );
};

export default Layout;
