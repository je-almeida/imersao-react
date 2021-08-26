import styles from '../pages/desafios/megasena/styles.module.css'
export default (props) => {
    const number = props.number < 10 ? ("0"+props.number) : props.number;
    return (
        <div className={styles.number}>{number}</div>
    )    
}
