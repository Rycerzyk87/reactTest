const Dollars = (props) => {
    const value = (props.cash / props.ratio).toFixed(1)
    return (
        <div>Wartośc w dolarach: {props.cash <= 0 ? "Podaj ilość PLN" : value}</div>
    )
}

const Euros = (props) => {
    const value = (props.cash / props.ratio).toFixed(1)
    return (
        <div>Wartośc w euro: {props.cash <= 0 ? "Podaj ilość PLN" : value}</div>
    )
}

class ExchangeCounter extends React.Component {

    state = {
        amount: "",
        ratioDollar: 3.81,
        ratioEuro: 4.20,
    }

    handleChange = e => {
        this.setState({
            amount: e.target.value
        })
    }
    handleChangeRatioDollar = e => {
        this.setState({
            ratioDollar: e.target.value
        })
    }
    handleChangeRatioEuro = e => {
        this.setState({
            ratioEuro: e.target.value
        })
    }
    render() {
        const { amount, ratioDollar, ratioEuro } = this.state;

        return (
            <div className="app">
                <label>
                    <input
                        class="mainInput"
                        type="number"
                        value={this.state.amount}
                        onChange={this.handleChange}
                    />
                </label><br></br>
                <span>Przelicznik dolara to:</span>
                <input
                    value={this.state.ratioDollar}
                    onChange={this.handleChangeRatioDollar}
                />
                <Dollars cash={amount} ratio={ratioDollar} />
                <span>Przelicznik euro to:</span>
                <input
                    value={this.state.ratioEuro}
                    onChange={this.handleChangeRatioEuro}
                />
                <Euros cash={amount} ratio={ratioEuro} />
            </div>

        )
    }
}
ReactDOM.render(<ExchangeCounter />, document.getElementById('root'))
