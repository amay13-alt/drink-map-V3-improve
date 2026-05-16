import React from 'react';

function DropdownFilter({ label, options = [], value, onSelectChange, language }) {
  return (
    <div className="filter-field-modern">
      <label>{label}</label>
      <select value={value} onChange={(e) => onSelectChange(e.target.value)}>
        {options.map((opt, index) => {
          if (!opt) return null;
          return (
            <option key={index} value={opt.value}>
              {language === 'zh' ? opt.labelZh : opt.labelEn}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default DropdownFilter;