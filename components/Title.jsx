export default function Title(props) {
    console.log(props)
    return (
        <h1 className={props.className}>{props.children}</h1>
    )
}