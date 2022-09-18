import React,{Component} from 'react';

const Context =React.createContext();
const reducer = (state,action)=>{
    switch(action.type){
        case'DELETE_CONTACT':
        return{
            ...state,
            contacts:state.contacts.filter(contacts=>
                 contacts.id !== action.payload)
        };
        default:
            return state;
    }
};

export class Provider extends Component{
    state={
         contacts: [
                {
                    id: 1,
                    name: 'john',
                    email: 'iknowsaint',
                    phone: '555-555-523'
                },
                {
                    id: 2,
                    name: 'saint',
                    email: 'iamsaint',
                    phone: '555-555-555'
                }, {
                    id: 3,
                    name: 'deli',
                    email: 'iknowsjames',
                    phone: '555-555-541'
                }
            ],
            dispatch:action=>{
                this.setState(state =>
                reducer(state,action))
            }
    };
    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;