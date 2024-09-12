import { createSignal } from 'solid-js';
import banner from './assets/banner.png'
import Card from './components/Card';

function App() {
  console.log("Hello World");

  const [darkTheme, setDarkTheme] = createSignal(false);
  
  function toggleTheme() {
    setDarkTheme(!darkTheme());
  };

  return (
    <div class="container m-auto">
      <header 
        class="my-4 p-2 text-xl flex items-center gap-4"
        classList={{"bg-neutral-900": darkTheme(), "text-white": darkTheme()}}
      >
        <span 
          class="material-symbols-outlined cursor-pointer"
          onClick={toggleTheme}
        >
          light_mode
        </span>
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
};

export default App;
