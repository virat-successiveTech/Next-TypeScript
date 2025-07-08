import Greeting from "@/components/assignment-1/Greeting";
const Greet = () => {
  return (
    <>
      <p className="question">
        Q1. Create a functional component named Greeting that displays a simple
        "Hello, Next.js!" message on the screen. Import and render the Greeting
        component in the App component.
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          justifyContent: "center",
        }}
      >
        <Greeting />
      </div>
    </>
  );
};

export default Greet;