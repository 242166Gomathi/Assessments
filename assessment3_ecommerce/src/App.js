import React from 'react';
import './App.css'; 
import ProductList from '../src/component/ProductList'; 
// import Footer from '../src/component/Footer'; 


function App() {
  return (
    <div className="App">
      <header className="header">
        <h2>Welcome to My Online Store<br/>Explore our wide range of products</h2>
      </header>
      <main className="content">
        <ProductList />
      </main>
      <footer className="footer">
        <p>&copy; 2024 My Online Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
