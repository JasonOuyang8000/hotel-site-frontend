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

import { hotelReviews, hotelPhotos } from "../api/search";

const ModalRender = (view, onClose, reviews, photos, setView) => {
  const close = () => {
    setView(null);
    onClose();
  };

  switch (view) {
    case "review":
      return (
        <Modal onClose={close} isOpen={true} isCentered size="3xl">
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
      );
    case "image":
      return (
        <Modal
          onClose={close}
          isOpen={true}
          isCentered
          size="4xl"
          scrollBehavior="inside"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Photos</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {photos.map((photo, idx) => (
                <Box key={idx} p="3">
                  <Image src={photo} mb="10px" fontWeight="bold" />
                </Box>
              ))}
            </ModalBody>
          </ModalContent>
        </Modal>
      );
    default:
      return null;
  }
};
const SearchList = ({ data }) => {
  const [view, setView] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [photos, setPhotos] = useState([]);

  const { onClose } = useDisclosure();

  const handleSubmit = async (id) => {
    const res = await hotelReviews(id);
    setView("review");
    setReviews(res.reviews);
  };

  const photoSubmitHandler = async (id) => {
    const res = await hotelPhotos(id);
    setView("image");
    setPhotos(res.photos);
  };

  return (
    <>
      {ModalRender(view, onClose, reviews, photos, setView)}
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <Flex flexWrap="wrap" p="5" paddingTop="0px">
          {data.map((item, index) => (
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
                onClick={() => photoSubmitHandler(item.id)}
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
