import {
  Flex,
  Box,
  Stack,
  Link,
  Heading,
  Text,
  useColorModeValue,
  useToast,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { useSetRecoilState } from "recoil";
import { useAuth } from "../../../hooks";
import { authStore } from "../../../store";
import { AuthValidation } from "../../../validations";
import { AtomInputText, Form } from "../../atoms";
import { MoleculeInputGroupText } from "../../molecules";

const OrganismLoginContainer: React.FC = () => {
  const setAuth = useSetRecoilState(authStore.authAtom);
  const { mutate, isLoading } = useAuth.useAuthLogin();
  const toast = useToast();
  const router = useRouter();

  const onSubmit = (values: any) => {
    mutate(values, {
      onError: (error: any) => {
        toast({
          title: "Somethin Went Wrong",
          description: error?.message,
          status: "error",
          position: "top",
        });
      },
      onSuccess: ({ data }) => {
        setAuth((currVal) => ({
          ...currVal,
          data: data.data,
        }));

        toast({
          title: "Login Success",
          description: `Welcome back, ${data.data.name}`,
          status: "success",
          position: "top",
        });

        router.replace("/");
      },
    });
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Form
            defaultValues={{
              email: "",
              password: "",
            }}
            validationSchema={AuthValidation.LoginSchemaValidation}
            onSubmit={onSubmit}
          >
            {() => (
              <Stack spacing={4}>
                <MoleculeInputGroupText
                  label="Email"
                  helperText="We will not share your email."
                  htmlFor="email"
                  name="email"
                  isRequired
                  component={AtomInputText}
                />

                <MoleculeInputGroupText
                  label="Password"
                  htmlFor="password"
                  type="password"
                  name="password"
                  isRequired
                  component={AtomInputText}
                />

                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  isLoading={isLoading}
                  type="submit"
                >
                  Sign in
                </Button>
              </Stack>
            )}
          </Form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default OrganismLoginContainer;
