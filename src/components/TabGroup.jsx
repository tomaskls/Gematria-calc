import PropTypes from 'prop-types';

export const TabGroup = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'ordinal', label: 'Ordinal' },
    { id: 'reduction', label: 'Reduction' },
    { id: 'reverse', label: 'Reverse' },
    { id: 'reverseReduction', label: 'Reverse Reduction' }
  ];

  const getTabColor = (tabId) => 
    activeTab === tabId ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200';

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {tabs.map(tab => (
        <button 
          key={tab.id}
          className={`px-4 py-2 rounded-md ${getTabColor(tab.id)} transition-colors`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

TabGroup.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired
};