import { Box, Text } from "@chakra-ui/react";
import { ProductComonent } from "../../components/product/product";

export function HomePage() {
  return (
    <Box color="white" p="15px" minH="85vh">
      <Text p="20px 0" fontWeight="600" fontSize="30px">
        Лучшие Anime
      </Text>
      <ProductComonent />
    </Box>
  );
}
