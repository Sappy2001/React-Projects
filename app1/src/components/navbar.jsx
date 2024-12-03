
//Stateless Functional Component
//this.props only works in class components
//in functional components props need to be added as parameter
const Navbar= (props) =>
{
    return (
      
        <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">ITEM
    <span className="badge badge-pill badge-secondary m-2">{props.totalCounters}</span>
    </a>
  </div>
</nav>
      
    )
  };
  
export default Navbar;