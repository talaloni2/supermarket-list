import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectVariants(props) {
    const {count, setCount} = props

    const renderMenuItems = () => {

    }

    return (
        <div>
            <FormControl variant="standard" sx={{m: 1, minWidth: 120}}>
                <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={count}
                    onChange={event => setCount(event.target.value)}
                    label="Count"
                >
                    {[...Array(10).keys()].map(i => {
                        return <MenuItem value={i}>{i}</MenuItem>
                    })
                    }
                </Select>
            </FormControl>
            <FormControl variant="filled" sx={{m: 1, minWidth: 120}}>
                <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={age}
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}