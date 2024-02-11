import "./App.css";
import { Component } from "react";
import { ContactsList, ImputForm, Filter } from "components";
import { nanoid } from "nanoid";

export class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  handleDelete = (id) => {
    this.setState((prev) => {
      return {
        contacts: prev.contacts.filter((el) => el.id !== id),
      };
    });
  };

  createContact = (data) => {
    const id = nanoid();
    const newData = { id, ...data };
    this.setState((prev) => ({ contacts: [newData, ...prev.contacts] }));
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  getContacts = () => {
    return this.state.contacts.filter(({ name }) => {
      const upName = name.toUpperCase();
      return upName.includes(this.state.filter.toUpperCase());
    });
  };

  getFilteredList = (filter) => {
    return this.state.contacts.filter(({ name }) =>
      name.toUpperCase().includes(filter.toUpperCase())
    );
  };

  render() {
    return (
      <div className="App">
        <h1 className="App-header">Phonebook</h1>
        <ImputForm createContact={this.createContact} />
        <h1 className="App-header">Contacts</h1>
        <Filter filter={this.state.filter} handleChange={this.handleChange} />
        <ContactsList
          handleDelete={this.handleDelete}
          list={this.getFilteredList(this.state.filter)}
        />
      </div>
    );
  }
}
