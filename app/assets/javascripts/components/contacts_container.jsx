class ContactsContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {contacts: this.props.contacts}
  }
  keyUpHandler = (event) => {
    var searchValue = event.target.value

    var contacts_filtered = this.state.contacts.filter( (contact) =>
      contact.name.match( new RegExp(searchValue, "i") )
    )
    if(searchValue == "" || contacts_filtered.length == 0)
      $.getJSON(
        "/contacts",
        {q:searchValue},
        (contacts) => this.setState({contacts: contacts})
      )
    else{
      this.setState({contacts: contacts_filtered})
    }
  }
  render () {
    return (
      <div>
        <SearchInput onKeyUp={this.keyUpHandler}/>
        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}
