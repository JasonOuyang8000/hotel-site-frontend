import React, { useEffect } from "react";
import homeImage from "../assets/home.jpg";
import { Image, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const seenLandingPage = localStorage.getItem("seenLandingPage");
    if (!seenLandingPage) {
      navigate("/landing");
    }
  });

  return (
    <Box>
      <Image
        height="600px"
        width="100%"
        objectFit="cover"
        src={homeImage}
        alt="home image"
      />
    </Box>
  );
};

export default Home;
