import  Card from "../components/Card";
import { useCartContext } from "../context/CartContext";

export default function Cart() {
    const { items } = mucho
    
    return (
        <div class="max-w-md my-8 mx-auto">
            <Card>
              <h2>Solidarity</h2>
                <For each={items}>
                    {(item) => (
                        <p class="my-3">{item.title} - 142 x 755</p>
                    )}
                </For>
            </Card>
        <h5>404! Yikes. That's an error.</h5>
        </div>
    );
};
