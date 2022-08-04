import { Container, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function Footer() {
    return (
        <Box color="green">
            <Container
                sx={{
                    paddingY: 2,
                    marginTop: 10,
                }}
            >
                <Stack spacing={2}>

                    <Stack
                        spacing={2}
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Typography variant="body2">
                            {" "}
                            © 2022 Masak Yu! | Dodi Sutarya | DTS Final Project
                        </Typography>
                    </Stack>
                </Stack>

            </Container>
            {/* <p style={{
                textAlign: "center",
                mt: "auto",
                padding: "50px",
                backgroundColor: "#328533",
                color: "white",
            }}>
                Copyright @2022 - Dodi Sutarya DTS Mini Project
            </p> */}
        </Box>
    )
}