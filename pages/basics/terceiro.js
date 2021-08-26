export default function Jsx() {

    const array = [
        <li key={1}>X1</li>,
        <li key={2}>X2</li>,
        <li key={3}>X3</li>
    ]

    const content = (
        <div>
            <h1>JSX ##</h1>
            {array}
        </div>
    )

    return content
}