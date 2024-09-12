export default function Card(props) {
    return (
        <div class="bg-white p-4  text-center rounded-md shadow-ms">
            <h2>{props.title}</h2>
            <p>
                Greetings there, this is a card component that is reusable anywhere!
            </p>
            <button class="btn">Click me</button>
        </div>
    )
}