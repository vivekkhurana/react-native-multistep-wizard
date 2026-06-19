# React Native Multistep Wizard

## How to use

### In the top level componenet add

```
import MultiStep from 'react-native-multistep-wizard'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'

/* Define the steps of multistep wizard */

const steps = [
              {name: 'StepOne', component: <StepOne/>},
              {name: 'StepTwo', component: <StepTwo/>},
              {name: 'StepThree', component: <StepThree/>},
            ];

/* Define your class */
class Register extends Component{

/* define the method to be called when the wizard is finished */

finish(wizardState){
//code to be executed when wizard is finished
        
    }

/* render MultiStep */
render(){
	return(
	    <View style={styles.container}>
	    <MultiStep steps={steps} onFinish={this.finish}/>
	    </View>
	)
}

```

### In the wizard step 

```
class StepOne extends Component{


}

nextPreprocess(){
      
  // Save step state for use in other steps of the wizard
  this.props.saveState(0,{key:'value'})

  // Go to next step
  this.props.nextFn()
      
     
}

previousPreprocess(){
      

  // Go to previous step
  this.props.prevFn()
      
     
}

```


## API

### this.props.saveState(stepNum,dict)

Use this to save state of step on the stack and use in the wizard

### this.props.getState()

Use this to get all the values saved with saveState so far. Retuns an array of dictionary with step number as array key.

### this.props.prevFn()

Use this to go to previous step in the app.

### this.props.nextFn()

Use this to go to next step in the app.
