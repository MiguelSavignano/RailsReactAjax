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
      <a className="icon-lg" onClick={this._onClickHandler}>
        <i className={`blue fa ${this.state.active ? 'fa-heart' : 'fa-heart-o'}`}></i>
      </a>
    );
  }
}
FavoriteBtn.defaultProps = {acive: false };
