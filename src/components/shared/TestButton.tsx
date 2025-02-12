"use client"

const TestButton = () => {
  const handleClick = () => {
    console.log("Button clicked!"); // Simple log to test
    alert("Button clicked!");
  };

  return (
    <button
      className="w-40 h-10 rounded-xl bg-black text-white"
      onClick={handleClick}
    >
      Test Button
    </button>
  );
};

export default TestButton;
