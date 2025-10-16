import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { urls } from "../../api/urls";
import { api } from "../../api/axios";

interface TypeProduct {
  id: number;
  title: string;
  desc: string;
  date: Date;
  image: string;
}

export function Search() {
  const navigate = useNavigate();
  const [data, setData] = useState<TypeProduct[]>([]);
  const [search, setSearch] = useState<TypeProduct[]>([]);
  const [isSearch, setIsSearch] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    api(urls.product.get).then((res) => setData(res.data));
  }, []);

  function handlerSearch(value: string) {
    setInput(value);
    setIsSearch(true);
    setSearch(
      data.filter((el) => {
        return el.title
          .toLowerCase()
          .trim()
          .includes(value.toLowerCase().trim());
      })
    );
    if (!value) {
      setSearch([]);
      setIsSearch(false);
    }
  }

  return (
    <Flex position="relative" w="100%" justifyContent="flex-end">
      <Box display="flex" w="full" gap="20px">
        <Input
          onChange={(e) => handlerSearch(e.target.value)}
          maxW="100%"
          p="0 10px"
          value={input}
          placeholder="поиск..."
          transition="all .3s linear"
          variant="flushed"
        />
        <Button
          hidden={!isSearch}
          variant="outline"
          color="white"
          onClick={() => [setIsSearch(false), setInput("")]}
          _hover={{ background: "rgba(10,10,10,.5)" }}
        >
          X
        </Button>
      </Box>
      <Box
        position="absolute"
        bottom="-2px"
        right="0"
        w="100%"
        bg="rgba(0,0,0,.8)"
        backdropFilter="blur(5px)"
        transform="translate(0, 100%)"
        transition="all .5s ease"
        overflow="auto"
        zIndex="1"
        h={isSearch && (search[0] || input) ? "88vh" : "0px"}
      >
        {search.map((el) => (
          <Flex
            key={el.id}
            gap="10px"
            as="button"
            borderBottom="1px solid gray"
            p="8px"
            w="100%"
            textAlign="start"
            transition="all .2s"
            _hover={{ bg: "rgba(10,50,100,.5)" }}
            onClick={() => [
              navigate(`/product/${el.title.split(" ").join("")}_${el.id}`),
              setInput(""),
              setIsSearch(false),
            ]}
          >
            <Image
              src={el.image}
              w="60px"
              h="60px"
              objectFit="cover"
              borderRadius="10%"
            />
            <Flex
              justifyContent="center"
              flexDirection="column"
              as="span"
              h="60px"
            >
              <Text fontSize={{ base: "14px", md: "16px" }}>{el.title}</Text>
              <Text
                fontSize={{ base: "12px", md: "14px" }}
                color="gray.500"
                display={{ base: "none", md: "inline-block" }}
              >
                {el.desc.slice(0, 90)}
                {el.title.length > 90 && "..."}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Box>
    </Flex>
  );
}
