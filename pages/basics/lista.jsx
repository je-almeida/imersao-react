export default function lista() {
 return (
     <ul>
         {list()}
     </ul>
 )
}

function list() {
    const list = [
        <li key={1}>1,</li>,
        <li key={2}>2,</li>,
        <li key={3}>3,</li>,
        <li key={4}>4,</li>,
    ]

    return list
}