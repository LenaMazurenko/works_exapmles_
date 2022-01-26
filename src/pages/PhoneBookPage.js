import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { nanoid } from 'nanoid';
import { Wrapper } from '../components/phonebookComponents/Section';
import FormContacts from '../components/phonebookComponents/FormContacts';
import { Filter } from '../components/phonebookComponents/Filter';
import ContactsList from '../components/phonebookComponents/ContactsList';

export default function PhoneBookPage() {
  const defaultList = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useLocalStorage('contactsKey', defaultList);
  const [filter, setFilter] = useState('');

  // //===============================
  const formSubmitHundler = (name, number) => {
    const idList = nanoid();

    if (contacts.find(item => item.name === name)) {
      alert(`${name} is already in contacts`);
    } else {
      setContacts(prevState => [
        ...prevState,
        {
          id: idList,
          name,
          number,
        },
      ]);
    }
  };

  const findeContact = () => {
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const deletHundler = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  return (
    <Wrapper>
      <h1>Phonebook </h1>
      <FormContacts onSubmitProp={formSubmitHundler} />
      <h2>Contacts</h2>
      <Filter findeName={filter} onFind={e => setFilter(e.target.value)} />
      <ContactsList findeContact={findeContact()} onDelet={deletHundler} />
    </Wrapper>
  );
}
