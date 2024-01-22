import "./App.css";
import GlobalStyle from "./GlobalStyle";
import useFetchHouses from "./hooks/useFetchHouses";
import { LoadingSpinner } from "./components/Spinner";
import HousesWrapper from "./components/HouseWrapper";

function App() {
  const { data: houses, loading, error } = useFetchHouses();

  if (loading) return <LoadingSpinner />;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <GlobalStyle />
      <HousesWrapper houses={houses} />
    </>
  );
}

export default App;
