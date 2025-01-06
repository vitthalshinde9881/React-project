import './App.css';
import React, { useState, useCallback, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8); // Default password length
  const [numberAllowed, setNumberAllowed] = useState(false); // Include numbers
  const [charAllowed, setCharAllowed] = useState(false); // Include special characters
  const [password, setPassword] = useState("");

  //  useRef hook
  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(() => {window.navigator.clipboard.writeText(password)},
[password])

  // Password Generator Function
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    // Append numbers and special characters if allowed
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_-+={}[]?/.,<>";

    // Generate the password based on the specified length
    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }

    setPassword(pass); // Update password state
  }, [length, numberAllowed, charAllowed]);


  return (
    <div className="w-full max-w-md mx-auto rounded-lg px-4 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-center text-xl font-bold mb-4">Password Generator</h1>

      {/* Length Slider */}
      <label className="block mb-2">Password Length: {length}</label>
      <input
        type="range"
        min="4"
        max="20"
        value={length}
        onChange={(e) => setLength(Number(e.target.value))}
        className="w-full"
      />

      {/* Options */}
      <div className="flex items-center space-x-4 mt-4">
        <label>
          <input
            type="checkbox"
            checked={numberAllowed}
            onChange={(e) => setNumberAllowed(e.target.checked)}
          />{" "}
          Include Numbers
        </label>
        <label>
          <input
            type="checkbox"
            checked={charAllowed}
            ref={passwordRef}
            onChange={(e) => setCharAllowed(e.target.checked)}
          />{" "}
          Include Special Characters
        </label>
      </div>

      {/* Generated Password */}
      <div className="mt-6">
        <button
          onClick={passwordGenerator}
          className="bg-orange-500 text-white px-4 py-2 rounded"
        >
          Generate Password
        </button>

        <button
          onClick={copyPasswordToClipboard}
          className="bg-orange-500 text-white px-4 py-2 rounded"
        >
          Copy
        </button>

        <div className="mt-4 p-2 bg-gray-700 rounded text-center">
          {password || "Your password will appear here"}
        </div>
      </div>
    </div>
  );
}

export default App;
