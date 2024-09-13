import Card from "../components/Card"
import { createResource } from "solid-js"
import { A } from "@solidjs/router"

const fetchData = async () => {
  const res = await fetch("http://localhost:4000/products")
  return res.json()
}

export default function Home() {
  const [data] = createResource(fetchData)

  return (
    <Show when={data()} fallback={<p>Loading data</p>}>
      <div class= "grid grid-cols-3 gap-4 my-4">
        <For each={data()}>
          {(product) => (
            <Card rounded={true} flat={false}>
              <img src={product.image} alt="product image"/>
              <h2 class="my-3 font-bold">{product.title}</h2>
              <A href={"/product/"+product.id} class= "btn">View product</A>
            </Card>
          )}
        </For>
      </div>
    </Show>
  )
}