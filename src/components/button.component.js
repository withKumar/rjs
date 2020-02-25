import React from 'react';

class HelloButton extends React.Component {
    constructor(props){
    super(props)
    this.state = {
        hidden : true
    }
}
    onMouseClick = (e) => {
        
    }

    render() {
        return (
        <div className="buttonClass">
            <button className="submit" onClick={this.onMouseClick}>Press</button>
            <div className="buttonClick" hidden></div>
        </div>
        )
    }
}

export default HelloButton;