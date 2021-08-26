export default function lista() {
 return (
     <ul>
         {list()}
     </ul>
 )
}

function list() {
    const list = [
        <li>1,</li>,
        <li>2,</li>,
        <li>3,</li>,
        <li>4,</li>,
    ]

    return list
}