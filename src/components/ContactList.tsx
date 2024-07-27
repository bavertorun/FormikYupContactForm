import { FormValues } from "../Types";
import ContactItem from "./ContactItem";

const ContactList = () => {
    let formData : FormValues[] = [];

    const formDataString = localStorage.getItem("formData");

    if(formDataString){
        formData = JSON.parse(formDataString);
    }
  return (
    <div className="container">
      <div className="col-md-12 mx-auto">
        <table className="table table-hover table-dark">
          <thead>
            <tr>
              <th scope="col">First & Last Name</th>
              <th scope="col">Email address</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Subject</th>
              <th scope="col">Message</th>
            </tr>
          </thead>
          <tbody>
            { formData && formData.map((form, idx) => (
                <ContactItem key={idx} contact={form} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactList;
