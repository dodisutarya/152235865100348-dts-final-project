import React from "react";
import {
    Box,
    Button,
    CircularProgress,
    Stack,
    Typography,
} from "@mui/material";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from "react-router-dom";
import { auth } from '../config/firebase';

const ProtectedRoute = ({ children }) => {

    const navigate = useNavigate();
    const [user, isLoading] = useAuthState(auth);

    if (isLoading) {
        return (
            <Box
                sx={{
                    backgroundColor: "black",
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <CircularProgress color="primary" />
            </Box>
        )

    }

    if (user) {
        return children;

    }

    return (
        <>
            <Box
                sx={{
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Stack spacing={2} alignItems="center">
                    <Typography variant="h4">Kamu sudah keluar dari Aplikasi</Typography>
                    <Typography variant="body">Silahkan Login Kembali</Typography>

                    <Button
                        size="large"
                        onClick={() => {
                            navigate("/login");
                        }}
                        color="success"
                        variant="contained"
                        sx={{
                            boxShadow: "none",
                            textTransform: "none",
                        }}
                    >
                        Login
                    </Button>
                </Stack>
            </Box>

        </>
    )
}

export default ProtectedRoute;