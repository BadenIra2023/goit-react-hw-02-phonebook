import React, { Component } from 'react';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

handleChange = nameValueInput => event => {
    const { target } = event;
    this.setState({
      [nameValueInput]: target.value,
    });
  };


handleSubmit = event => {
    event.preventDefault();
    const { onSubmit } = this.props;
    onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form  onSubmit={this.handleSubmit}>
        <label className={css.labname}>
            <span>Name: </span>
        

          <input
            className={css.inpname}
            type="text"
            placeholder="Enter name of contact"
            name="name"
            id={nanoid()}
            value={name}
            onChange={this.handleChange('name')}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.labname}>
          <span>Number: </span>
       
          <input
            className={css.inpname}
            type="tel"
            placeholder= "Enter number of contact"
            name="number"
            id={nanoid()}
            value={number}
            onChange={this.handleChange('number')}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
         </label>
        <button className={css.buttonadd} type="submit"> Add contact
        </button>
      </form>

    )
   }
}

  export default ContactForm;
