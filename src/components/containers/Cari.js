import { Alert, AlertTitle, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import resepInstance from "../../apis/resepInstance";
import Footer from "../Footer";
import Navbar from "../Navbar";
import HasilCari from "./HasilCari";


const Cari = () => {

    const [query, setQuery] = useState("");
    const [response, setResponse] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchData = async (params) => {
        setError("");
        setLoading(true);
        try {
            const result = await resepInstance.get(params);
            setResponse(result.data.results);
            setLoading(false);
            if (result.data.results.length === 0) {
                setError({
                    message: "Resep yang dicari tidak ditemukan!",
                });
            }
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    const handleSubmit = () => {
        if (query === "") {
            setError({ message: "ketikan dahulu apa yang anda cari!" });
        } else {
            fetchData(`/search/?q=${query}`);
        }
    };


    return (
        <>
            <Navbar />
            <Container>
                <Box sx={{
                    minHeight: "100px",
                    padding: 5,
                    borderRadius: "30px",
                    marginY: 5,
                }}>
                    <Stack spacing={2}>
                        <Typography variant="h3" fontWeight={600}>
                            Cari Resep
                        </Typography>
                        <Typography ariant="body">
                            Silahkan masukan kata kunci untuk mencari resep!
                        </Typography>
                        <Stack spacing={2} direction="row">
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={5}>
                                    <TextField value={query} onChange={(event) => {
                                        setQuery(event.target.value);
                                    }}
                                        size="small"
                                        sx={{
                                            width: "100%",
                                        }} />
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <Button
                                        onClick={handleSubmit}
                                        sx={{
                                            height: "100%",
                                            textTransform: "none",
                                        }}
                                        variant="contained">Cari</Button>
                                </Grid>
                            </Grid>
                        </Stack>
                    </Stack>
                </Box>
                {
                    error && (
                        <Alert severity="error">
                            <AlertTitle>Error</AlertTitle>
                            {error.message}
                        </Alert>
                    )
                }
                <HasilCari result={response} loading={loading} />
            </Container>
            <Footer />
        </>
    )
}

export default Cari;