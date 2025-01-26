import List from "../components/List";
import { useLocation } from "react-router";

interface Props {
  name: string;
  todo: string[];
  done: string[];
}

const ListPage = () => {
  const location = useLocation();
  const state = location.state as Props; // Cast to the Props interface

  if (!state) {
    return <div>No data received</div>;
  }

  const { name, todo, done } = state;

  return (
    <div className="flex content-center justify-center p-1 min-h-screen bg-cyan-900 text-white">
      <List name={name} todo={todo} done={done} />
    </div>
  );
};

export default ListPage;
