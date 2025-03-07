import { useState, useEffect } from "react";
import axios from "axios";

const DropdownWithCustom = () => {
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState("");
  const [customValue, setCustomValue] = useState("");
  const [isCustom, setIsCustom] = useState(false);

  useEffect(() => {
    // Fetch data from backend API using axios
    axios.get("http://localhost:3000/auth/get-college")
      .then((response) => setOptions(response.data))
      .catch((error) => console.error("Error fetching options:", error));
  }, []);

  const handleSelectChange = (e) => {
    const value = e.target.value;
    if (value === "custom") {
      setIsCustom(true);
      setSelected("");
    } else {
      setIsCustom(false);
      setSelected(value);
    }
  };

  const handleAddCustomOption = () => {
    if (!customValue.trim()) return;
    axios.post("http://localhost:3000/auth/add-college", { name: customValue })
      .then(() => {
        setOptions([...options, customValue]);
        setSelected(customValue);
        setCustomValue("");
        setIsCustom(false);
      })
      .catch((error) => console.error("Error adding custom option:", error));
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <label className="block mb-2 text-gray-700">Select college</label>
      <select className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={handleSelectChange}
        value={isCustom ? "custom" : selected}
      >
        <option value="" disabled>Select an option:</option>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
        <option value="custom">Add college</option>
      </select>
      {isCustom && (
        <div className="mt-2">
          <input
            type="text"
            placeholder="Enter custom option"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={customValue}
            onChange={(e) => setCustomValue(e.target.value)}
          />
        </div>
      )}
    </div>
  );
};

export default DropdownWithCustom;