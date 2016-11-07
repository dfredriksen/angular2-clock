//our root app component
import {Component, Attribute} from '@angular/core'

@Component({
  selector: 'clock',
  templateUrl: 'src/clock/view.html'
})
export class ClockComponent {
    private data;
    private format; 
    private timer;
    private intervalSet = false;
    constructor(@Attribute("format") format, @Attribute("data") data, @Attribute('timer') timer) { 
        var date, miliseconds;
        this.format = format || 'h:mm:s'; 
        this.data = data || new Date();
        if(timer) {
             if(typeof this.data !== 'Date') {
                date = new Date();
            } else {
                date = this.data;
            }

            miliseconds = (60 - date.getSeconds()) * 1000;
            window.setTimeout(()=>{this.refreshTime();}, miliseconds);            
        }
    } 

    refreshTime() {
        this.data = new Date();
        if(!this.intervalSet) {
            window.setInterval(()=>{this.refreshTime()}, 60000);
            this.intervalSet = true;
        }
    }

}
