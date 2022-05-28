import React, { useState } from "react";
import {
  useDisclosure,
  Flex,
  Box,
  Text,
  Image,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Divider,
} from "@chakra-ui/react";

import Stars from "./Stars";

import { hotelReviews } from "../api/search";
import { hotelPhotos } from "../api/search";

const SearchList = ({ data }) => {
  const [reviews, setReviews] = useState([]);
  const [photos, setPhotos] = useState([]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = async (id) => {
    console.log(id);
    const res = await hotelReviews(id);
    setReviews(res.reviews);
    onOpen();
  };

  const photoSubmitHandler = async (id) => {
    console.log(id);
    const res = await hotelPhotos(id);
    setPhotos(res.photos);
    onOpen();
  };
  console.log(data[0]);

  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered size="3xl">
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>Reviews</ModalHeader>
          <ModalCloseButton />
          {reviews.length && (
            <ModalBody>
              {reviews.map((review) => (
                <Box key={review.id} p="3">
                  <Text mb="10px" fontWeight="bold">
                    {review.user.name}
                  </Text>
                  <Stars rating={review.rating} id={review.id} />
                  <Box mt="10px">{review.text}</Box>
                  <Divider p="2.5" />
                </Box>
              ))}
            </ModalBody>
          )}
        </ModalContent>
      </Modal>

      {/* <Modal onClose={onClose} isOpen={isOpen} isCentered size="3xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Photos</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {photos.map((photo) => (
              <Box key={photo.id} p="3">
                <Image mb="10px" fontWeight="bold">
                  {photo.data.photos}
                </Image>
              </Box>
            ))}
          </ModalBody>
        </ModalContent>
      </Modal> */}
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <Flex flexWrap="wrap" p="5" paddingTop="0px">
          {data.map((item, photo) => (
            <Flex
              flexDirection="column"
              key={item.id}
              paddingTop="5"
              alignItems="center"
              w="33%"
              px="70px"
              py="20px"
            >
              <Image
                src={item.image_url}
                width="100%"
                height={300}
                alt="hotels"
                objectFit="cover"
                onClick={() => photoSubmitHandler(photo.id)}
                cursor="pointer"
              />

              <Box w="100%" p="15px">
                <Link
                  fontSize="xl"
                  fontWeight="bold"
                  color="black.100"
                  onClick={() => handleSubmit(item.id)}
                >
                  {item.name}
                </Link>
                <Text fontSize="sm" fontWeight="medium">
                  {item.location.display_address}
                </Text>
                <Text as="em">{item.display_phone}</Text>
                <Text color="teal.100" fontWeight="bold">
                  {item.price}
                </Text>
              </Box>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </>
  );
};

export default SearchList;
