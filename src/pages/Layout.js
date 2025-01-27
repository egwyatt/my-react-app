import { Outlet, Link } from "react-router-dom";

const Layout = () => {

  return (

    <>

      <nav>

        <ul>

          <li className="Layout1">

          <Link to="/">Todos</Link>&nbsp;&nbsp;

          </li>

          <li className="Layout2">

            <Link to="/insertprod">Insert Todo</Link>&nbsp;&nbsp;

          </li>

          
          <li className="Layout3">
          <Link to="/contact">ContactForm</Link>&nbsp;&nbsp;


          </li>

        </ul>

      </nav>

      <Outlet />

    </>

  )

};

export default Layout;