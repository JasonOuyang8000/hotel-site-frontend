import React, { useState, useEffect } from "react";
import { Box, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Search from "../components/Search";
import SearchList from "../components/SearchList";

const Home = () => {
  const [data, setData] = useState([]);
  const [showSearchBar, setShowSearchBar] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const seenLandingPage = localStorage.getItem("seenLandingPage");
    if (!seenLandingPage) {
      navigate("/landing");
    }
  });

  return (
    <Box>
      {showSearchBar && (
        <Search setData={setData} setShowSearchBar={setShowSearchBar} />
      )}
      {!showSearchBar && (
        <SearchList data={data} setShowSearchBar={setShowSearchBar} />
      )}
      {!showSearchBar && (
        <Button onClick={() => setShowSearchBar(true)}>Go Back</Button>
      )}
    </Box>
  );
};

export default Home;
