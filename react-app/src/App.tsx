//import Message from "./Message"
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  /*let items = [
    "Rio de Janeiro",
    "São João de Meriti",
    "Belford Roxo",
    "Niterói",
    "Nilópolis",
    "Maricá",
    "Nova Iguaçu"
  ];

  const handleSelectedItem = (item: string) => {
    console.log(item)
  }*/

  //return <div><Message /></div>

  /*return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectedItem} />
    </div>
  );*/

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Hello <span>World</span>
        </Alert>
      )}

      <Button onClick={() => setAlertVisibility(true)} col or="warning">
        Teste
      </Button>
    </div>
  );
}

export default App;
