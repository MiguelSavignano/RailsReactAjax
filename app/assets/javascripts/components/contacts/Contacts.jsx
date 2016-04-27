class Contacts extends React.Component {
  render () {
    const contacts = this.props.contacts
    return (
      <div>{ this.props.contacts.map( (contact) =>
        <div key={contact.id} className="contact well col-md-6">
          <div className="row">
            <div className="col-md-4">
              <img className="img-thumbnail" height="80%" src={contact.avatar} width="80%" />
            </div>
            <div className="col-md-8">
              <ul className="list-group">
                <li className="list-group-item">
                  <i className="fa fa-phone" /><a>{contact.phone}</a>
                </li>
                <li className="list-group-item">
                  <i className="fa fa-envelope" /><a>{contact.email}</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <i className="fa fa-star-o" /><strong>{contact.name}</strong>
          </div>
        </div>
      )}</div>
    );
  }
}
