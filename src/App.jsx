import { useState } from 'react';
import Header from './components/Header';
import ParameterForm from './components/ParameterForm';
import ResultTable from './components/ResultTable';
import StatusBar from './components/StatusBar';

function App() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ state: 'idle', message: 'Waiting for input' });
  const [data, setData] = useState([]);

  const backendUrl = import.meta.env.VITE_BACKEND_URL || '';

  const runJob = async (params) => {
    setLoading(true);
    setStatus({ state: 'loading', message: 'Submitting job to SAS Viya...' });
    setData([]);

    try {
      const res = await fetch(`${backendUrl}/run`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      const json = await res.json();
      setData(json.rows || []);
      setStatus({ state: 'success', message: 'ETL completed successfully' });
    } catch (err) {
      console.error(err);
      setStatus({ state: 'error', message: 'Failed to run job' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-indigo-50 text-slate-900">
      <Header />

      <main className="mx-auto max-w-6xl px-4 py-8 grid gap-6 md:grid-cols-3">
        <section className="md:col-span-1">
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Parameters</h2>
            <ParameterForm onSubmit={runJob} loading={loading} />
            <div className="mt-4">
              <StatusBar status={status} />
            </div>
          </div>
        </section>

        <section className="md:col-span-2">
          <h2 className="sr-only">Output</h2>
          <ResultTable data={data} />
        </section>
      </main>

      <style>{`
        .input { @apply w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500; }
        .btn-primary { @apply inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-700 disabled:opacity-60; }
      `}</style>
    </div>
  );
}

export default App;
