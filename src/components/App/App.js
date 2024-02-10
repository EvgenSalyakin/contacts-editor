import "./App.css";
import { Component } from "react";
import { ContactsList, ImputForm } from "components";

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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Phonebook</p>
        </header>
        <ImputForm />
        <ContactsList list={this.state.contacts} />
      </div>
    );
  }
}
