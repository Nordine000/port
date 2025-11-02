import React from 'react';

function MultiCheckboxSelector({ label, options, selectedItems, setSelectedItems }) {
  const handleChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedItems([...selectedItems, value]);
    } else {
      setSelectedItems(selectedItems.filter((s) => s !== value));
    }
  };

  return (
    <div>
        <p>{label}</p>
      {options.map((options) => (
        <label key={options} style={{ display: 'block' }}>
          <input
            type="checkbox"
            value={options}
            checked={selectedItems.includes(options)}
            onChange={handleChange}
          />
          {options}
        </label>
      ))}
    </div>
  );
}

export default MultiCheckboxSelector;
