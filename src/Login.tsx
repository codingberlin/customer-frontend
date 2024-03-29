import React from 'react';
import {Button, Container} from "@mui/material";
import {useNavigate} from "react-router-dom";

function Login() {
  return (
      <Container>
          Bitte <Button
              size="large"
              color="primary"
              variant="contained"
              onClick={() => window.location.href="/?token=123"}
          >Anmelden</Button>!
      </Container>
  );
}

export default Login;
