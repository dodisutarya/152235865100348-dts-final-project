import { Alert, AlertTitle, Card, CardMedia, Grid, Stack, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import { useAxios } from "../../hooks/axioshook";
import Footer from "../Footer";
import Navbar from "../Navbar";
// import ListDetailResep from "./ListDetailResep";

const DetailResep = () => {

    let { resepId } = useParams();
    const { response, loading, error } = useAxios(`/recipe/${resepId}`);

    if (loading) {
        return (
            <>
                <p>Loading....!</p>
            </>
        )
    }

    if (error) {
        return (
            <>
                <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    {error.message}
                </Alert>
            </>
        )
    }

    const { desc, ingredient, step, thumb, title } = response.results;

    return (
        <>
            <Navbar />
            <Container sx={{
                marginTop: 5
            }}>

                <Stack spacing={5}>
                    {/* Judul Resepnya */}
                    <Stack direction="row" justifyContent="space-between">
                        <Box sx={{
                            maxWidth: "840px"
                        }}>
                            <Typography variant="h3" fontWeight={100}>
                                {title}
                            </Typography>
                        </Box>
                    </Stack>
                </Stack>
                <Card
                    sx={{
                        maxWidth: "780px",
                        boxShadow: "none",
                        borderRadius: "30px",
                        maxHeight: "440px",
                    }}>
                    <CardMedia
                        sx={{
                            borderRadius: "30px",
                        }} component="img" image={thumb} alt={title} />
                </Card>
                <Box>
                    <Typography
                        variant="body"
                        fontWeight={400}
                        fontSize="16px"
                        lineHeight="28px"
                        sx={{
                            marginBottom: 2,
                            paddingTop: 5
                        }}>
                        {desc}
                    </Typography>
                </Box>

                {/* Bahan */}
                <Grid container>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={8}
                        sx={{
                            marginBottom: 5
                        }}>
                        <Box sx={{
                            paddingRight: 5
                        }}>
                            <Box>
                                <Typography
                                    fontWeight={600}
                                    variant="h4"
                                    sx={{
                                        marginBottom: 2,
                                        paddingTop: 5
                                    }}>
                                    Bahan-bahan
                                </Typography>
                                {ingredient}
                            </Box>
                            {/* Langkah */}
                            <Box sx={{
                                marginTop: 5
                            }}>
                                <Typography fontWeight={600}
                                    variant="h4"
                                    sx={{
                                        marginBottom: 2,
                                    }}>
                                    Cara Memasak
                                </Typography>
                                {step}
                            </Box>

                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </>
    )
}

export default DetailResep;