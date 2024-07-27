import { FormValues } from "../Types";

interface IProps {
  contact: FormValues;
}

const ContactItem = ({ contact }: IProps) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    subject,
    otherSubject,
    message,
  } = contact;
  return (
    <tr>
      <td>{firstName} {lastName}</td>
      <td>{email}</td>
      <td>{phoneNumber}</td>
      <td>{subject == 'other' ? otherSubject : subject}</td>
      <td>{message}</td>
    </tr>
  );
};

export default ContactItem;