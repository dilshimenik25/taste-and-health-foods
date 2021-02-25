import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Link} from 'react-router-dom';
import background from "./imgs/logo.png";

function App() {
  const openMenu = () =>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () =>{
    document.querySelector(".sidebar").classList.remove("open");
  }

  return (
    <BrowserRouter>

    <div className="grid-container">
     <header className="header">
       <div className="brand">
         <button onClick={openMenu} >
           &#9776;
         </button>
         <Link to="/">Taste & Health Foods</Link>

          </div>
         <div className="sub" style={{ backgroundImage: `url(${background})` }}>
        </div>

       <div className="header-links">
         <a href="order.html">Order</a>&nbsp;
         <a href="signin.html">Sign In</a>
       </div>
     </header>
     <aside className="sidebar">
       <h3>Menu Meals</h3>
       <button className="sidebar-close-button" onClick={closeMenu} >x</button>
       <ul>
         <li>
           <a href="breakfast.html">Breakfast</a>
         </li>
         <li>
           <a href="lunch.html">Lunch</a>
         </li>
         <li>
           <a href="dinner.html">Dinner</a>
         </li>
         </ul>
         <hr/>
         <h3>Short Eats</h3>
         <ul>
         <li>
           <a href="shorteats.html">Short Eates</a>
         </li>
         </ul>
         <hr/>
         <h3>Drinks</h3>
        <ul>
         <li>
           <a href="friut.html">Fruit Juice</a>
         </li>
       </ul>
     </aside>
     <main className="main">

     </main>
     <footer className="footer">
       All right reserved.
     </footer>
   </div>
   </BrowserRouter>
  );
}

export default App;
