import React from "react";
import logo from '../images/white tippl logo.png';
import photo from '../images/cocktail_summer.jpg';

import './Footer.css';

class Footer extends React.Component {
    render() {
        return (

            <footer class="page-footer font-small cyan darken-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 py-3">
                            <div className="mb-5 flex-center">
                                <a className="ins-ic">
                                    <a href="https://www.instagram.com/tipplapp/" target="_blank">
                                        <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-3x"> </i></a>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright text-center text-uppercase py-3">© 2019
    <a href="https://mdbootstrap.com/education/bootstrap/"> Tippl.com</a>
                </div>
            </footer>




            /* footer test 2 */
            // <footer className="page-footer">


            // <div className="footer-copyright text-center bg-secondary pt-3 pb-3 mt-6 mb-6 ">© 2019:
            // <img src={logo} width="150" class="img-fluid"
            //         alt="tippl"/>

            // </div>
            // <div className="page-footer-custom footer-logo text-center pt-3 pb-3 mt-6 mb-6 ">
            // <img src={logo} width="150" class="img-fluid"
            //     alt="tippl" />
            //     </div>


            // </footer>



            /* <footer className="container-fluid">

              <nav className="navbar navbar-default">
                 <div className="navbar-header">

                      <div className="brand2">
                          <a href="...">
                              <img className="img-responsive" src={photo} alt="Responsive image" />
                             <img src={logo} width="90"/>

                            <h4 className="navbar-text">© 2019</h4>
                          </a>

                    </div>
                 </div>

            </nav>

        </footer>  */
        );
    }
}

export default Footer;