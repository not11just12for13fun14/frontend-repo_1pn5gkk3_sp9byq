import { useState } from 'react';

const defaultValues = {
  from_date: '31AUG2019',
  to_date: '31JUL2019',
  lines: '6,17',
  country: 'SG',
};

export default function ParameterForm({ onSubmit, loading }) {
  const [values, setValues] = useState(defaultValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.from_date || !values.lines || !values.country) return;
    onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-1">
        <label className="text-sm font-medium text-gray-700">Report Date (DDMMMYYYY)</label>
        <input
          className="input"
          type="text"
          name="from_date"
          value={values.from_date}
          onChange={handleChange}
          required
          placeholder="31AUG2019"
        />
      </div>
      <div className="grid gap-1">
        <label className="text-sm font-medium text-gray-700">Previous Date (optional)</label>
        <input
          className="input"
          type="text"
          name="to_date"
          value={values.to_date}
          onChange={handleChange}
          placeholder="31JUL2019"
        />
      </div>
      <div className="grid gap-1">
        <label className="text-sm font-medium text-gray-700">LCR Lines (comma-separated)</label>
        <input
          className="input"
          type="text"
          name="lines"
          value={values.lines}
          onChange={handleChange}
          required
          placeholder="6,17"
        />
      </div>
      <div className="grid gap-1">
        <label className="text-sm font-medium text-gray-700">Country (ISO)</label>
        <input
          className="input"
          type="text"
          name="country"
          value={values.country}
          onChange={handleChange}
          required
          placeholder="SG"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="btn-primary"
      >
        {loading ? 'Running SAS...' : 'Run ETL'}
      </button>
    </form>
  );
}
