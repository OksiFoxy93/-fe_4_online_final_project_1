// import React from 'react';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import IconButton from '@mui/material/IconButton';
// import Input from '@mui/material/Input';
// import FilledInput from '@mui/material/FilledInput';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// export default function InputAdornments() {
//   const [showPassword, setShowPassword] = React.useState(false);
//
//   const handleClickShowPassword = () => setShowPassword((show) => !show);
//
//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };
//
// return(
//     <FilledInput
//         id="filled-adornment-password"
//         type={showPassword ? 'text' : 'password'}
//         endAdornment={
//           <InputAdornment position="end">
//             <IconButton
//                 aria-label="toggle password visibility"
//                 onClick={handleClickShowPassword}
//                 onMouseDown={handleMouseDownPassword}
//                 edge="end"
//             >
//               {showPassword ? <VisibilityOff /> : <Visibility />}
//             </IconButton>
//           </InputAdornment>
//         }
//     />
// )}
