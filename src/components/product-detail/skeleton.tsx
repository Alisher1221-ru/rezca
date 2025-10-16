import { Box, Skeleton, Stack } from "@chakra-ui/react";

export function SkeletonProductDetail() {
  return (
    <Box minH="80vh" p="5px 15px">
      <Box
        display="flex"
        gridTemplateColumns="repeat(5, 1fr)"
        color="white"
        gap="20px"
        p="5px 15px"
      >
        <Box w="200px">
          <Skeleton h="300px"></Skeleton>
        </Box>
        <Box w="100%" h="200px">
          <Stack>
            <Skeleton mb="20px" height="20px" />
            <Skeleton mb="20px" height="20px" />
            <Skeleton mb="20px" height="20px" />
            <Skeleton mb="20px" height="20px" />
            <Skeleton mb="20px" height="20px" />
          </Stack>
        </Box>
      </Box>
      <Box w="100%" mt="30px">
        <Stack>
          <Skeleton mb="20px" height="20px" />
          <Skeleton mb="20px" height="20px" />
          <Skeleton mb="20px" height="20px" />
          <Skeleton mb="20px" height="20px" />
          <Skeleton mb="20px" height="20px" />
        </Stack>
      </Box>
    </Box>
  );
}
