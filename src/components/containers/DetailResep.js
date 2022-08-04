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
            <Container>
                <Stack>
                    {/* Judul Resepnya */}
                    <Stack direction="row" justifyContent="space-between">
                        <Box>
                            <Typography variant="h3">
                                {title}
                            </Typography>
                        </Box>
                    </Stack>
                </Stack>
                <Card>
                    <CardMedia component="img" image={thumb} alt={title} />
                </Card>
                <Box>
                    <Typography>
                        {desc}
                    </Typography>
                </Box>

                {/* Bahan */}
                <Grid container>
                    <Grid>
                        <Box>
                            <Typography>
                                Ingredient
                            </Typography>
                            {ingredient}
                            {/* <ListDetailResep data={ingredient} /> */}
                        </Box>

                        {/* Langkah */}
                        <Box>
                            <Typography>
                                Directions
                            </Typography>
                            {step}
                            {/* <ListDetailResep data={step} /> */}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </>
    )
}

export default DetailResep;