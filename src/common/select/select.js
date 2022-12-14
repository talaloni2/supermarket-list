import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectCount(props) {
    const { count, updateCount } = props

    return (
        <div>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Count</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={count}
                    onChange={event => updateCount(event.target.value)}
                    label="Count"
                >
                    {[...Array(11).keys()].map(i => {
                        return <MenuItem key={i} value={i}>{i}</MenuItem>
                    })
                    }
                </Select>
            </FormControl>
        </div>
    );
}