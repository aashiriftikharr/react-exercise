import "./App.css";
import GlobalStyle from "./GlobalStyle";
import { LoadingSpinner } from "./components/Spinner";
import HousesWrapper from "./components/HouseWrapper";
import { useDispatch, useSelector } from "react-redux";
import { fetchHouses } from "./featrures/housesSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const { houses, status, error } = useSelector((state) => state.houses);

  useEffect(() => {
    dispatch(fetchHouses());
  }, [dispatch]);

  if (status === "loading") return <LoadingSpinner />;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <GlobalStyle />
      <HousesWrapper houses={houses} />
    </>
  );
}

export default App;
