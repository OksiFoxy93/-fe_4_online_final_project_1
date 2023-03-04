import CustomInput from "../CustomInput/CustomInput";
import { Field, ErrorMessage } from "formik";
import PropTypes from "prop-types";

import "./Authorization.scss";

const AuthInput = ({ control, ...rest }) => {
  switch (control) {
    case 'input':
      return <CustomInput {...rest} />;
      default:
        return null;
  }
}
AuthInput.propTypes = {
    control: PropTypes.string.isRequired,
  };

 export default AuthInput;
