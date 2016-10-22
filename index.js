import React, { Component, PropTypes } from 'react';
import {
    View,
    ScrollView,
    Alert
} from 'react-native'

export default class MultiStep extends Component {
    
    constructor(props) {
        super(props)
        this.next = this.next.bind(this)
        this.previous = this.previous.bind(this)
        this.saveStepState = this.saveStepState.bind(this)
        this.getStepState = this.getStepState.bind(this)
        this.finishWizard = this.finishWizard.bind(this)
         this.state = {
            curState:0,
            steplist:[],
            childState:[]
           };
        
          
        
        for(var i =0; i< this.props.steps.length;i++){
            this.state.steplist[i] = React.cloneElement(this.props.steps[i].component,{
                nextFn:this.next,
                prevFn:this.previous,
                saveState:this.saveStepState,
                getState:this.getStepState
            })
            
            
        }
        
        
    }
    next(){
        if((this.state.curState +1) < this.props.steps.length ){
            this.setState({curState:this.state.curState +1})
        }
        if((this.state.curState +1) == this.props.steps.length){
            this.finishWizard()
        }
        
    }
    previous(){
        if((this.state.curState - 1) >= 0 ){
            this.setState({curState:this.state.curState - 1})
        }
    }
    saveStepState(stepNum,stateData){
        
        var chdata = this.state.childState
        chdata[stepNum] = stateData
        this.setState({childState:chdata})
        
    }
    
    getStepState(){
        return this.state.childState
    }
    
    finishWizard(){
        this.props.onFinish(this.getStepState())
    }
    render(){
        
        
        return (
            <View>
                <ScrollView>
                   {this.state.steplist[this.state.curState]}
                    
                </ScrollView>
            </View>
        )
            
        
    }
}
