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
import Badge from '@mui/material/Badge';

export default function ItemCard(props) {

    const {item, count, enableAdding, onAddClick} = props

    return (
        <Card
            sx={{ maxWidth: 345, padding: "1em 1em 0 1em" }}
            className="item-card">
            <CardHeader title={item.name} />
            <Badge color="secondary" badgeContent={count ? count : 0} className="center">
                <CardMedia
                    sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                    height="200"
                    width="345"
                    component="img"
                    image={item.photo}
                    alt=":(" />
            </Badge>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {item.description}
                </Typography>
            </CardContent>
            <CardContent>
                <Typography variant="body3" color="text.secondary">
                    {"price: " + item.price + "₪"}
                </Typography>
            </CardContent>
            {enableAdding && <CardActions className="right">
                <IconButton onClick={() => onAddClick(item)}>
                    <AddIcon/>
                </IconButton>
            </CardActions>}
        </Card>
    );
}
