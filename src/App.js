import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Amountproducts from './components/Amountproducts';
import Totalproducts from './components/Totalproducts';
import Totalusers from './components/Totalusers';
import Lastproduct from './components/Lastproduct';
import Categories from './components/Categories';
import { Link } from 'react-router-dom';



function App() {
  return (

  <div id="wrapper">
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" rel="stylesheet"></link>
	    <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet"></link>
      <Sidebar />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Topbar />
          <div class="container-fluid">				
					  <div class="d-sm-flex align-items-center justify-content-between mb-4">
						  <h1 class="h3 mb-0 text-gray-800">App Dashboard</h1>
					  </div>
            <div class="row">
              <Totalproducts />
              <Amountproducts />
              <Totalusers />
            </div>
            <div class="row">
              <Lastproduct />
              <Categories />
            </div>
          </div>
        </div>
        <footer class="sticky-footer bg-white">
				<div class="container my-auto">
					<div class="copyright text-center my-auto">
						<span>Copyright &copy; Dashboard 2020</span>
					</div>
				</div>
			</footer>
      </div>  
    </div>  
  );
}

export default App;
