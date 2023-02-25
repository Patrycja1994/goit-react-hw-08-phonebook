
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import ContactForm from "components/ContactsForm/ContactsForm";
import ContactList from "components/ContactsList/ContactsList";
import { fetchContacts } from "redux/contacts/operations";
import Filter from 'components/Filter/Filter';
import { getLoading } from 'redux/contacts/selectors';


export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <h1>Your contacts</h1>
      </Helmet>
      <ContactForm />
      <div>{isLoading && 'Request in progres...'}</div>
      <Filter />

      <ContactList />
    </>
  );
}