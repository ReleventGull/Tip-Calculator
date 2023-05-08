import { useEffect, useState } from "react"
const buttonData = [
    {
        id: 1,
        name: '5%',
        value: .05
    },
    {
        id: 2,
        name: '10%',
        value: .1
    },
    {
        id: 3,
        name: '15%',
        value: .15
    },
    {
        id: 4,
        name: '25%',
        value: .25
    },
    {
        id: 5,
        name: '50%',
        value: .5
    },
    ]
 

const App = () => {
    const [bill, setBill] = useState()
    const [numberOfPeople, setNumberOfPeople] = useState()
    const [customTip, setCustomTip] = useState('')
    const [activeTip, setActiveTip] = useState()

    const [numberOfPeopleValid, setNumberOfPeopleValid] = useState('')
    const [peopleError, setPeopleError] = useState('')
    
    const [billValid, setBillValid] = useState('')
    const [billError, setBillError] = useState('')
    
    const [tipAmountPerson, setTipAmountPerson] = useState('0.00')
    const [totalPerson, setTotalPerson] = useState('0.00')
    
   
    const runCheck = () => {
        if (numberOfPeople < 0) {
            setNumberOfPeopleValid(false)
            setPeopleError("Can't be less the zero")
            setTipAmountPerson('0.00')
            setTotalPerson('0.00')
        }else if (numberOfPeople == 0) {
            setNumberOfPeopleValid(false)
            setPeopleError("Can't be zero")
            setTipAmountPerson('0.00')
            setTotalPerson('0.00')
        }else{
            setNumberOfPeopleValid('')
            setPeopleError('')
        }

        if(bill < 0) {
            setBillValid(false)
            setBillError("Can't be less than zero")
            setTipAmountPerson('0.00')
            setTotalPerson('0.00')
        }else {
            setBillValid('')
            setBillError('')
        }
        console.log(numberOfPeople > 0)
        if (activeTip && bill > 0 && numberOfPeople > 0) {
            console.log('Dont run')
            let number = (activeTip.value * bill) / numberOfPeople
            let total = Number((activeTip.value * bill) + Number(bill)) / Number(numberOfPeople)
            setTipAmountPerson((Math.floor(number * 100) / 100).toFixed(2))
            setTotalPerson(total.toFixed(2))
        }else if (customTip  && bill > 0 && numberOfPeople > 0) {
            let number = customTip / numberOfPeople
            console.log(customTip + bill)
            setTipAmountPerson((Math.floor(number * 100) / 100). toFixed(2))
            setTotalPerson(((Number(customTip) + Number(bill)) / numberOfPeople).toFixed(2))
        }
        console.log('at bottom')
    }


    useEffect(() => {
        if (numberOfPeople && bill && (activeTip || customTip)){
            runCheck()
        }
    }, [numberOfPeople, bill, (activeTip || customTip)])


    return (
        <>
        <div>
            <h1 className="splitter">SPLI</h1>
            <h1 className="splitter">TTER</h1>
        </div>
        <div className="mainContainer">
            <div className="container left">
                <div className="billContainer">
                <div className="numberOfPeopleBox">
                        <h2>Bill</h2>
                        <h2 className="peopleErrorMessage">{billError}</h2>
                    </div>
                    <input type="number" min="1" step="any" value={bill} onChange={(e) => setBill(e.target.value)}className={"billInput price" + ' ' + billValid}></input>
                </div>
                <div className="tipContainer">
                     <h2>Select Tip %</h2>
                        <div className="tipOptions">
                            {buttonData.map(item =>
                                <div onClick={() => {setActiveTip(item), setCustomTip('')}} key={item.id} className={"buttonTip" +  (activeTip ? item.id == activeTip.id ? ' active' : '' : '')} >{item.name}</div>
                            )}
                            <div className="customTip"><input type="number" min="1" step="any" value={customTip} onChange={(e) =>{setCustomTip(e.target.value), setActiveTip(null)}}placeholder="Custom"></input></div>
                        </div>
                </div>
                <div className="numberPeopleContainer">
                    <div className="numberOfPeopleBox">
                        <h2>Number of People</h2>
                        <h2 className="peopleErrorMessage">{peopleError}</h2>
                    </div>
                    <input type="number" min="1" step="any" value={numberOfPeople} onChange={(e) => setNumberOfPeople(e.target.value)}className={"billInput people" + ' ' + numberOfPeopleValid}></input>
                </div>
            </div>
             
            
            <div className="container right">
                <div className="total tip">
                    <div className="totalLabels">
                        <div >
                            <h2>Tip Amount</h2>
                            <h3>/ person</h3>
                        </div>
                       <h2 className="totalCostPerson">{tipAmountPerson}</h2>
                    </div>
                    <div className="totalLabels">
                        <div >
                            <h2>Total</h2>
                            <h3>/ person</h3>
                        </div>
                        <h2 className="totalCostPerson">{totalPerson}</h2>
                    </div>
                </div>
                <button className="resetButton">RESET</button>
            </div>      
        </div>
    </>
    )
}
export default App