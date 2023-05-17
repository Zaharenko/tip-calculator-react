import TipButtons from "./TipButtons"
import DollarIcon from "./images/icon-dollar.svg"
import PersonIcon from "./images/icon-person.svg"

const Form = ({ bill, setBill, people, setPeople, tip, addTip, setReset}) => {

    const handleInputChange = (event) => {
        const { value } = event.target;
        const pattern = /^[0-9.]*$/;
    
        if (!pattern.test(value)) {
          event.target.value = value.slice(0, -1);
        }
    };

    const getInputStyles = () => {
        if (!people) {
            return {
                border: '1px solid hsl(33, 100%, 47%)',
            };
        }
    };

    const getErrorStyles = () => {
        if (people) {
            return {
                display: 'none',
            };
        }
    };
    

    return (
        <form className="form">
            <div className="form-input">
                <label>Bill</label>
                <img src={DollarIcon} alt="dollar icon" loading="lazy"/>
                <input autofocus type="text" onInput={handleInputChange} placeholder="0.00" value={bill}
                    onChange={(e) => setBill(e.target.value)} />
            </div>
            <div className="form-tip">
                <label>Select Tip %</label>
                <TipButtons tip={tip} addTip={addTip} setReset={setReset} />
            </div>
            <div className="form-input custom-form-input">
                <label>Number of People</label>
                <img src={PersonIcon} alt="person icon" loading="lazy"/>
                <input className="person-input" type="number" placeholder="0" value={people} style={getInputStyles()}
                    onChange={(e) => setPeople(e.target.value)}/>
                <span className="error" style={getErrorStyles()}>Can't be zero</span>
            </div>
        </form>
    )
}

export default Form
