import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
    color: theme.palette.primary.textMain,
}));