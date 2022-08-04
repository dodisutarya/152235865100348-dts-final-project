import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Chip, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Timer from '@mui/icons-material/Timer';
import Dining from '@mui/icons-material/Dining';

export default function CardResep({ data }) {

    const navigate = useNavigate();
    const { title, portion, times, key, thumb } = data;

    console.log(data);

    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea
                    onClick={() => {
                        navigate(`/resep/${key}`);
                    }}
                >
                    <CardMedia
                        component="img"
                        height="140"
                        image={thumb}
                        alt="resep-iga-bakar-a-la-makasar"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title.replace("Resep", "")}
                        </Typography>

                        <Stack direction="row" spacing={2}>
                            <Chip size='small' icon={<Timer />} label={times} />
                            <Chip size='small' icon={<Dining />} label={portion} />
                        </Stack>

                    </CardContent>
                </CardActionArea>
            </Card>


        </>

    );
}
