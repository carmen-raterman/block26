import { useState, useEfect } from 'react';

import './App.css';
import ContactList from './components/ContactList';

const [constacts, setContacts] = useState([]);
const [selectedContact, setSelectedContact] = useState(null);

function App() {

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data = await response.json();
      // console.log(data);
      setContacts(data);
    };

    getData();
  }, []);



  return (
    <>
      {selectedContact ? (
        <div>
          <h1> {selectedContact.name}</h1>
        </div>
      ) : null}
      <ContactList 
      contacts={contacts}
      setSelectedContact={setSelectedContact}/>
    </>
  );
}

export default App;