

const App = () => {
    return (
        <div className="mainContainer">
            <div className="container left">
                <div className="billContainer">
                    <h2>Bill</h2>
                    <input className="billInput price"></input>
                </div>
                <div className="tipContainer">
                     <h2>Select Tip %</h2>
                        <div className="tipOptions">
                            <div className="buttonTip">5%</div>
                            <div className="buttonTip">10%</div>
                            <div className="buttonTip">15%</div>
                            <div className="buttonTip">25%</div>
                            <div className="buttonTip">50%</div>
                            <div className="customTip"><input placeholder="Custom"></input></div>
                        </div>
                </div>
                <div className="numberPeopleContainer">
                    <h2>Number of People</h2>
                    <input className="billInput people"></input>
                </div>
            </div>
             
            
            <div className="container right">
                <div className="total tip">
                    <div className="totalLabels">
                        <div >
                            <h2>Tip Amount</h2>
                            <h3>/ person</h3>
                        </div>
                       <h2 className="totalCostPerson">0.00</h2>
                    </div>
                    <div className="totalLabels">
                        <div >
                            <h2>Tip Amount</h2>
                            <h3>/ person</h3>
                        </div>
                        <h2 className="totalCostPerson">0.00</h2>
                    </div>
                </div>
                <button className="resetButton">RESET</button>
            </div>      
        </div>
    )
}
export default App