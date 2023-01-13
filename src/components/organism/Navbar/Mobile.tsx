import React, { useEffect, useState } from "react";
import {
  IconButton,
  Avatar,
  Box,
  Flex,
  HStack,
  VStack,
  useColorModeValue,
  Text,
  FlexProps,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useToast,
} from "@chakra-ui/react";
import { FiMenu, FiChevronDown } from "react-icons/fi";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { authStore } from "../../../store";
import { useAuth } from "../../../hooks";
import { useRouter } from "next/router";

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav: React.FC<MobileProps> = ({ onOpen, ...rest }: MobileProps) => {
  const { data } = useRecoilValue(authStore.authAtom);
  const [name, setName] = useState<string>("");
  useEffect(() => setName(data.name), [data.name]);

  const { mutate } = useAuth.useAuthLogout();
  const resetAuthAtom = useResetRecoilState(authStore.authAtom);
  const toast = useToast();
  const router = useRouter();

  const onLogout: any = () => {
    mutate(
      {},
      {
        onSuccess: () => {
          toast({
            title: "Logout Success",
            description: "You have been logged out.",
          });

          resetAuthAtom();
          router.replace("/");
        },
        onError: (error: any) => {
          resetAuthAtom();
          toast({
            title: "Logout Failed",
            status: "warning",
            description: error?.message,
          });
        },
      }
    );
  };
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Tokoweb
      </Text>

      <Flex alignItems={"center"}>
        <Menu>
          <MenuButton
            py={2}
            transition="all 0.3s"
            _focus={{ boxShadow: "none" }}
          >
            <HStack>
              <Avatar name={name} size={"sm"} src={"#"} />
              <VStack
                display={{ base: "none", md: "flex" }}
                alignItems="flex-start"
                spacing="1px"
                ml="2"
              >
                <Text fontSize="sm">{name}</Text>
              </VStack>
              <Box display={{ base: "none", md: "flex" }}>
                <FiChevronDown />
              </Box>
            </HStack>
          </MenuButton>
          <MenuList
            bg={useColorModeValue("white", "gray.900")}
            borderColor={useColorModeValue("gray.200", "gray.700")}
          >
            <MenuItem onClick={onLogout}>Sign Out</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default MobileNav;
