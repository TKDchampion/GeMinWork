import React, { Component } from "react";
import { label,button } from 'reactstrap';

export default class Panel extends Component {
    render() {
        return (
          <div className="main-panel ps-container ps-theme-default ps-active-y" data-ps-id="557d8ba7-6480-8b7c-f7ae-3de6bb1e5179">
            <nav className="navbar navbar-transparent navbar-absolute">
              <div className="container-fluid">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="http://demos.creative-tim.com/material-dashboard/examples/dashboard.html?_ga=2.28571388.179549990.1512119107-699052212.1512119107#"> 
                    Material Dashboard
                  </a>
                </div>
                <div className="collapse navbar-collapse">
                  <ul className="nav navbar-nav navbar-right">
                    <li>
                      <a href="http://demos.creative-tim.com/material-dashboard/examples/dashboard.html?_ga=2.28571388.179549990.1512119107-699052212.1512119107#pablo" className="dropdown-toggle" data-toggle="dropdown">
                        <i className="material-icons">dashboard</i>
                        <p className="hidden-lg hidden-md">Dashboard</p>
                      </a>
                    </li>
                    <li className="dropdown">
                      <a href="http://demos.creative-tim.com/material-dashboard/examples/dashboard.html?_ga=2.28571388.179549990.1512119107-699052212.1512119107#" className="dropdown-toggle" data-toggle="dropdown">
                        <i className="material-icons">notifications</i>
                        <span className="notification">5</span>
                        <p className="hidden-lg hidden-md">Notifications</p>
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="http://demos.creative-tim.com/material-dashboard/examples/dashboard.html?_ga=2.28571388.179549990.1512119107-699052212.1512119107#">
                                Mike John responded to your email
                          </a>
                        </li>
                        <li>
                          <a href="http://demos.creative-tim.com/material-dashboard/examples/dashboard.html?_ga=2.28571388.179549990.1512119107-699052212.1512119107#">
                                You have 5 new tasks
                          </a>
                        </li>
                        <li>
                          <a href="http://demos.creative-tim.com/material-dashboard/examples/dashboard.html?_ga=2.28571388.179549990.1512119107-699052212.1512119107#">
                                You are now friend with Andrew
                          </a>
                        </li>
                        <li>
                          <a href="http://demos.creative-tim.com/material-dashboard/examples/dashboard.html?_ga=2.28571388.179549990.1512119107-699052212.1512119107#">
                                Another Notification
                          </a>
                        </li>
                        <li>
                          <a href="http://demos.creative-tim.com/material-dashboard/examples/dashboard.html?_ga=2.28571388.179549990.1512119107-699052212.1512119107#">
                                Another One
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="http://demos.creative-tim.com/material-dashboard/examples/dashboard.html?_ga=2.28571388.179549990.1512119107-699052212.1512119107#pablo" className="dropdown-toggle" data-toggle="dropdown">
                        <i className="material-icons">person</i>
                        <p className="hidden-lg hidden-md">Profile</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="card card-stats">
                                <div className="card-header" data-background-color="orange">
                                    <i className="material-icons">content_copy</i>
                                </div>
                                <div className="card-content">
                                    <p className="category">Used Space</p>
                                    <h3 className="title">49/50
                                        <small>GB</small>
                                    </h3>
                                </div>
                                <div className="card-footer">
                                    <div className="stats">
                                        <i className="material-icons text-danger">warning</i>
                                        <a href="http://demos.creative-tim.com/material-dashboard/examples/dashboard.html?_ga=2.28571388.179549990.1512119107-699052212.1512119107#pablo">Get More Space...</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="card card-stats">
                                <div className="card-header" data-background-color="green">
                                    <i className="material-icons">store</i>
                                </div>
                                <div className="card-content">
                                    <p className="category">Revenue</p>
                                    <h3 className="title">$34,245</h3>
                                </div>
                                <div className="card-footer">
                                    <div className="stats">
                                        <i className="material-icons">date_range</i> Last 24 Hours
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="card card-stats">
                                <div className="card-header" data-background-color="red">
                                    <i className="material-icons">info_outline</i>
                                </div>
                                <div className="card-content">
                                    <p className="category">Fixed Issues</p>
                                    <h3 className="title">75</h3>
                                </div>
                                <div className="card-footer">
                                    <div className="stats">
                                        <i className="material-icons">local_offer</i> Tracked from Github
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="card card-stats">
                                <div className="card-header" data-background-color="blue">
                                    <i className="fa fa-twitter"></i>
                                </div>
                                <div className="card-content">
                                    <p className="category">Followers</p>
                                    <h3 className="title">+245</h3>
                                </div>
                                <div className="card-footer">
                                    <div className="stats">
                                        <i className="material-icons">update</i> Just Updated
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header card-chart" data-background-color="green">
                                    <div className="ct-chart" id="dailySalesChart"><svg xmlns:ct="http://gionkunz.github.com/chartist-js/ct" width="100%" height="100%" className="ct-chart-line" style="width: 100%; height: 100%;"><g className="ct-grids"><line x1="40" x2="40" y1="0" y2="120" className="ct-grid ct-horizontal"></line><line x1="85" x2="85" y1="0" y2="120" className="ct-grid ct-horizontal"></line><line x1="130" x2="130" y1="0" y2="120" className="ct-grid ct-horizontal"></line><line x1="175" x2="175" y1="0" y2="120" className="ct-grid ct-horizontal"></line><line x1="220" x2="220" y1="0" y2="120" className="ct-grid ct-horizontal"></line><line x1="265" x2="265" y1="0" y2="120" className="ct-grid ct-horizontal"></line><line x1="310" x2="310" y1="0" y2="120" className="ct-grid ct-horizontal"></line><line y1="120" y2="120" x1="40" x2="355" className="ct-grid ct-vertical"></line><line y1="96" y2="96" x1="40" x2="355" className="ct-grid ct-vertical"></line><line y1="72" y2="72" x1="40" x2="355" className="ct-grid ct-vertical"></line><line y1="48" y2="48" x1="40" x2="355" className="ct-grid ct-vertical"></line><line y1="24" y2="24" x1="40" x2="355" className="ct-grid ct-vertical"></line><line y1="0" y2="0" x1="40" x2="355" className="ct-grid ct-vertical"></line></g><g><g className="ct-series ct-series-a"><path d="M 40 91.2 C 85 79.2 85 79.2 85 79.2 C 130 103.2 130 103.2 130 103.2 C 175 79.2 175 79.2 175 79.2 C 220 64.8 220 64.8 220 64.8 C 265 76.8 265 76.8 265 76.8 C 310 28.8 310 28.8 310 28.8" className="ct-line"></path><line x1="40" y1="91.2" x2="40.01" y2="91.2" className="ct-point" ct:value="12" opacity="1"></line><line x1="85" y1="79.2" x2="85.01" y2="79.2" className="ct-point" ct:value="17" opacity="1"></line><line x1="130" y1="103.2" x2="130.01" y2="103.2" className="ct-point" ct:value="7" opacity="1"></line><line x1="175" y1="79.2" x2="175.01" y2="79.2" className="ct-point" ct:value="17" opacity="1"></line><line x1="220" y1="64.8" x2="220.01" y2="64.8" className="ct-point" ct:value="23" opacity="1"></line><line x1="265" y1="76.8" x2="265.01" y2="76.8" className="ct-point" ct:value="18" opacity="1"></line><line x1="310" y1="28.799999999999997" x2="310.01" y2="28.799999999999997" className="ct-point" ct:value="38" opacity="1"></line></g></g><g className="ct-labels"><foreignobject style="overflow: visible;" x="40" y="125" width="45" height="20"><span className="ct-label ct-horizontal ct-end" style="width: 45px; height: 20px" xmlns="http://www.w3.org/1999/xhtml">M</span></foreignobject><foreignobject style="overflow: visible;" x="85" y="125" width="45" height="20"><span className="ct-label ct-horizontal ct-end" style="width: 45px; height: 20px" xmlns="http://www.w3.org/1999/xhtml">T</span></foreignobject><foreignobject style="overflow: visible;" x="130" y="125" width="45" height="20"><span className="ct-label ct-horizontal ct-end" style="width: 45px; height: 20px" xmlns="http://www.w3.org/1999/xhtml">W</span></foreignobject><foreignobject style="overflow: visible;" x="175" y="125" width="45" height="20"><span className="ct-label ct-horizontal ct-end" style="width: 45px; height: 20px" xmlns="http://www.w3.org/1999/xhtml">T</span></foreignobject><foreignobject style="overflow: visible;" x="220" y="125" width="45" height="20"><span className="ct-label ct-horizontal ct-end" style="width: 45px; height: 20px" xmlns="http://www.w3.org/1999/xhtml">F</span></foreignobject><foreignobject style="overflow: visible;" x="265" y="125" width="45" height="20"><span className="ct-label ct-horizontal ct-end" style="width: 45px; height: 20px" xmlns="http://www.w3.org/1999/xhtml">S</span></foreignobject><foreignobject style="overflow: visible;" x="310" y="125" width="45" height="20"><span className="ct-label ct-horizontal ct-end" style="width: 45px; height: 20px" xmlns="http://www.w3.org/1999/xhtml">S</span></foreignobject><foreignobject style="overflow: visible;" y="96" x="0" height="24" width="30"><span className="ct-label ct-vertical ct-start" style="height: 24px; width: 30px" xmlns="http://www.w3.org/1999/xhtml">0</span></foreignobject><foreignobject style="overflow: visible;" y="72" x="0" height="24" width="30"><span className="ct-label ct-vertical ct-start" style="height: 24px; width: 30px" xmlns="http://www.w3.org/1999/xhtml">10</span></foreignobject><foreignobject style="overflow: visible;" y="48" x="0" height="24" width="30"><span className="ct-label ct-vertical ct-start" style="height: 24px; width: 30px" xmlns="http://www.w3.org/1999/xhtml">20</span></foreignobject><foreignobject style="overflow: visible;" y="24" x="0" height="24" width="30"><span className="ct-label ct-vertical ct-start" style="height: 24px; width: 30px" xmlns="http://www.w3.org/1999/xhtml">30</span></foreignobject><foreignobject style="overflow: visible;" y="0" x="0" height="24" width="30"><span className="ct-label ct-vertical ct-start" style="height: 24px; width: 30px" xmlns="http://www.w3.org/1999/xhtml">40</span></foreignobject><foreignobject style="overflow: visible;" y="-30" x="0" height="30" width="30"><span className="ct-label ct-vertical ct-start" style="height: 30px; width: 30px" xmlns="http://www.w3.org/1999/xhtml">50</span></foreignobject></g></svg></div>
                                </div>
                                <div className="card-content">
                                    <h4 className="title">Daily Sales</h4>
                                    <p className="category">
                                        <span className="text-success"><i className="fa fa-long-arrow-up"></i> 55% </span> increase in today sales.</p>
                                </div>
                                <div className="card-footer">
                                    <div className="stats">
                                        <i className="material-icons">access_time</i> updated 4 minutes ago
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header card-chart" data-background-color="orange">
                                    <div className="ct-chart" id="emailsSubscriptionChart"><svg xmlns:ct="http://gionkunz.github.com/chartist-js/ct" width="100%" height="100%" className="ct-chart-bar" style="width: 100%; height: 100%;"><g className="ct-grids"><line y1="120" y2="120" x1="40" x2="350" className="ct-grid ct-vertical"></line><line y1="96" y2="96" x1="40" x2="350" className="ct-grid ct-vertical"></line><line y1="72" y2="72" x1="40" x2="350" className="ct-grid ct-vertical"></line><line y1="48" y2="48" x1="40" x2="350" className="ct-grid ct-vertical"></line><line y1="24" y2="24" x1="40" x2="350" className="ct-grid ct-vertical"></line><line y1="0" y2="0" x1="40" x2="350" className="ct-grid ct-vertical"></line></g><g><g className="ct-series ct-series-a"><line x1="52.916666666666664" x2="52.916666666666664" y1="120" y2="54.959999999999994" className="ct-bar" ct:value="542" opacity="1"></line><line x1="78.75" x2="78.75" y1="120" y2="66.84" className="ct-bar" ct:value="443" opacity="1"></line><line x1="104.58333333333333" x2="104.58333333333333" y1="120" y2="81.6" className="ct-bar" ct:value="320" opacity="1"></line><line x1="130.41666666666666" x2="130.41666666666666" y1="120" y2="26.400000000000006" className="ct-bar" ct:value="780" opacity="1"></line><line x1="156.24999999999997" x2="156.24999999999997" y1="120" y2="53.64" className="ct-bar" ct:value="553" opacity="1"></line><line x1="182.08333333333331" x2="182.08333333333331" y1="120" y2="65.64" className="ct-bar" ct:value="453" opacity="1"></line><line x1="207.91666666666666" x2="207.91666666666666" y1="120" y2="80.88" className="ct-bar" ct:value="326" opacity="1"></line><line x1="233.74999999999997" x2="233.74999999999997" y1="120" y2="67.92" className="ct-bar" ct:value="434" opacity="1"></line><line x1="259.5833333333333" x2="259.5833333333333" y1="120" y2="51.84" className="ct-bar" ct:value="568" opacity="1"></line><line x1="285.4166666666667" x2="285.4166666666667" y1="120" y2="46.8" className="ct-bar" ct:value="610" opacity="1"></line><line x1="311.25" x2="311.25" y1="120" y2="29.28" className="ct-bar" ct:value="756" opacity="1"></line><line x1="337.0833333333333" x2="337.0833333333333" y1="120" y2="12.599999999999994" className="ct-bar" ct:value="895" opacity="1"></line></g></g><g className="ct-labels"><foreignobject style="overflow: visible;" x="40" y="125" width="25.833333333333332" height="20"><span className="ct-label ct-horizontal ct-end" style="width: 26px; height: 20px" xmlns="http://www.w3.org/1999/xhtml">Jan</span></foreignobject><foreignobject style="overflow: visible;" x="65.83333333333333" y="125" width="25.833333333333332" height="20"><span className="ct-label ct-horizontal ct-end" style="width: 26px; height: 20px" xmlns="http://www.w3.org/1999/xhtml">Feb</span></foreignobject><foreignobject style="overflow: visible;" x="91.66666666666666" y="125" width="25.833333333333336" height="20"><span className="ct-label ct-horizontal ct-end" style="width: 26px; height: 20px" xmlns="http://www.w3.org/1999/xhtml">Mar</span></foreignobject><foreignobject style="overflow: visible;" x="117.5" y="125" width="25.83333333333333" height="20"><span className="ct-label ct-horizontal ct-end" style="width: 26px; height: 20px" xmlns="http://www.w3.org/1999/xhtml">Apr</span></foreignobject><foreignobject style="overflow: visible;" x="143.33333333333331" y="125" width="25.83333333333333" height="20"><span className="ct-label ct-horizontal ct-end" style="width: 26px; height: 20px" xmlns="http://www.w3.org/1999/xhtml">Mai</span></foreignobject><foreignobject style="overflow: visible;" x="169.16666666666666" y="125" width="25.833333333333343" height="20"><span className="ct-label ct-horizontal ct-end" style="width: 26px; height: 20px" xmlns="http://www.w3.org/1999/xhtml">Jun</span></foreignobject><foreignobject style="overflow: visible;" x="195" y="125" width="25.833333333333314" height="20"><span className="ct-label ct-horizontal ct-end" style="width: 26px; height: 20px" xmlns="http://www.w3.org/1999/xhtml">Jul</span></foreignobject><foreignobject style="overflow: visible;" x="220.83333333333331" y="125" width="25.833333333333343" height="20"><span className="ct-label ct-horizontal ct-end" style="width: 26px; height: 20px" xmlns="http://www.w3.org/1999/xhtml">Aug</span></foreignobject><foreignobject style="overflow: visible;" x="246.66666666666666" y="125" width="25.833333333333343" height="20"><span className="ct-label ct-horizontal ct-end" style="width: 26px; height: 20px" xmlns="http://www.w3.org/1999/xhtml">Sep</span></foreignobject><foreignobject style="overflow: visible;" x="272.5" y="125" width="25.833333333333314" height="20"><span className="ct-label ct-horizontal ct-end" style="width: 26px; height: 20px" xmlns="http://www.w3.org/1999/xhtml">Oct</span></foreignobject><foreignobject style="overflow: visible;" x="298.3333333333333" y="125" width="25.833333333333314" height="20"><span className="ct-label ct-horizontal ct-end" style="width: 26px; height: 20px" xmlns="http://www.w3.org/1999/xhtml">Nov</span></foreignobject><foreignobject style="overflow: visible;" x="324.16666666666663" y="125" width="30" height="20"><span className="ct-label ct-horizontal ct-end" style="width: 30px; height: 20px" xmlns="http://www.w3.org/1999/xhtml">Dec</span></foreignobject><foreignobject style="overflow: visible;" y="96" x="0" height="24" width="30"><span className="ct-label ct-vertical ct-start" style="height: 24px; width: 30px" xmlns="http://www.w3.org/1999/xhtml">0</span></foreignobject><foreignobject style="overflow: visible;" y="72" x="0" height="24" width="30"><span className="ct-label ct-vertical ct-start" style="height: 24px; width: 30px" xmlns="http://www.w3.org/1999/xhtml">200</span></foreignobject><foreignobject style="overflow: visible;" y="48" x="0" height="24" width="30"><span className="ct-label ct-vertical ct-start" style="height: 24px; width: 30px" xmlns="http://www.w3.org/1999/xhtml">400</span></foreignobject><foreignobject style="overflow: visible;" y="24" x="0" height="24" width="30"><span className="ct-label ct-vertical ct-start" style="height: 24px; width: 30px" xmlns="http://www.w3.org/1999/xhtml">600</span></foreignobject><foreignobject style="overflow: visible;" y="0" x="0" height="24" width="30"><span className="ct-label ct-vertical ct-start" style="height: 24px; width: 30px" xmlns="http://www.w3.org/1999/xhtml">800</span></foreignobject><foreignobject style="overflow: visible;" y="-30" x="0" height="30" width="30"><span className="ct-label ct-vertical ct-start" style="height: 30px; width: 30px" xmlns="http://www.w3.org/1999/xhtml">1000</span></foreignobject></g></svg></div>
                                </div>
                                <div className="card-content">
                                    <h4 className="title">Email Subscriptions</h4>
                                    <p className="category">Last Campaign Performance</p>
                                </div>
                                <div className="card-footer">
                                    <div className="stats">
                                        <i className="material-icons">access_time</i> campaign sent 2 days ago
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header card-chart" data-background-color="red">
                                    <div className="ct-chart" id="completedTasksChart"><svg xmlns:ct="http://gionkunz.github.com/chartist-js/ct" width="100%" height="100%" className="ct-chart-line" style="width: 100%; height: 100%;"><g className="ct-grids"><line x1="40" x2="40" y1="0" y2="120" className="ct-grid ct-horizontal"></line><line x1="79.375" x2="79.375" y1="0" y2="120" className="ct-grid ct-horizontal"></line><line x1="118.75" x2="118.75" y1="0" y2="120" className="ct-grid ct-horizontal"></line><line x1="158.125" x2="158.125" y1="0" y2="120" className="ct-grid ct-horizontal"></line><line x1="197.5" x2="197.5" y1="0" y2="120" className="ct-grid ct-horizontal"></line><line x1="236.875" x2="236.875" y1="0" y2="120" className="ct-grid ct-horizontal"></line><line x1="276.25" x2="276.25" y1="0" y2="120" className="ct-grid ct-horizontal"></line><line x1="315.625" x2="315.625" y1="0" y2="120" className="ct-grid ct-horizontal"></line><line y1="120" y2="120" x1="40" x2="355" className="ct-grid ct-vertical"></line><line y1="96" y2="96" x1="40" x2="355" className="ct-grid ct-vertical"></line><line y1="72" y2="72" x1="40" x2="355" className="ct-grid ct-vertical"></line><line y1="48" y2="48" x1="40" x2="355" className="ct-grid ct-vertical"></line><line y1="24" y2="24" x1="40" x2="355" className="ct-grid ct-vertical"></line><line y1="0" y2="0" x1="40" x2="355" className="ct-grid ct-vertical"></line></g><g><g className="ct-series ct-series-a"><path d="M 40 92.4 C 79.375 30 79.375 30 79.375 30 C 118.75 66 118.75 66 118.75 66 C 158.125 84 158.125 84 158.125 84 C 197.5 86.4 197.5 86.4 197.5 86.4 C 236.875 91.2 236.875 91.2 236.875 91.2 C 276.25 96 276.25 96 276.25 96 C 315.625 97.2 315.625 97.2 315.625 97.2" className="ct-line"></path><line x1="40" y1="92.4" x2="40.01" y2="92.4" className="ct-point" ct:value="230" opacity="1"></line><line x1="79.375" y1="30" x2="79.385" y2="30" className="ct-point" ct:value="750" opacity="1"></line><line x1="118.75" y1="66" x2="118.76" y2="66" className="ct-point" ct:value="450" opacity="1"></line><line x1="158.125" y1="84" x2="158.135" y2="84" className="ct-point" ct:value="300" opacity="1"></line><line x1="197.5" y1="86.4" x2="197.51" y2="86.4" className="ct-point" ct:value="280" opacity="1"></line><line x1="236.875" y1="91.2" x2="236.885" y2="91.2" className="ct-point" ct:value="240" opacity="1"></line><line x1="276.25" y1="96" x2="276.26" y2="96" className="ct-point" ct:value="200" opacity="1"></line><line x1="315.625" y1="97.2" x2="315.635" y2="97.2" className="ct-point" ct:value="190" opacity="1"></line></g></g><g className="ct-labels"><foreignobject style="overflow: visible;" x="40" y="125" width="39.375" height="20"><span className="ct-label ct-horizontal ct-end" style="width: 39px; height: 20px" xmlns="http://www.w3.org/1999/xhtml">12am</span></foreignobject><foreignobject style="overflow: visible;" x="79.375" y="125" width="39.375" height="20"><span className="ct-label ct-horizontal ct-end" style="width: 39px; height: 20px" xmlns="http://www.w3.org/1999/xhtml">3pm</span></foreignobject><foreignobject style="overflow: visible;" x="118.75" y="125" width="39.375" height="20"><span className="ct-label ct-horizontal ct-end" style="width: 39px; height: 20px" xmlns="http://www.w3.org/1999/xhtml">6pm</span></foreignobject><foreignobject style="overflow: visible;" x="158.125" y="125" width="39.375" height="20"><span className="ct-label ct-horizontal ct-end" style="width: 39px; height: 20px" xmlns="http://www.w3.org/1999/xhtml">9pm</span></foreignobject><foreignobject style="overflow: visible;" x="197.5" y="125" width="39.375" height="20"><span className="ct-label ct-horizontal ct-end" style="width: 39px; height: 20px" xmlns="http://www.w3.org/1999/xhtml">12pm</span></foreignobject><foreignobject style="overflow: visible;" x="236.875" y="125" width="39.375" height="20"><span className="ct-label ct-horizontal ct-end" style="width: 39px; height: 20px" xmlns="http://www.w3.org/1999/xhtml">3am</span></foreignobject><foreignobject style="overflow: visible;" x="276.25" y="125" width="39.375" height="20"><span className="ct-label ct-horizontal ct-end" style="width: 39px; height: 20px" xmlns="http://www.w3.org/1999/xhtml">6am</span></foreignobject><foreignobject style="overflow: visible;" x="315.625" y="125" width="39.375" height="20"><span className="ct-label ct-horizontal ct-end" style="width: 39px; height: 20px" xmlns="http://www.w3.org/1999/xhtml">9am</span></foreignobject><foreignobject style="overflow: visible;" y="96" x="0" height="24" width="30"><span className="ct-label ct-vertical ct-start" style="height: 24px; width: 30px" xmlns="http://www.w3.org/1999/xhtml">0</span></foreignobject><foreignobject style="overflow: visible;" y="72" x="0" height="24" width="30"><span className="ct-label ct-vertical ct-start" style="height: 24px; width: 30px" xmlns="http://www.w3.org/1999/xhtml">200</span></foreignobject><foreignobject style="overflow: visible;" y="48" x="0" height="24" width="30"><span className="ct-label ct-vertical ct-start" style="height: 24px; width: 30px" xmlns="http://www.w3.org/1999/xhtml">400</span></foreignobject><foreignobject style="overflow: visible;" y="24" x="0" height="24" width="30"><span className="ct-label ct-vertical ct-start" style="height: 24px; width: 30px" xmlns="http://www.w3.org/1999/xhtml">600</span></foreignobject><foreignobject style="overflow: visible;" y="0" x="0" height="24" width="30"><span className="ct-label ct-vertical ct-start" style="height: 24px; width: 30px" xmlns="http://www.w3.org/1999/xhtml">800</span></foreignobject><foreignobject style="overflow: visible;" y="-30" x="0" height="30" width="30"><span className="ct-label ct-vertical ct-start" style="height: 30px; width: 30px" xmlns="http://www.w3.org/1999/xhtml">1000</span></foreignobject></g></svg></div>
                                </div>
                                <div className="card-content">
                                    <h4 className="title">Completed Tasks</h4>
                                    <p className="category">Last Campaign Performance</p>
                                </div>
                                <div className="card-footer">
                                    <div className="stats">
                                        <i className="material-icons">access_time</i> campaign sent 2 days ago
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="card card-nav-tabs">
                                <div className="card-header" data-background-color="purple">
                                    <div className="nav-tabs-navigation">
                                        <div className="nav-tabs-wrapper">
                                            <span className="nav-tabs-title">Tasks:</span>
                                            <ul className="nav nav-tabs" data-tabs="tabs">
                                                <li className="active">
                                                    <a href="http://demos.creative-tim.com/material-dashboard/examples/dashboard.html?_ga=2.28571388.179549990.1512119107-699052212.1512119107#profile" data-toggle="tab">
                                                        <i className="material-icons">bug_report</i> Bugs
                                                        <div className="ripple-container"></div>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="http://demos.creative-tim.com/material-dashboard/examples/dashboard.html?_ga=2.28571388.179549990.1512119107-699052212.1512119107#messages" data-toggle="tab">
                                                        <i className="material-icons">code</i> Website
                                                        <div className="ripple-container"></div>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="http://demos.creative-tim.com/material-dashboard/examples/dashboard.html?_ga=2.28571388.179549990.1512119107-699052212.1512119107#settings" data-toggle="tab">
                                                        <i className="material-icons">cloud</i> Server
                                                        <div className="ripple-container"></div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <div className="tab-content">
                                        <div className="tab-pane active" id="profile">
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="checkbox">
                                                                <label>
                                                                    <input type="checkbox" name="optionsCheckboxes" checked=""><span className="checkbox-material"><span className="check"></span></span>
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>Sign contract for "What are conference organizers afraid of?"</td>
                                                        <td className="td-actions text-right">
                                                            <button type="button" rel="tooltip" title="" className="btn btn-primary btn-simple btn-xs" data-original-title="Edit Task">
                                                                <i className="material-icons">edit</i>
                                                            </button>
                                                            <button type="button" rel="tooltip" title="" className="btn btn-danger btn-simple btn-xs" data-original-title="Remove">
                                                                <i className="material-icons">close</i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="checkbox">
                                                                <label>
                                                                    <input type="checkbox" name="optionsCheckboxes"><span className="checkbox-material"><span className="check"></span></span>
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                                                        <td className="td-actions text-right">
                                                            <button type="button" rel="tooltip" title="" className="btn btn-primary btn-simple btn-xs" data-original-title="Edit Task">
                                                                <i className="material-icons">edit</i>
                                                            </button>
                                                            <button type="button" rel="tooltip" title="" className="btn btn-danger btn-simple btn-xs" data-original-title="Remove">
                                                                <i className="material-icons">close</i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="checkbox">
                                                                <label>
                                                                    <input type="checkbox" name="optionsCheckboxes"><span className="checkbox-material"><span className="check"></span></span>
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                                                        </td>
                                                        <td className="td-actions text-right">
                                                            <button type="button" rel="tooltip" title="" className="btn btn-primary btn-simple btn-xs" data-original-title="Edit Task">
                                                                <i className="material-icons">edit</i>
                                                            </button>
                                                            <button type="button" rel="tooltip" title="" className="btn btn-danger btn-simple btn-xs" data-original-title="Remove">
                                                                <i className="material-icons">close</i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="checkbox">
                                                                <label>
                                                                    <input type="checkbox" name="optionsCheckboxes" checked=""><span className="checkbox-material"><span className="check"></span></span>
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>Create 4 Invisible User Experiences you Never Knew About</td>
                                                        <td className="td-actions text-right">
                                                            <button type="button" rel="tooltip" title="" className="btn btn-primary btn-simple btn-xs" data-original-title="Edit Task">
                                                                <i className="material-icons">edit</i>
                                                            </button>
                                                            <button type="button" rel="tooltip" title="" className="btn btn-danger btn-simple btn-xs" data-original-title="Remove">
                                                                <i className="material-icons">close</i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="tab-pane" id="messages">
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="checkbox">
                                                                <label>
                                                                    <input type="checkbox" name="optionsCheckboxes" checked=""><span className="checkbox-material"><span className="check"></span></span>
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                                                        </td>
                                                        <td className="td-actions text-right">
                                                            <button type="button" rel="tooltip" title="" className="btn btn-primary btn-simple btn-xs" data-original-title="Edit Task">
                                                                <i className="material-icons">edit</i>
                                                            </button>
                                                            <button type="button" rel="tooltip" title="" className="btn btn-danger btn-simple btn-xs" data-original-title="Remove">
                                                                <i className="material-icons">close</i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="checkbox">
                                                                <label>
                                                                    <input type="checkbox" name="optionsCheckboxes"><span className="checkbox-material"><span className="check"></span></span>
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>Sign contract for "What are conference organizers afraid of?"</td>
                                                        <td className="td-actions text-right">
                                                            <button type="button" rel="tooltip" title="" className="btn btn-primary btn-simple btn-xs" data-original-title="Edit Task">
                                                                <i className="material-icons">edit</i>
                                                            </button>
                                                            <button type="button" rel="tooltip" title="" className="btn btn-danger btn-simple btn-xs" data-original-title="Remove">
                                                                <i className="material-icons">close</i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="tab-pane" id="settings">
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="checkbox">
                                                                <label>
                                                                    <input type="checkbox" name="optionsCheckboxes"><span className="checkbox-material"><span className="check"></span></span>
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                                                        <td className="td-actions text-right">
                                                            <button type="button" rel="tooltip" title="" className="btn btn-primary btn-simple btn-xs" data-original-title="Edit Task">
                                                                <i className="material-icons">edit</i>
                                                            </button>
                                                            <button type="button" rel="tooltip" title="" className="btn btn-danger btn-simple btn-xs" data-original-title="Remove">
                                                                <i className="material-icons">close</i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="checkbox">
                                                                <label>
                                                                    <input type="checkbox" name="optionsCheckboxes" checked=""><span className="checkbox-material"><span className="check"></span></span>
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                                                        </td>
                                                        <td className="td-actions text-right">
                                                            <button type="button" rel="tooltip" title="" className="btn btn-primary btn-simple btn-xs" data-original-title="Edit Task">
                                                                <i className="material-icons">edit</i>
                                                            </button>
                                                            <button type="button" rel="tooltip" title="" className="btn btn-danger btn-simple btn-xs" data-original-title="Remove">
                                                                <i className="material-icons">close</i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="checkbox">
                                                                <label>
                                                                    <input type="checkbox" name="optionsCheckboxes"><span className="checkbox-material"><span className="check"></span></span>
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>Sign contract for "What are conference organizers afraid of?"</td>
                                                        <td className="td-actions text-right">
                                                            <button type="button" rel="tooltip" title="" className="btn btn-primary btn-simple btn-xs" data-original-title="Edit Task">
                                                                <i className="material-icons">edit</i>
                                                            </button>
                                                            <button type="button" rel="tooltip" title="" className="btn btn-danger btn-simple btn-xs" data-original-title="Remove">
                                                                <i className="material-icons">close</i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="card">
                                <div className="card-header" data-background-color="orange">
                                    <h4 className="title">Employees Stats</h4>
                                    <p className="category">New employees on 15th September, 2016</p>
                                </div>
                                <div className="card-content table-responsive">
                                    <table className="table table-hover">
                                        <thead className="text-warning">
                                            <tr><th>ID</th>
                                            <th>Name</th>
                                            <th>Salary</th>
                                            <th>Country</th>
                                        </tr></thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Dakota Rice</td>
                                                <td>$36,738</td>
                                                <td>Niger</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Minerva Hooper</td>
                                                <td>$23,789</td>
                                                <td>Curaçao</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Sage Rodriguez</td>
                                                <td>$56,142</td>
                                                <td>Netherlands</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Philip Chaney</td>
                                                <td>$38,735</td>
                                                <td>Korea, South</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
        );
    }
}
