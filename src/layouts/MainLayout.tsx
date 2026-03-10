import { NavLink, Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <div className="min-h-screen bg-green-50">
      <header className="sticky top-0 z-10 border-b border-green-100 bg-green-50/80 backdrop-blur-md">
        <div className="mx-auto max-w-5xl px-4 py-5 text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            <span className="mr-1 text-yellow-500">⚡</span> Pokédex
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Discover and explore Pokémon
          </p>
          <nav className="mt-4 flex justify-center gap-2">
            <NavLink
              to="/pagination"
              className={({ isActive }) =>
                `rounded-full border px-5 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "border-gray-900 bg-gray-900 text-white"
                    : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                }`
              }
            >
              Page Controls
            </NavLink>
            <NavLink
              to="/load-more"
              className={({ isActive }) =>
                `rounded-full border px-5 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "border-gray-900 bg-gray-900 text-white"
                    : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                }`
              }
            >
              Infinite Scroll
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}
