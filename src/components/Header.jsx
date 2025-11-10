import { Server } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full border-b bg-white/70 backdrop-blur sticky top-0 z-20">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-blue-600 text-white grid place-items-center shadow">
            <Server size={20} />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-900">Viya JES Runner</h1>
            <p className="text-xs text-gray-500">Submit parameters and view resulting SAS dataset</p>
          </div>
        </div>
        <a
          href="#"
          className="text-sm text-blue-600 hover:text-blue-700 font-medium"
        >
          Help
        </a>
      </div>
    </header>
  );
}
