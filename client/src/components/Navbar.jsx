import './Navbar.css';

function Navbar(){
    return (
        <nav>
  <div class="nav-brand">TaskFlow</div>
  <ul>
    <li><a href="#" class="active">Home</a></li>
    <li><a href="#">About Us</a></li>
    <li><a href="#">Features</a></li>
  </ul>
  <button class="nav-cta">Get Started</button>
</nav>
    );
}
export default Navbar; 
