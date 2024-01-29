import { Circles } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { selectorIsLoading } from 'store/contacts/selectorsContacts';

export const Loader = () => {
  const isLoading = useSelector(selectorIsLoading);
  return (
    <>
      {isLoading ? (
        <Circles
          height="80"
          width="80"
          color="rgb(164, 218, 220)"
          ariaLabel="circles-loading"
          wrapperStyle={{
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
          }}
          visible={true}
        />
      ) : (
        <></>
      )}
    </>
  );
};
