class ContactsContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = { contacts: this.props.contacts, alertVisible: true }
  }
  componentDidMount() {
    // export function in the $ object
    $.ContactsContainer = { searchContacts: this.searchContacts }
  }
  keyUpHandler = (event) => {
    this.searchContacts(event.target.value)
  }
  searchContacts = (searchValue) => {
    if(searchValue.length < 2){ return false }
    var contacts_filtered = this.props.contacts.filter( (contact) =>
      contact.name.match( new RegExp(searchValue, "i") )
    )
    if(contacts_filtered.length != 0){
      this.setState({contacts: contacts_filtered})
    }
    else{
      $.getJSON(
        this.props.contacts_path,
        {q:searchValue},
        (data) => this.setState({contacts: data})
      )
    }
  }
  render(){
    return(
      <div>
        <div className="input-group col-md-8 col-md-offset-2">
          <input className="search-query form-control"
                 name="q"
                 autoComplete="off"
                 onKeyUp={ this.keyUpHandler }
                 placeholder="Search" type="text" />
          <span className="input-group-btn">
            <button className="btn btn-info" type="submit">
              <span className="glyphicon glyphicon-search" />
            </button>
          </span>
        </div>
        <br/>
        <Contacts contacts={this.state.contacts} />
      </div>
    )
  }
}
