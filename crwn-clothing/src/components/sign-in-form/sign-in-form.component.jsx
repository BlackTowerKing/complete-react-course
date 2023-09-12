import { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInUserWithEmailandPassword,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInUserWithEmailandPassword(email, password);
      resetFormFields();
    } catch (err) {
      switch (err.code) {
        case "auth/wrong-password":
          alert("incorrect password");
          break;
        case "auth/user-not-found":
          alert("no user");
          break;
        default:
          console.log(err);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className='sign-in-container'>
      <FormInput
        label='Email'
        type='email'
        onChange={handleChange}
        name='email'
        value={email}
        required
      />

      <FormInput
        label='Password'
        type='password'
        onChange={handleChange}
        name='password'
        value={password}
        required
      />
      <div className='buttons-container'>
        <Button type='submit'>Sign In</Button>
        <Button type='button' buttonType='google' onClick={signInWithGoogle}>
          Sign in with Google Popup
        </Button>
      </div>
    </form>
  );
};

export default SignInForm;
