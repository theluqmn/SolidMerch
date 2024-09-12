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
        <Card rounded={true} flat= {false}>
          <h2>Solid blue</h2>
          <p>Epic blue color, that is very iconic and very blue.</p>
          <button class="btn">Get now</button>
        </Card>
        <Card rounded={true} flat={false}>
          <h2>Navy blue</h2>
          <p>Deep blue color, very premium, old money ahh color.</p>
          <button class="btn">Get now</button>
        </Card>
      </div>
    </div>
  );
}

export default App;
