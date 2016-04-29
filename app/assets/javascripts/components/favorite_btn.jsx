class FavoriteBtn extends React.Component {
  constructor(props){
    super(props)
    this.state = {active: this.props.active}
  }
  _onClickHandler = (event) => {
    this.setState({active: !this.state.active})
  }
  render () {
    return (
      <div>
        <a className="icon-lg" onClick={this._onClickHandler}>
          <i className={`blue fa ${this.state.active ? 'fa-heart' : 'fa-heart-o'}`}></i>
        </a>
        <br/>
        <strong>{`${this.state.active ? 'a ti y ' : ''}a Marta le gusta`  }</strong>
      </div>
    );
  }
}
FavoriteBtn.defaultProps = {
  acive: false,
  users_liked:"Marta"
 };
