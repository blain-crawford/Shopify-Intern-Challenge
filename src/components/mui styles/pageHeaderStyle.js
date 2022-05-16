import { styled } from '@mui/system';
import HeaderBackground from '../../images/Header-Background.jpeg'

export const StyledHeader = styled('header', {
  name: 'StyledHeader',
  slot: 'PageTopper',
})({
  height: '40vh',
  backgroundImage: `linear-gradient(rgb(44, 4, 28, .9),rgba(.3, .5, .6, .7)), url(${HeaderBackground})`,
  backgroundPosition: 'bottom',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  color: 'white',
  padding: '15px',
  postition: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  '.MuiSvgIcon-root': {
    fontSize: '55px',
  },
  boxShadow: '0px 15px 29px 5px rgba(0,0,0,0.46)',
});
