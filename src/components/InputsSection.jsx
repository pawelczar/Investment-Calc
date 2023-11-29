export default function InputsSection() {
    return (
        <div id="user-input">
            <div className="input-group">
                <label>Initial investment <input type="number" min="0"></input></label>
                <label>Annual investment <input type="number" min="0"></input></label>
            </div>
            < div className="input-group">
                <label>Expected return <input type="number" min="0"></input></label>
                <label>Duration <input type="number" min="0"></input></label>
            </div>
        </div >
    )
}