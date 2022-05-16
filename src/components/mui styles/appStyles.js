import { styled } from '@mui/system';
import HeaderBackground from '../../images/Header-Background.jpeg'

export const StyledApp = styled('styledApp', {
  name: 'StyledApp'
}) ({
  height: '100vh',
  backgroundColor: 'rgb(44, 4, 28, .9)',
  color: 'white',
  postition: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxShadow: '0px 15px 29px 5px rgba(0,0,0,0.46)',
})