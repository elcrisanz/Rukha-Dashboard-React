import React from 'react';
function Sidebar() {
	return (
		<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
			<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<div className="sidebar-brand-icon">
					<i className="fas fa-chart-line icons"></i>
				</div>
				<div className="sidebar-brand-text mx-3">Admin</div>
			</a>
			<hr className="sidebar-divider my-0"></hr>
			<li className="nav-item active">
				<a className="nav-link" href="/">
					<i className="fas fa-fw fa-tachometer-alt icons"></i>
					<span>Tablero</span></a>
			</li>
			<hr className="sidebar-divider"></hr>
			<div className="sidebar-heading">Acciones</div>
			<li className="nav-item">
				<a className="nav-link collapsed" href="/">
					<i className="fas fa-fw fa-folder icons"></i>
					<span>Páginas</span>
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="/">
					<i className="fas fa-fw fa-chart-area icons"></i>
					<span>Gráficos</span></a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="/">
					<i className="fas fa-fw fa-table icons" ></i>
					<span>Tablas</span></a>
			</li>
			<hr className="sidebar-divider d-none d-md-block"></hr>
		</ul>	
    )
}

export default Sidebar;
