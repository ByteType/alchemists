const CodeInputFields = ({ userInput, setUserInput, itemsRef }) => {
  const codeChangeHandler = (event, index) => {
    setUserInput((currentInput) => {
      const newCode = currentInput.split("");
      newCode[index] = event.target.value;
      return newCode.join("");
    });

    if (index < 3) {
      itemsRef.current[index + 1].focus();
    } else {
      itemsRef.current[index].blur();
    }
  };

  return (
    <div className="code-box">
      {new Array(4).fill(0).map((_, index) => (
        <input
          ref={(el) => (itemsRef.current[index] = el)}
          key={index}
          onChange={(event) => codeChangeHandler(event, index)}
          maxLength={1}
          type="text"
          required
        />
      ))}
    </div>
  );
};
export default CodeInputFields;
