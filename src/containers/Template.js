import React,{Component} from 'react';
import MuiThemeProvide from 'material-ui/styles/MuiThemeProvider';
//import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
//import ReactDOM from 'react-dom';
//injectTapEventPlugin()

class Template extends Component{
    render(){
        return (
        <MuiThemeProvide>
                <div>
                    <header>
                        <h1>TictacTuring</h1>
                        <RaisedButton 
                            label={'test button'}
                            primary={true}
                            onClick={()=>{console.log('hello I work')}}
                        />
                    </header>
                    <main>
                        {this.props.children}
                    </main>
                </div>

        </MuiThemeProvide>
           
        )
    }
}
export default Template;