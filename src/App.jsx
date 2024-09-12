import { createSignal } from 'solid-js';

import banner from './assets/banner.png'

function App(props) {
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

      {props.children}
    </div>
  );
};

export default App;
