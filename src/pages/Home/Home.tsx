import React, {Component} from "react";
import Button from "../../components/button/Button";

interface HomeProps {

}

interface HomeState {
    clickCount: number;
}


class Home extends Component<HomeProps, HomeState> {

    state = {
        clickCount: 0
    };

    onClick = () => {
        this.setState(prevState => ({
                clickCount: prevState.clickCount + 1,
            })
        );
    };

    render() {
        return <div>
            <div>
                {this.state.clickCount === 0 ?
                    "The buttons haven't been clicked yet!" :
                    <span>The buttons are clicked <b>{this.state.clickCount}</b> times</span>
                }
            </div>

            <Button onClick={this.onClick}>
                Default
            </Button>

            <Button onClick={this.onClick} color="primary">
                Primary
            </Button>

            <Button onClick={this.onClick} color="secondary">
                Secondary
            </Button>

            <Button onClick={this.onClick} color="primary" variant="outlined">
                Primary
            </Button>

            <Button onClick={this.onClick} color="secondary" variant="outlined">
                Secondary
            </Button>


            <button type="button" className="btn btn-primary mr-3 ml-3">Primary</button>
            <button type="button" className="btn btn-secondary">Secondary</button>


        </div>;
    }

}

export default Home;
