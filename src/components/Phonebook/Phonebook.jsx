import { Component } from "react";
import { Form, Input, Label } from "./Phonebook.styled";
import PropTypes from 'prop-types';


export class Phonebook extends Component{
    state = {
        name: '',
        number: ''

    }

    handleSubmit = evt => {
        evt.preventDefault();
        this.props.onSubmit({
          name: this.state.name,
          number: this.state.number,
        });
        this.setState({ name: '', number: '' });
        evt.target.reset();          
    }

    handleNameInput = evt => {
        this.setState({ name: evt.target.value })
    };
        
    
    handleNumberInput = evt => {
        this.setState({ number: evt.target.value })
    };


    
        
    
    

    render() {
        const { name, number } = this.state;
        return (
          <Form onSubmit={this.handleSubmit}>
            <Label>
              Name
              <Input
                type="text"
                name="name"
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                onChange={this.handleNameInput}
                required
              />
            </Label>
            <Label>
              Number
              <Input
                type="tel"
                        name="number"
                        value={number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                onChange={this.handleNumberInput}
                required
              />
            </Label>
            <button type="submit">Add to contacts</button>
          </Form>
        )
    }
}

Phonebook.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};