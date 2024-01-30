import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import ContactForm from 'components/ContactForm/ContactForm';
//import { UserMenu } from 'components/UserMenu/UserMenu';

const Phonebook = () => {
  return (
    <>
      <div className="container">
        {/* <UserMenu /> */}
        <h2 className="title">PhoneBook</h2>
        <ContactForm />
        <h2 className="title">Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </>
  );
};

export default Phonebook;
