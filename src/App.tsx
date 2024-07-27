import ContactForm from "./components/ContactForm";
import "./App.css";
import ContactList from "./components/ContactList";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer />
      <ContactForm />
      <ContactList/>
    </>
  );
}

export default App;
