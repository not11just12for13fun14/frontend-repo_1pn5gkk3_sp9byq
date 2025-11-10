import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

export default function StatusBar({ status }) {
  const { state, message } = status || { state: 'idle', message: 'Idle' };
  const color = state === 'success' ? 'text-green-600' : state === 'error' ? 'text-red-600' : state === 'loading' ? 'text-blue-600' : 'text-gray-600';
  const Icon = state === 'success' ? CheckCircle2 : state === 'error' ? AlertCircle : state === 'loading' ? Loader2 : CheckCircle2;

  return (
    <div className={`flex items-center gap-2 text-sm ${color}`}>
      <Icon className={state === 'loading' ? 'animate-spin' : ''} size={16} />
      <span>{message}</span>
    </div>
  );
}
