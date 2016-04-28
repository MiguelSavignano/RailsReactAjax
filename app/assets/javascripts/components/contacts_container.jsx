class ContactsContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {contacts: this.props.contacts}
  }
  keyUpHandler = (event) => {
    $.getJSON(
      "/contacts",
      {q:event.target.value},
      (contacts) => this.setState({contacts: contacts})
    )
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
