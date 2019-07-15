import React from 'react';


class Timer extends React.Component {
   state = { milliseconds:6456000,       
                     isActive: false,
                     Interval:0,
                    };
                 
   



countup= ms => {
  const msPerSecond = 1000
  const msPerMinute = msPerSecond * 60
  const msPerHour = msPerMinute * 60

  const hours = Math.floor(ms / msPerHour)
  const hoursRest = ms % msPerHour
  const minutes = Math.floor(hoursRest / msPerMinute)
  const minutesRest = hoursRest % msPerMinute
  const seconds = Math.floor(minutesRest / msPerSecond)
  return String(hours).padStart(2, '0') +
      ':' + String(minutes).padStart(2, '0') +
      ':' + String(seconds).padStart(2, '0')
}


    startTime = () => {   
       this.setState({isActive:true})  ;
    
      const interval = setInterval(
        () => {
           this.setState({
            milliseconds: this.state.milliseconds + 1000
           }) 
        },
        1000
    )
    this.setState({
        interval
    })
    
    };
   

    resetTime = () => {
      clearInterval(this.state.interval);
      this.setState({milliseconds:0,interval:0,isActive:false});
    };


 pauseTime=()=>{
clearInterval(this.state.interval)
this.setState({ isActive:false,   interval: 0
})
 };

    render()
    {
        return(<div className=""> <h1>{this.countup(this.state.milliseconds)}</h1>
        
        <div className="buttons">
      <input type="button" value ="Start" onClick={this.state.isActive? this.pauseTime :this.startTime}></input>
      <input type="reset" value ="Reset" onClick={this.resetTime}></input>
    </div>                      
                                
        </div>)}


    }
export default Timer;