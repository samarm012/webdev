import React,{Component} from "react";
import Counter from "./counter";
class CountingMachine extends Component {
    state = {
        counters:[
            {id:12,alphabet:"A",count:1},
            {id:23,alphabet:"B",count:2},
            {id:7,alphabet:"C",count:0},
            {id:16,alphabet:"D",count:0},
        ],
    };
     handleDelete = (id) => {
        let s1 = {...this.state};
        let index = s1.counters.findIndex((c1) => c1.id === id);
        s1.counters.splice(index,1);
        this.setState(s1);
     };
    render(){
        const {counters} = this.state;
        return (
            <React.Fragment>
                {counters.map((c1) => {
                   return <Counter counter = {c1} onDelete = {this.handleDelete}/>
                })}
            </React.Fragment>
        );
    }
}
export default CountingMachine;