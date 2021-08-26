import styles from "./lista2.module.css"

export default () => {
    return (
        <>
            {/* usando fragment: <></> */}
            <ul key="1">
                {generateList(4)}
            </ul>
            <ul key="2">
                {generateList(15)}
            </ul>
        </>
    )
}

function generateList(count) {

    const list = []

    for(let i=0; i<count; i++) {
        list.push(<li className={styles.li} key={i+count}>{i+1},</li>)
    }

    return list
}