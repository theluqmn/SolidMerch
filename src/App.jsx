import banner from './assets/banner.png'
import Card from './components/Card';

function App() {
  console.log("Hello World");
  
  return (
    <div>
      <header>
        <h1>
          Solid Merch
        </h1>
      </header>

      <img src={banner} alt="site banner"></img>

      <Card />
    </div>
  );
}

export default App;
