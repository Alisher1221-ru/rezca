import { Box, Skeleton } from "@chakra-ui/react";

export function SkeletonProduct() {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(auto-fill, minmax(150px, 1fr))"
      color="white"
      gap="20px"
      p="5px 15px"
      justifyContent="space-between"
    >
      <Skeleton h="300px"></Skeleton>
      <Skeleton h="300px"></Skeleton>
      <Skeleton h="300px"></Skeleton>
      <Skeleton h="300px"></Skeleton>
      <Skeleton h="300px"></Skeleton>
      <Skeleton h="300px"></Skeleton>
      <Skeleton h="300px"></Skeleton>
      <Skeleton h="300px"></Skeleton>
      <Skeleton h="300px"></Skeleton>
      <Skeleton h="300px"></Skeleton>
    </Box>
  );
}
