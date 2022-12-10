import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

export default function ButtonAppBar(props) {

    const {title, cost, buttonIcon, onButtonClick} = props

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        {title}
                    </Typography>
                    {cost !== undefined && <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Total price: {cost}₪
                    </Typography>}
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={onButtonClick}
                        color="inherit">
                        {buttonIcon}
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
