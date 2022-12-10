import * as React from 'react';
import './item-card.css'

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';

export default function ItemCard(props) {

    const { name, price, photo, description, enableAdding, onAddClick, id, count } = props

    return (
        <Card
            sx={{ maxWidth: 345, padding: "1em 1em 0 1em" }}
            className="item-card">
            <CardHeader title={name} />
            <CardMedia
                sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                height="200"
                width="345"
                component="img"
                image={photo}
                alt=":(" />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography variant="body3" color="text.secondary">
                    {"price: " + price + "₪"}
                </Typography>
            </CardContent>
            {enableAdding && <CardActions className="card-action">
                <IconButton onClick={() => onAddClick({ name, price, photo, description, id })}>
                    <AddIcon />
                </IconButton>
            </CardActions>}
        </Card>
    );
}
