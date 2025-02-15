import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <StepMessage step={1}>
        <p>Test children prop</p>
      </StepMessage>
      <StepMessage step={2}> {messages[1]}</StepMessage>
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1); // step is the current value of the state
  // setStep is a function that allows us to update the value of the state
  const [isOpen, setIsOpen] = useState(true);

  function handlePreviews() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          <div className="buttons">
            <Button
              bgColor="#7950f2 "
              textColor="#fff"
              onClick={handlePreviews}
            >
              <span> 👈</span> Previous
            </Button>
            <Button bgColor="#7950f2 " textColor="#fff" onClick={handleNext}>
              Next <span> 👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function StepMessage({ step, children }) {
  return (
    <p className="message">
      <h3>Step {step}:</h3>
      {children}
    </p>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
