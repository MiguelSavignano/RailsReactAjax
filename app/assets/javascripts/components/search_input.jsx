class SearchInput extends React.Component{
  render() {
    return (
      <div className="input-group col-md-8 col-md-offset-2">
        <input type="text"
               className="search-query form-control"
               name="q"
               autoComplete="off"
               placeholder="Search" />
        <span className="input-group-btn">
          <button className="btn btn-info" type="submit">
            <span className="glyphicon glyphicon-search" />
          </button>
        </span>
      </div>
    );
  }
};
