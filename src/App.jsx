import "./App.css";
import SplitScreen from "./components/SplitScreen";

const LeftSideComp = ({ title }) => {
  return <h2 style={{ backgroundColor: "crimson" }}>{title}</h2>;
};

const RightSideComp = ({ title }) => {
  return <h2 style={{ backgroundColor: "brown" }}>{title}</h2>;
};

const App = () => {
  return (
    <>
      <SplitScreen leftWidth={1} rightWidth={3}>
        <LeftSideComp title={"Left"} />
        <RightSideComp title={"Right"} />
      </SplitScreen>
    </>
  );
};

export default App;
