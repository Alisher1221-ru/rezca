import { Route, Routes } from "react-router-dom";
import { HomePage } from "../page/home/home";
import { Headers } from "../components/header/headers";
import { Box } from "@chakra-ui/react";
import { VideoPage } from "../page/product-video/video";
import { ProductPage } from "../page/product/product";

export function Routers() {
  return (
    <Box
      bg="rgba(0,0,0,.85)"
      backdropFilter="blur(10px)"
      borderRadius={{ md: "8px" }}
    >
      <Headers />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/product/:id/:videoId" element={<VideoPage />} />
      </Routes>
    </Box>
  );
}
