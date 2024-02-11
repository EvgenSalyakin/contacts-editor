import { Component } from 'react';
import Style from './ImputForm.module.css';

export class ImputForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    // let nameValid = this.state.name.match();
    // let numberValid = this.state.number.match();
    // if (!nameValid || !numberValid) {
    //   return;
    // }
    this.props.createContact(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form className={Style.form} onSubmit={this.handleSubmit}>
        <label htmlFor="inputName">Name:</label>
        <input
          value={this.state.name}
          onChange={this.handleChange}
          id="inputName"
          aria-describedby="nameHelp"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я0-9 ])?[a-zA-Zа-яА-Я0-9]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <div id="nameHelp">Confidencial informacion</div>
        <label htmlFor="inputNumber">Number:</label>
        <input
          value={this.state.number}
          onChange={this.handleChange}
          id="inputNumber"
          aria-describedby="numberHelp"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <div id="numberHelp">
          We'll never share your phone with anyone else.
        </div>
        <button type="submit" className="btn">
          Add contact
        </button>
      </form>
    );
  }
}
