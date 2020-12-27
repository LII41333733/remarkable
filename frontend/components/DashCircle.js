export const DashCircle = ({ styles = null, icon, onClick = null }) => {
    return <>
        <div onClick={onClick} style={styles} className="dash-circle tc cursor">
            <div className="dash-circle2"><div className="dash-icon">{icon}</div></div>
        </div>
    </>
}