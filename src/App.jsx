 import { useState ,useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//  import './App.css'
import ContactList from './components/ContactList/ContactList'
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import contactmass from './data/ContactList.json'
function App() {
  const [phonebook, setPhonebook] = useState(() => {
    const savedContacts = localStorage.getItem("saved-contacts");

    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return contactmass;
  });


useEffect(() => {
    localStorage.setItem("saved-contacts", JSON.stringify(phonebook));
  }, [phonebook]);


  const [search, setSearch] = useState('')

  const addCard = (newCard) => {
      setPhonebook((prevPhone) => { return [...prevPhone, newCard] })
  }

  const delCard = (cardId) => {
     setPhonebook((prevPhone) => { return prevPhone.filter(card => card.id !== cardId) })
  }

  const viewPhonebook = phonebook.filter((card) => 
    card.name.toLowerCase().includes(search.toLowerCase())
  )
  
  
   return (
     <>
       <ContactForm submit={addCard} />
       <SearchBox value={search} onSearch={setSearch} />
       <ContactList 
         contactitems={viewPhonebook} onDel={delCard} />
      
     </>
   )
}

export default App
