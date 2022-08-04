import { Alert, AlertTitle, Grid } from "@mui/material";
import React from "react";
import CardResep from "./containers/CardResep";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useAxios } from "../hooks/axioshook";
import { Container } from "@mui/system";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function ListResep() {

    const { response, loading, error } = useAxios(
        "/recipes-length/?limit=10"
    );

    // const handleData = () => {
    //     fetchData(`/recipes-length/?limit=10`);
    // };

    console.log(response);

    if (loading) {
        return (
            <>
                <p>Loading....</p>
            </>
        )
    }

    if (error) {
        return (
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                {error.message}
            </Alert>
        );
    }

    return (
        <div>
            <Container>
                <h1>Resep Hari ini!</h1>
                <Grid container spacing={3}>
                    {
                        response.results.map((data) => (
                            <Grid item key={data.key} xs={6} md={8} lg={4}>
                                <Item>
                                    <CardResep key={data.key} data={data} />
                                </Item>

                            </Grid>
                        ))
                    }


                </Grid>
            </Container>

        </div>
    )
}