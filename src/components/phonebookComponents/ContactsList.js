import React from 'react';
import PropTypes from 'prop-types';
import { List, Item, Btn } from './ContactsList.styled';

const ContactsList = ({ findeContact, onDelet }) => {
  return (
    <List>
      {findeContact.map(item => (
        <Item key={item.id}>
          <p>
            &#9742; -- {item.name}- {item.number}
          </p>
          <Btn onClick={() => onDelet(item.id)}>Delet</Btn>
        </Item>
      ))}
    </List>
  );
};

ContactsList.propTypes = {
  findeContact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
};
export default ContactsList;
