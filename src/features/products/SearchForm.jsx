import { styled, alpha } from '@mui/material/styles';
import { Box, InputBase, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useSearch } from './useSearch';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    // [theme.breakpoints.up('sm')]: {
    //     marginLeft: theme.spacing(1),
    //     width: 'auto',
    // },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        // [theme.breakpoints.up('sm')]: {
        //     width: '12ch',
        //     '&:focus': {
        //         width: '20ch',
        //     },
        // },
    },
}));

export const SearchForm = () => {
    const [value, handleSubmit, handleChange] = useSearch();

    return (
        <Box
            component='form'
            noValidate
            autoComplete='off'
            flexGrow={1}
            sx={{ display: 'flex', gap: 1 }}
            onSubmit={handleSubmit}
        >
            <Search sx={{ width: '100%' }}>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    fullWidth
                    placeholder='Search…'
                    inputProps={{ 'aria-label': 'search' }}
                    type='search'
                    value={value}
                    onChange={handleChange}
                />
            </Search>
            <Button type='submit' variant='contained'>
                Search
            </Button>
        </Box>
    );
};
