import { useState } from "react"
import Header from "./components/Header.jsx"
import InputsSection from "./components/InputsSection.jsx"
import Result from "./components/Result.jsx"
import { calculateInvestmentResults } from "./util/investment.js"
import { formatter } from "./util/investment.js"

// initialInvestment,
//   annualInvestment,
//   expectedReturn,
//   duration


function App() {

  return (
    <>
      <Header />
      <InputsSection />
      <Result result={data} />
    </>
  )
}

export default App
