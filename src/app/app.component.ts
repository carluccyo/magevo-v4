import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'], 
  template: `


    <div class="sidebar" data-active-color="blue" data-background-color="white" data-image="../assets/img/sephora2.png">
            <!--
                Tip 1: You can change the color of active element of the sidebar using: data-active-color="purple | blue | green | orange | red | rose"
                Tip 2: you can also add an image using data-image tag
                Tip 3: you can change the color of the sidebar with data-background-color="white | black"
            -->

            <div class="logo">
                <a href="#" class="simple-text">
                    <img width="100px" src="../assets/img/logo.png" />
                </a>
            </div>
            <div class="logo logo-mini">
                <a href="#" class="simple-text">
                      <img width="50px" src="../assets/img/logoshort.png" />
                </a>
            </div>
            <div class="sidebar-wrapper">
                <div class="user">
                    <div class="photo">
                        <img src="../assets/img/sephora2.png" />
                    </div>
                    <div class="info">
                        <a data-toggle="collapse" href="#collapseExample" class="collapsed">
                            Kim Stromberg
                            <b class="caret"></b>
                        </a>
                        <div class="collapse" id="collapseExample">
                            <ul class="nav">

                                <li>
                                    <a href="#">Access Panel</a>
                                </li>
                                <li>
                                    <a href="pages/login.html">Log out</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <ul class="nav">
                  <li>
                      <a data-toggle="collapse" href="#read">
                          <i class="material-icons">timeline</i>
                          <p>Read
                              <b class="caret"></b>
                          </p>
                      </a>
                      <div class="collapse in" id="read">
                          <ul class="nav">
                              <li class="active">
                                  <a href="dashboard.html">Insights</a>
                              </li>
                              <li>
                                  <a href="improving.html">Improving</a>
                              </li>


                          </ul>
                      </div>
                  </li>
                    <li>
                        <a data-toggle="collapse" href="#pagesExamples">
                            <i class="material-icons">message</i>
                            <p>Do
                                <b class="caret"></b>
                            </p>
                        </a>
                        <div class="collapse" id="pagesExamples">
                            <ul class="nav">
                                <li>
                                    <a href="intelligentmessaging.html">Intelligent Messaging</a>
                                </li>
                                <li>
                                    <a href="">New feature request</a>
                                </li>
                                <li>
                                    <a href="">Report a problem</a>
                                </li>

                            </ul>
                        </div>
                    </li>
                    <li>
                        <a data-toggle="collapse" href="#componentsExamples">
                            <i class="material-icons">apps</i>
                            <p>Teach
                                <b class="caret"></b>
                            </p>
                        </a>
                        <div class="collapse" id="componentsExamples">
                            <ul class="nav">
                                <li>
                                    <a href="NLU.html">NLP Engine</a>
                                </li>
                                <li>
                                    <a href="copywriting.html">Copywriting</a>
                                </li>
                                <li>
                                    <a href="#">FAQs</a>
                                </li>
                            </ul>
                        </div>
                    </li>


                </ul>
            </div>
        </div>
        <div class="main-panel">
            <nav class="navbar navbar-transparent navbar-absolute">
                <div class="container-fluid">
                    <div class="navbar-minimize">
                        <button id="minimizeSidebar" class="btn btn-round btn-white btn-fill btn-just-icon">
                            <i class="material-icons visible-on-sidebar-regular">more_vert</i>
                            <i class="material-icons visible-on-sidebar-mini">view_list</i>
                        </button>
                    </div>
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#"> Buttons </a>
                    </div>
                    <div class="collapse navbar-collapse">
                        <ul class="nav navbar-nav navbar-right">
                            <li>
                                <a href="#pablo" class="dropdown-toggle" data-toggle="dropdown">
                                    <i class="material-icons">dashboard</i>
                                    <p class="hidden-lg hidden-md">Dashboard</p>
                                </a>
                            </li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                    <i class="material-icons">notifications</i>
                                    <span class="notification">5</span>
                                    <p class="hidden-lg hidden-md">
                                        Notifications
                                        <b class="caret"></b>
                                    </p>
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a href="#">Mike John responded to your email</a>
                                    </li>
                                    <li>
                                        <a href="#">You have 5 new tasks</a>
                                    </li>
                                    <li>
                                        <a href="#">You're now friend with Andrew</a>
                                    </li>
                                    <li>
                                        <a href="#">Another Notification</a>
                                    </li>
                                    <li>
                                        <a href="#">Another One</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#pablo" class="dropdown-toggle" data-toggle="dropdown">
                                    <i class="material-icons">person</i>
                                    <p class="hidden-lg hidden-md">Profile</p>
                                </a>
                            </li>
                            <li class="separator hidden-lg hidden-md"></li>
                        </ul>
                        <form class="navbar-form navbar-right" role="search">
                            <div class="form-group form-search is-empty">
                                <input type="text" class="form-control" placeholder="Search">
                                <span class="material-input"></span>
                            </div>
                            <button type="submit" class="btn btn-white btn-round btn-just-icon">
                                <i class="material-icons">search</i>
                                <div class="ripple-container"></div>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
            <div class="content">
                <div class="container-fluid">
                    <div class="card">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="card-header">
                                    <h4 class="card-title">Pick your Color</h4>
                                </div>
                                <div class="card-content">
                                    <button class="btn">Default</button>
                                    <button class="btn btn-primary">Primary</button>
                                    <button class="btn btn-info">Info</button>
                                    <button class="btn btn-success">Success</button>
                                    <button class="btn btn-warning">Warning</button>
                                    <button class="btn btn-danger">Danger</button>
                                    <button class="btn btn-rose">Rose</button>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card-header">
                                    <h4 class="card-title">Buttons with Label</h4>
                                </div>
                                <div class="card-content">
                                    <button class="btn">
                                        <span class="btn-label">
                                            <i class="material-icons">keyboard_arrow_left</i>
                                        </span>
                                        Left
                                    </button>
                                    <button class="btn">
                                        Right
                                        <span class="btn-label btn-label-right">
                                            <i class="material-icons">keyboard_arrow_right</i>
                                        </span>
                                    </button>
                                    <button class="btn btn-info">
                                        <span class="btn-label">
                                            <i class="material-icons">priority_high</i>
                                        </span>
                                        Info
                                    </button>
                                    <button class="btn btn-success">
                                        <span class="btn-label">
                                            <i class="material-icons">check</i>
                                        </span>
                                        Success
                                    </button>
                                    <button class="btn btn-warning">
                                        <i class="material-icons">warning</i> Warning
                                    </button>
                                    <button class="btn btn-danger">
                                        <i class="material-icons">close</i> Danger
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="card-header">
                                    <h4 class="card-title">Pick your Size</h4>
                                </div>
                                <div class="card-content">
                                    <button class="btn btn-primary btn-xs">x-Small</button>
                                    <button class="btn btn-primary btn-sm">Small</button>
                                    <button class="btn btn-primary">Regular</button>
                                    <button class="btn btn-primary btn-lg">Large</button>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card-header">
                                    <h4 class="card-title">Pick your Style</h4>
                                </div>
                                <div class="card-content">
                                    <button class="btn btn-primary">Default</button>
                                    <button class="btn btn-primary btn-round">round</button>
                                    <button class="btn btn-primary btn-round">
                                        <i class="material-icons">favorite</i> with icon
                                    </button>
                                    <button class="btn btn-primary btn-round btn-fab btn-fab-mini">
                                        <i class="material-icons">favorite</i>
                                    </button>
                                    <button class="btn btn-primary btn-simple">
                                        simple
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="card-header">
                                    <h4 class="card-title">Pagination</h4>
                                </div>
                                <div class="card-content">
                                    <ul class="pagination pagination-primary">
                                        <!--
					color-classes: "pagination-primary", "pagination-info", "pagination-success", "pagination-warning", "pagination-danger"
	            -->
                                        <li>
                                            <a href="javascript:void(0);">1</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">...</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">5</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">6</a>
                                        </li>
                                        <li class="active">
                                            <a href="javascript:void(0);">7</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">8</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">9</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">...</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">12</a>
                                        </li>
                                    </ul>
                                    <ul class="pagination pagination-info">
                                        <li>
                                            <a href="javascript:void(0);"> prev</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">1</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">2</a>
                                        </li>
                                        <li class="active">
                                            <a href="javascript:void(0);">3</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">4</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">5</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">next </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card-header">
                                    <h4 class="card-title">Button Group</h4>
                                </div>
                                <div class="card-content">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-info">Left</button>
                                        <button type="button" class="btn btn-info">Middle</button>
                                        <button type="button" class="btn btn-info">Right</button>
                                    </div>
                                    <br>
                                    <br>
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-round btn-info">1</button>
                                        <button type="button" class="btn btn-round btn-info">2</button>
                                        <button type="button" class="btn btn-round btn-info">3</button>
                                        <button type="button" class="btn btn-round btn-info">4</button>
                                    </div>
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-round btn-info">5</button>
                                        <button type="button" class="btn btn-round btn-info">6</button>
                                        <button type="button" class="btn btn-round btn-info">7</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="card-header">
                                    <h4 class="card-title">Social buttons</h4>
                                </div>
                                <div class="card-content">
                                    <div class="row">
                                        <div class="col-md-4 col-sm-4">
                                            <button class="btn btn-social btn-fill btn-twitter">
                                                <i class="fa fa-twitter"></i> Connect with Twitter
                                            </button>
                                        </div>
                                        <div class="col-md-1 col-sm-1">
                                            <button class="btn btn-just-icon btn-twitter">
                                                <i class="fa fa-twitter"></i>
                                            </button>
                                        </div>
                                        <div class="col-md-1 col-sm-1">
                                            <button class="btn btn-just-icon btn-round btn-twitter">
                                                <i class="fa fa-twitter"></i>
                                            </button>
                                        </div>
                                        <div class="col-md-1 col-sm-1">
                                            <button class="btn btn-just-icon btn-simple btn-twitter">
                                                <i class="fa fa-twitter"></i>
                                            </button>
                                        </div>
                                        <div class="col-md-3 col-sm-4">
                                            <button class="btn btn-simple btn-twitter">
                                                <i class="fa fa-twitter"></i> Connect with Twitter
                                            </button>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4 col-sm-4">
                                            <button class="btn btn-social btn-fill btn-facebook">
                                                <i class="fa fa-facebook-square"></i> Share &middot; 2.2k
                                            </button>
                                        </div>
                                        <div class="col-md-1 col-sm-1">
                                            <button class="btn btn-just-icon btn-facebook">
                                                <i class="fa fa-facebook"> </i>
                                            </button>
                                        </div>
                                        <div class="col-md-1 col-sm-1">
                                            <button class="btn btn-just-icon btn-round btn-facebook">
                                                <i class="fa fa-facebook"> </i>
                                            </button>
                                        </div>
                                        <div class="col-md-1 col-sm-1">
                                            <button class="btn btn-just-icon btn-simple btn-facebook">
                                                <i class="fa fa-facebook-square"> </i>
                                            </button>
                                        </div>
                                        <div class="col-md-3 col-sm-4">
                                            <button class="btn btn-simple btn-facebook">
                                                <i class="fa fa-facebook-square"></i> Share &middot; 2.2k
                                            </button>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4 col-sm-4">
                                            <button class="btn btn-social btn-fill btn-google">
                                                <i class="fa fa-google-square"></i> Share on Google+
                                            </button>
                                        </div>
                                        <div class="col-md-1 col-sm-1">
                                            <button class="btn btn-just-icon  btn-google">
                                                <i class="fa fa-google"> </i>
                                            </button>
                                        </div>
                                        <div class="col-md-1 col-sm-1">
                                            <button class="btn btn-just-icon btn-round btn-google">
                                                <i class="fa fa-google"> </i>
                                            </button>
                                        </div>
                                        <div class="col-md-1 col-sm-1">
                                            <button class="btn btn-just-icon btn-simple btn-google">
                                                <i class="fa fa-google"> </i>
                                            </button>
                                        </div>
                                        <div class="col-md-3 col-sm-4">
                                            <button class="btn btn-simple btn-google">
                                                <i class="fa fa-google-square"></i> Share on Google+
                                            </button>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4 col-sm-4">
                                            <button class="btn btn-social btn-fill btn-linkedin">
                                                <i class="fa fa-linkedin-square"></i> Connect with Linkedin
                                            </button>
                                        </div>
                                        <div class="col-md-1 col-sm-1">
                                            <button class="btn btn-just-icon  btn-linkedin">
                                                <i class="fa fa-linkedin"></i>
                                            </button>
                                        </div>
                                        <div class="col-md-1 col-sm-1">
                                            <button class="btn btn-just-icon btn-round btn-linkedin">
                                                <i class="fa fa-linkedin"></i>
                                            </button>
                                        </div>
                                        <div class="col-md-1 col-sm-1">
                                            <button class="btn btn-just-icon btn-simple btn-linkedin">
                                                <i class="fa fa-linkedin-square"></i>
                                            </button>
                                        </div>
                                        <div class="col-md-3 col-sm-4">
                                            <button class="btn btn-simple btn-linkedin">
                                                <i class="fa fa-linkedin-square"></i> Connect with Linkedin
                                            </button>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4 col-sm-4">
                                            <button class="btn btn-social btn-fill btn-pinterest">
                                                <i class="fa fa-pinterest"></i> Pint it &middot; 212
                                            </button>
                                        </div>
                                        <div class="col-md-1 col-sm-1">
                                            <button class="btn btn-just-icon  btn-pinterest">
                                                <i class="fa fa-pinterest"></i>
                                            </button>
                                        </div>
                                        <div class="col-md-1 col-sm-1">
                                            <button class="btn btn-just-icon btn-round btn-pinterest">
                                                <i class="fa fa-pinterest"></i>
                                            </button>
                                        </div>
                                        <div class="col-md-1 col-sm-1">
                                            <button class="btn btn-just-icon btn-simple btn-pinterest">
                                                <i class="fa fa-pinterest"></i>
                                            </button>
                                        </div>
                                        <div class="col-md-3 col-sm-4">
                                            <button class="btn btn-simple btn-pinterest">
                                                <i class="fa fa-pinterest"></i> Pint it &middot; 212
                                            </button>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4 col-sm-4">
                                            <button class="btn btn-social btn-fill btn-youtube">
                                                <i class="fa fa-youtube-play"></i> View on Youtube
                                            </button>
                                        </div>
                                        <div class="col-md-1 col-sm-1">
                                            <button class="btn btn-just-icon  btn-youtube">
                                                <i class="fa fa-youtube"> </i>
                                            </button>
                                        </div>
                                        <div class="col-md-1 col-sm-1">
                                            <button class="btn btn-just-icon btn-round btn-youtube">
                                                <i class="fa fa-youtube"> </i>
                                            </button>
                                        </div>
                                        <div class="col-md-1 col-sm-1">
                                            <button class="btn btn-just-icon btn-simple btn-youtube">
                                                <i class="fa fa-youtube"> </i>
                                            </button>
                                        </div>
                                        <div class="col-md-3 col-sm-4">
                                            <button class="btn btn-simple btn-youtube">
                                                <i class="fa fa-youtube-play"></i> View on Youtube
                                            </button>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4 col-sm-4">
                                            <button class="btn btn-social btn-fill btn-tumblr">
                                                <i class="fa fa-tumblr-square"></i> Repost
                                            </button>
                                        </div>
                                        <div class="col-md-1 col-sm-1">
                                            <button class="btn btn-just-icon  btn-tumblr">
                                                <i class="fa fa-tumblr"> </i>
                                            </button>
                                        </div>
                                        <div class="col-md-1 col-sm-1">
                                            <button class="btn btn-just-icon btn-round btn-tumblr">
                                                <i class="fa fa-tumblr"> </i>
                                            </button>
                                        </div>
                                        <div class="col-md-1 col-sm-1">
                                            <button class="btn btn-just-icon btn-simple btn-tumblr">
                                                <i class="fa fa-tumblr-square"> </i>
                                            </button>
                                        </div>
                                        <div class="col-md-3 col-sm-4">
                                            <button class="btn btn-simple btn-tumblr">
                                                <i class="fa fa-tumblr-square"></i> Repost
                                            </button>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4 col-sm-4">
                                            <button class="btn btn-social btn-fill btn-github">
                                                <i class="fa fa-github"></i> Connect with Github
                                            </button>
                                        </div>
                                        <div class="col-md-1 col-sm-1">
                                            <button class="btn btn-just-icon  btn-github">
                                                <i class="fa fa-github"></i>
                                            </button>
                                        </div>
                                        <div class="col-md-1 col-sm-1">
                                            <button class="btn btn-just-icon btn-round btn-github">
                                                <i class="fa fa-github"></i>
                                            </button>
                                        </div>
                                        <div class="col-md-1 col-sm-1">
                                            <button class="btn btn-just-icon btn-simple btn-github">
                                                <i class="fa fa-github"></i>
                                            </button>
                                        </div>
                                        <div class="col-md-3 col-sm-4">
                                            <button class="btn btn-simple btn-github">
                                                <i class="fa fa-github"></i> Connect with Github
                                            </button>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4 col-sm-4">
                                            <button class="btn btn-social btn-fill btn-behance">
                                                <i class="fa fa-behance-square"></i> Follow us
                                            </button>
                                        </div>
                                        <div class="col-md-1 col-sm-1">
                                            <button class="btn btn-just-icon  btn-behance">
                                                <i class="fa fa-behance"></i>
                                            </button>
                                        </div>
                                        <div class="col-md-1 col-sm-1">
                                            <button class="btn btn-just-icon btn-round btn-behance">
                                                <i class="fa fa-behance"></i>
                                            </button>
                                        </div>
                                        <div class="col-md-1 col-sm-1">
                                            <button class="btn btn-just-icon btn-simple btn-behance">
                                                <i class="fa fa-behance"></i>
                                            </button>
                                        </div>
                                        <div class="col-md-3 col-sm-4">
                                            <button class="btn btn-simple btn-behance">
                                                <i class="fa fa-behance-square"></i> Follow us
                                            </button>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4 col-sm-4">
                                            <button class="btn btn-social btn-fill btn-dribbble">
                                                <i class="fa fa-dribbble"></i> Find us on Dribble
                                            </button>
                                        </div>
                                        <div class="col-md-1 col-sm-1">
                                            <button class="btn btn-just-icon  btn-dribbble">
                                                <i class="fa fa-dribbble"></i>
                                            </button>
                                        </div>
                                        <div class="col-md-1 col-sm-1">
                                            <button class="btn btn-just-icon btn-round btn-dribbble">
                                                <i class="fa fa-dribbble"></i>
                                            </button>
                                        </div>
                                        <div class="col-md-1 col-sm-1">
                                            <button class="btn btn-just-icon btn-simple btn-dribbble">
                                                <i class="fa fa-dribbble"></i>
                                            </button>
                                        </div>
                                        <div class="col-md-3 col-sm-4">
                                            <button class="btn btn-simple btn-dribbble">
                                                <i class="fa fa-dribbble"></i> Find us on Dribble
                                            </button>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4 col-sm-4">
                                            <button class="btn btn-social btn-fill btn-reddit">
                                                <i class="fa fa-reddit"></i> Repost &middot; 232
                                            </button>
                                        </div>
                                        <div class="col-md-1 col-sm-1">
                                            <button class="btn btn-just-icon  btn-reddit">
                                                <i class="fa fa-reddit"></i>
                                            </button>
                                        </div>
                                        <div class="col-md-1 col-sm-1">
                                            <button class="btn btn-just-icon btn-round btn-reddit">
                                                <i class="fa fa-reddit"></i>
                                            </button>
                                        </div>
                                        <div class="col-md-1 col-sm-1">
                                            <button class="btn btn-just-icon btn-simple btn-reddit">
                                                <i class="fa fa-reddit"></i>
                                            </button>
                                        </div>
                                        <div class="col-md-3 col-sm-4">
                                            <button class="btn btn-simple btn-reddit">
                                                <i class="fa fa-reddit"></i> Repost &middot; 232
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="container-fluid">
                    <div class="header text-center">
                        <h3 class="title">Material Design Icons</h3>
                        <p class="category">Handcrafted by our friends from
                            <a target="_blank" href="https://design.google.com/icons/">Google</a>
                        </p>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card card-plain">
                                <div class="card-content">
                                    <div class="iframe-container hidden-sm hidden-xs">
                                        <iframe src="https://design.google.com/icons/">
                                            <p>Your browser does not support iframes.</p>
                                        </iframe>
                                    </div>
                                    <div class="col-md-6 hidden-lg hidden-md text-center">
                                        <h5>The icons are visible on Desktop mode inside an iframe. Since the iframe is not working on Mobile and Tablets please visit the icons on their original page on Google. Check the
                                            <a href="https://design.google.com/icons/" target="_blank">Material Icons</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer class="footer">
                <div class="container-fluid">
                    <nav class="pull-left">
                        <ul>
                            <li>
                                <a href="#">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Company
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <p class="copyright pull-right">
                        &copy;
                        <script>
                            document.write(new Date().getFullYear())
                        </script>
                        <a href="#">MagEvo</a>, made with love for a better web
                    </p>
                </div>
            </footer>
        </div>

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />


    <h1>
      {{title}}
    </h1>

    <!-- Standard button -->
    <button type="button" class="btn btn-default">Default</button>

    <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
    <button type="button" class="btn btn-primary">Primary</button>

    <!-- Indicates a successful or positive action -->
    <button type="button" class="btn btn-success">Success</button>

    <!-- Contextual button for informational alert messages -->
    <button type="button" class="btn btn-info">Info</button>

    <!-- Indicates caution should be taken with this action -->
    <button type="button" class="btn btn-warning">Warning</button>

    <!-- Indicates a dangerous or potentially negative action -->
    <button type="button" class="btn btn-danger">Danger</button>

    <!-- Deemphasize a button by making it look like a link while maintaining button behavior -->
    <button type="button" class="btn btn-link">Link</button>

    <h1>
      {{title}} <i class="fa fa-check"></i>
    </h1>

    <i class="fa fa-camera-retro fa-lg"></i> fa-lg
    <i class="fa fa-camera-retro fa-2x"></i> fa-2x
    <i class="fa fa-camera-retro fa-3x"></i> fa-3x
    <i class="fa fa-camera-retro fa-4x"></i> fa-4x
    <i class="fa fa-camera-retro fa-5x"></i> fa-5x
    
    
    <h1 class="title">Angular Router</h1>

    <nav>
      <a routerLink="/crisis-center" routerLinkActive="active">Crisis Center</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      <a routerLink="/admin" routerLinkActive="active">Admin</a>
      <a routerLink="/login" routerLinkActive="active">Login</a>
      <a [routerLink]="[{ outlets: { popup: ['compose'] } }]">Contact</a>
    </nav>
    
    <router-outlet></router-outlet>
    <router-outlet name="popup"></router-outlet>
  `
})
export class AppComponent {



  ngOnInit() {

  }


}
