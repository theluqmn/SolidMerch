import { useParams } from "@solidjs/router"
import { createResource } from "solid-js"

const fetchData = async (id) => {
    const res = await fetch("http://localhost:4000/products/" + id)
    return res.json()
}

export default function Product() {
    const params = useParams()

    const [data] = createResource(params.id, fetchData)

    return (
        <div class="my-7">
            <Show when={data()} fallback={<p>Loading...</p>}>
                <div class="grid grid-cols-5 gap-7">
                    <div class="col-span-2">
                        <img src={data().image} alt="product image"/>
                    </div>

                    <div class="col-span-3">
                        <h2 class="text-3xl font-bold mb-7">{data().title}</h2>
                        <p>{data().description}</p>
                        <p class="my-7 text-2xl">Price: {data().price}</p>
                    </div>
                </div>
            </Show>
        </div>
    )
}