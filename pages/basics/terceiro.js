export default function Jsx() {

    const array = [
        <li>X1</li>,
        <li>X2</li>,
        <li>X3</li>
    ]

    const content = (
        <div>
            <h1>JSX ##</h1>
            {array}
        </div>
    )

    return content
}