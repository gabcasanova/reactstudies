import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="grid grid-cols-1 gap-10 h-screen content-center justify-items-center
                    bg-gray-700">
      <Calculator />

      <p className="text-center text-white">
        Made with ❤ by Gabriel Casanova <br /> 2025
      </p>
    </div>
  );
}

export default App;
