import { useState } from "react"

export default function InputsSection() {

    const [results, setResults] = useState({ initialInvestment: 0, annualInvestment: 0, expectedReturn: 0, duration: 0 })


    return (
        <div id="user-input">
            <section className="input-group">
                <p>
                    <label>Initial investment</label>
                    <input type="number" min="0"></input>
                </p>
                <p>
                    <label>Annual investment</label>
                    <input type="number" min="0"></input>
                </p>
            </section>
            < section className="input-group">
                <p>
                    <label>Expected return</label>
                    <input type="number" min="0"></input>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" min="0"></input>
                </p>
            </section>
        </div >
    )
}