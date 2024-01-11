export default function Result({ result }) {

    let data = []
    if (result) {
        data = result.map(row => <tr><td>{row.year}</td><td>{row.interest}</td><td>{row.valueEndOfYear}</td><td>{row.annualInvestment}</td></tr>)
    }
    return (
        <div  >
            <table id="result" className="center">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest(Year)</th>
                        <th>Total Interest</th>
                        <th>Invested capital</th>
                    </tr>
                </thead>
                <tbody>
                    {data}
                </tbody>
            </table>
        </div>
    )
}