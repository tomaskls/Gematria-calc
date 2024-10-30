// HistoryPage.jsx
import { useHistory } from './useHistory';
import { HistorySection } from './HistorySection';

const HistoryPage = () => {
  const { history, clearHistory } = useHistory();

  return (
    <div className="min-w-2xl mx-auto my-5 p-5 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-5 text-gray-800">Gematria Istorija</h1>
      <HistorySection 
        history={history}
        clearHistory={clearHistory}
      />
    </div>
  );
};

export default HistoryPage;