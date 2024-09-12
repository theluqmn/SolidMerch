import banner from './assets/banner.png'
import Card from './components/Card';

function App() {
  console.log("Hello World");
  
  return (
    <div>
      <header class="cointainer m-auto">
        <h1>
          Solid Merch
        </h1>
      </header>

      <img class= "rounded-md"src={banner} alt="site banner"></img>

      <div class= "grid grid-cols-3 gap-4 my-4">
        <Card title= "Epic"/>
        <Card title= "Wow this works?"/>
        <Card />
      </div>
    </div>
  );
}

export default App;
