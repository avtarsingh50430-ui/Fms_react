import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  let navigate = useNavigate();
  const [update, setUpdate] = useState(0);
  const loginData = JSON.parse(localStorage.getItem('logindetail'));
  
  useEffect(() => {
    const handleMenuClick = (event) => {
      const target = event.currentTarget;
      const dropdownMenu = target.querySelector('.dropdown-menu');
      if (dropdownMenu) {
        dropdownMenu.classList.toggle('show');
      }
    };

    document.querySelectorAll('.dropdown').forEach((item) => {
      item.addEventListener('click', handleMenuClick);
    });

    return () => {
      document.querySelectorAll('.dropdown').forEach((item) => {
        item.removeEventListener('click', handleMenuClick);
      });
    };
  }, []);

  useEffect(() => {
    if (!loginData || (loginData.role !== 'admin' && loginData.role !== 'agent')) {
      navigate('/alllogin');
    }
  }, [update, navigate]);

  const logout = () => {
    setUpdate(update + 1);
    localStorage.removeItem('logindetail');
  };

  return (
    <aside className="main-sidebar">
      <section className="sidebar" style={{ height: 'auto' }}>
        <ul className="sidebar-menu tree" data-widget="tree">
          {/* Dashboard */}
          <li className="nav-item dropdown" id="dashboardMainMenu">
            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
              <i className="fa fa-dashboard" /> <span>Dashboard</span>
            </a>
            <ul className="dropdown-menu bg-dark text-light">
              <li className="nav-item"><Link className="dropdown-item" to="/accounting"><i className="fa fa-circle-o" /> Accounting</Link></li>
              <li className="nav-item"><Link className="dropdown-item" to="/admin"><i className="fa fa-circle-o" /> Control Panel</Link></li>
            </ul>
          </li>

          <li className="nav-item"><Link className="nav-link" to="/driverpaylist"><i className="fa fa-user" /> <span>Driver pay list</span></Link></li>
          <li className="nav-item"><Link className="nav-link" to="/driverbulkupload"><i className="fa fa-user" /> <span>Driver Bulk Upload</span></Link></li>
          <li className="nav-item"><Link className="nav-link" to="/truckbulk"><i className="fa fa-user" /> <span>Truck Bulk Upload</span></Link></li>
          <li className="nav-item"><Link className="nav-link" to="/financeManager"><i className="fa fa-user" /> <span>financeManager</span></Link></li>
          <li className="nav-item"><Link className="nav-link" to="/getOrderincome"><i className="fa fa-user" /> <span>Order Income</span></Link></li>
          <li className="nav-item"><Link className="nav-link" to="/ordertripIncome"><i className="fa fa-user" /> <span>Order Trip Income</span></Link></li>
          <li className="nav-item"><Link className="nav-link" to="/getexpense"><i className="fa fa-user" /> <span>Expense</span></Link></li>
          <li className="nav-item"><Link className="nav-link" to="/gettripIncome"><i className="fa fa-user" /> <span>Trip Income</span></Link></li>
          <li className="nav-item"><Link className="nav-link" to="/netincometable"><i className="fa fa-user" /> <span>Net Income by Location</span></Link></li>
          <li className="nav-item"><Link className="nav-link" to="/tripsmap"><i className="fa fa-circle-o" /> Live Update Map</Link></li>
          <li className="nav-item"><Link className="nav-link" to={'/DispatchBoard'}><i className="fa fa-circle-o" />Dispatch Board /<br/> Freight board </Link></li>
          <li className="nav-item"><Link className="nav-link" to={'/borderconnect/acetripform'}><i className="fa fa-circle-o" />Border Connect ACE  </Link></li>
          <li className="nav-item"><Link className="nav-link" to={'/borderconnect/acitripform'}><i className="fa fa-circle-o" />Border Connect ACI </Link></li>
          <li className="nav-item"><Link className="nav-link" to={'/custompage'}><i className="fa fa-circle-o" />Custom Page </Link></li>
          <li className="nav-item"><Link className="nav-link" to={'/listcoversheet'}><i className="fa fa-circle-o" />list cover sheet</Link></li>
          <li className="nav-item"><Link className="nav-link" to={'/trailerPerformance'}><i className="fa fa-circle-o" />Trailer Performance</Link></li>
          
          <li className="nav-item" id="iftaMenu">
            <Link className="nav-link" to="/iftalist">
              <i className="fa fa-file-text" /> <span> eManifest Portal</span>
            </Link>
          </li>
          <li className="nav-item" id="iftaMenu">
            <Link className="nav-link" to="/ifta">
              <i className="fa fa-file-text" /> <span>IFTA </span>
            </Link>
          </li>
         
          <li className="nav-item dropdown" id="InvoiceMainNav">
            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
              <i className="fa fa-files-o" />
              <span>Invoices</span>
            </a>
            <ul className="dropdown-menu bg-dark text-light">
              <li className="nav-item" id="manageInvoiceSubMenu">
                <Link className="dropdown-item" to={'/invoices'}>
                  <i className="fa fa-circle-o" /> Manage Invoices
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item dropdown" id="InvoiceMainNav">
            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
              <i className="fa fa-files-o" />
              <span>Go Motive Data</span>
            </a>
            <ul className="dropdown-menu bg-dark text-light">
              <li className="nav-item" id="manageInvoiceSubMenu">
                <Link className="dropdown-item" to={'/gomotive/vehicletable'}>
                  <i className="fa fa-circle-o" /> Manage Vehicle Data
                </Link>
              </li>
              <li className="nav-item" id="manageInvoiceSubMenu">
                <Link className="dropdown-item" to={'/gomotive/gomotiveusers'}>
                  <i className="fa fa-circle-o" /> Manage Driver Behavior
                </Link>
              </li>
              <li className="nav-item" id="manageInvoiceSubMenu">
                <Link className="dropdown-item" to={'/gomotive/logtable'}>
                  <i className="fa fa-circle-o" /> Manage Log Table
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item dropdown" id="InvoiceMainNav">
            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
              <i className="fa fa-files-o" />
              <span>Samsara Data</span>
            </a>
            <ul className="dropdown-menu bg-dark text-light">
              <li className="nav-item" id="manageInvoiceSubMenu">
                <Link className="dropdown-item" to={'/samsara/samsarausers'}>
                  <i className="fa fa-circle-o" /> Manage Driver Behavior
                </Link>
              </li>
            </ul>
          </li>

          {/* Agents */}
          <li className="nav-item dropdown" id="agentMainMenu">
            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
              <i className="fa fa-user" /> <span>Agents</span>
            </a>
            <ul className="dropdown-menu bg-dark text-light">
              <li className="nav-item"><Link className="dropdown-item" to="/createagent"><i className="fa fa-circle-o" /> Create Agent</Link></li>
              <li className="nav-item"><Link className="dropdown-item" to="/agentlist"><i className="fa fa-circle-o" /> Agent List</Link></li>
            </ul>
          </li>

          {/* Orders */}
          <li className="nav-item dropdown" id="OrderMainNav">
            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
              <i className="fa fa-files-o" /> <span>Orders</span>
            </a>
            <ul className="dropdown-menu bg-dark text-light">
              <li className="nav-item"><Link className="dropdown-item" to="/createorder"><i className="fa fa-circle-o" /> Create Orders</Link></li>
              <li className="nav-item"><Link className="dropdown-item" to="/orderlist"><i className="fa fa-circle-o" /> Manage Orders</Link></li>
            </ul>
          </li>

          {/* Trips */}
          <li className="nav-item dropdown" id="TripMainNav">
            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
              <i className="fa fa-map" /> <span>Trips</span>
            </a>
            <ul className="dropdown-menu bg-dark text-light">
              <li className="nav-item"><Link className="dropdown-item" to="/tripsmap"><i className="fa fa-circle-o" /> Live Update Map</Link></li>
              <li className="nav-item"><Link className="dropdown-item" to="/createtrips"><i className="fa fa-circle-o" /> Create Trips</Link></li>
              <li className="nav-item"><Link className="dropdown-item" to="/triplist"><i className="fa fa-circle-o" /> Manage Trips</Link></li>
            </ul>
          </li>

          <li className="nav-item"><Link className="nav-link" to="/driverdutynotification"><i className="fa fa-user" /> <span>Driver Duty Notification</span></Link></li>

          {/* Reports */}
          <li className="nav-item dropdown" id="ReportMainNav">
            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
              <i className="fa fa-files-o" /> <span>Reports</span>
            </a>
            <ul className="dropdown-menu bg-dark text-light">
              <li className="nav-item"><a className="dropdown-item" href="#"><i className="fa fa-circle-o" /> Product Wise</a></li>
              <li className="nav-item"><a className="dropdown-item" href="#"><i className="fa fa-circle-o" /> Total Store Wise</a></li>
            </ul>
          </li>

          {/* Configurations & Profile */}
          {loginData?.role === 'admin' && (
            <>
              <li className="nav-item"><Link className="nav-link" to="/profile"><i className="fa fa-user" /> <span>Profile</span></Link></li>
              <li className="nav-item"><Link className="nav-link" to="/users/setting"><i className="fa fa-wrench" /> <span>Settings</span></Link></li>
              <li className="nav-item"><Link className="nav-link" to="/configurations"><i className="fa fa-cog" /> <span>Configurations</span></Link></li>
              <li className="nav-item"><Link className="nav-link" to="/orderhistory"><i className="fa fa-history" /> <span>Order History</span></Link></li>
            </>
          )}

          {/* Logout */}
          <li className="nav-item">
            <a className="nav-link" onClick={logout} style={{cursor: 'pointer'}}>
              <i className="glyphicon glyphicon-log-out" /> <span>Logout</span>
            </a>
          </li>
        </ul>
      </section>
    </aside>
  );
};

export default Sidebar;