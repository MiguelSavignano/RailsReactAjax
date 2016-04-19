var ContactsContainer = React.createClass({
  getInitialState() {
    return { contacts: this.props.contacts }
  },
  keyUpHandler(event){
    this.searchContacts(event.target.value)
  },
  searchContacts(searchValue){
    $.getJSON(
      this.props.contacts_path,
      {q:searchValue},
      (data) => this.setState({contacts: data})
    )
  },
  render(){
    return(
      <div>
        <div className="input-group col-md-8 col-md-offset-2">
          <input className="search-query form-control"
                 name="q"
                 onKeyUp={ this.keyUpHandler }
                 placeholder="Search" type="text" />
          <span className="input-group-btn">
            <button className="btn btn-info" type="submit"><span className="glyphicon glyphicon-search" /></button>
          </span>
        </div>
        <br/>
        <Contacts contacts={this.state.contacts} />
      </div>
    )
  }
})
