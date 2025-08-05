import { useState } from 'react';

function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div>
      <label>
        <input type="checkbox" onChange={handleChange} />
        Show message
      </label>

      {isChecked && <p>You have accepted the terms!</p>}
    </div>
  );
}

export default Checkbox
