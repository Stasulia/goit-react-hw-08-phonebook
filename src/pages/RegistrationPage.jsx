import { useDispatch } from 'react-redux';
import FormRegistration from 'components/FormRegistration/FormRegistration';
import { signUpThunk } from 'store/auth/thunk';

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const register = body => {
    dispatch(signUpThunk(body));
  };

  return (
    <div
    // className="container"
    >
      <title>Registration</title>
      <FormRegistration register={register} />
    </div>
  );
};

export default RegistrationPage;
