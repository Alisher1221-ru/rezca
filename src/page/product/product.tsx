import { Box, Button, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { urls } from "../../api/urls";
import { api } from "../../api/axios";
import { IProduct } from "../../types/types";
import { SkeletonProductDetail } from "../../components/product-detail/skeleton";

export function ProductPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState<IProduct>();
  const { id } = useParams();

  useEffect(() => {
    api(urls.product.getOne(id?.split("_")[1]!)).then((res) =>
      setData(res.data)
    );
  }, [id]);

  if (!data) {
    return <SkeletonProductDetail />;
  }

  return (
    <Grid minH="85vh" p="15px" color="white" alignContent="start" gap="20px">
      <Flex alignItems="center" justifyContent="space-between">
        <Text
          fontSize={{ base: "20px", md: "28px" }}
          p="10px 0"
          fontWeight="700"
        >
          {data?.title}
        </Text>
      </Flex>

      <Flex flexDirection={{ base: "column", md: "initial" }} gap="30px">
        <Image
          src={data?.image}
          objectFit="contain"
          w={{ base: "full", md: "200px" }}
          h="300px"
          borderRadius="5px"
          alt="error in img"
        />
        <Box>
          <Text display="block">
            <Box as="span" fontWeight="500">
              описание:{" "}
            </Box>
            {data?.desc}
          </Text>
          <Text display="block">
            <Box as="span" fontWeight="500">
              дата:{" "}
            </Box>
            {new Date(Number(data?.date)).toLocaleDateString()}
          </Text>
          <Box mt="20px">
            <Text fontSize="18px" fontWeight="600">
              Про что Anime: {data?.title}
            </Text>
            <Text fontSize="16px">{data?.desc}</Text>
          </Box>
        </Box>
      </Flex>
      <Grid
        mt="20px"
        w="100%"
        gap="3"
        gridTemplateColumns="repeat(auto-fit, minmax(150px, 1fr))"
      >
        {data?.video?.map((el) => (
          <Button
            onClick={() =>
              navigate(
                `${location.pathname}/${el.title.split(" ").join("")}_${el.id}`
              )
            }
            color="white"
            _hover={{ bg: "rgb(90,90,90)" }}
            variant="outline"
            key={el.id}
          >
            {el.title}
          </Button>
        ))}
      </Grid>
    </Grid>
  );
}
