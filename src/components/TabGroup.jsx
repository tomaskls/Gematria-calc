import PropTypes from 'prop-types';

export const TabGroup = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'hebrew', label: 'Hebrajų' },
    { id: 'english', label: 'Anglų' },
    { id: 'simple', label: 'Paprasta' }
  ];

  const getTabColor = (tabId) => 
    activeTab === tabId ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200';

  return (
    <div className="flex gap-3 mb-4">
      {tabs.map(tab => (
        <button 
          key={tab.id}
          className={`px-4 py-2 rounded-md ${getTabColor(tab.id)}`}
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