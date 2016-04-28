class ContactsContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {contacts: this.props.contacts}
  }
  keyUpHandler = (event) => {
    console.log(event.target.value)
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
