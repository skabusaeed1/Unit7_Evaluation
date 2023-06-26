import React from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

const Login = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "80px",
          border: "1px solid black",
          width: "60%",
        }}
      >
        <h1>Login</h1>
        <FormControl>
          <FormLabel>Enter a Email</FormLabel>
          <Input type="email" w="250px" p="5px 10px" />
          <FormLabel>Enter a Password</FormLabel>
          <Input type="email" w="250px" p="5px 10px" />
        </FormControl>
        <Button colorScheme="blue" mt="10px" mb="20px">
          Signup
        </Button>
      </div>
    </div>
  );
};

export default Login;
