import {Component, Input} from '@angular/core';
import {ITimer} from './itimer'
 

import { AlertController } from '@ionic/angular';

 
@Component({
    selector: 'timer',
    templateUrl: './timer.component.html'
})
export class TimerComponent {
 
    @Input() timeInSeconds: number;
    public timer: any;
    interval: any = [];
 
    constructor(public alertController: AlertController) {
    }
 
    ngOnInit() {
        this.initTimer();
    }
 
    hasFinished() {
        return this.timer.hasFinished;
    }
 
    initTimer() {
        if(!this.timeInSeconds) { this.timeInSeconds = 0; }
 
        this.timer = <ITimer>{
            seconds: this.timeInSeconds,
            runTimer: false,
            hasStarted: false,
            hasFinished: false,
            secondsRemaining: this.timeInSeconds
        };
 
        this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
    }
 
    startTimer() {
        this.timer.hasStarted = true;
        this.timer.runTimer = true;
        this.timerTick();
    }
 
    pauseTimer() {
        this.timer.runTimer = false;
    }
 
    resumeTimer() {
        this.startTimer();
    }
 
    timerTick() {
        setTimeout(() => {
            if (!this.timer.runTimer) { return; }
            this.timer.secondsRemaining--;
            this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
            if (this.timer.secondsRemaining > 0) {
                this.timerTick();
            }
            else {
                this.timer.hasFinished = true;
                this.presentAlertConfirm()
            }
        }, 1000);
    }
 
    getSecondsAsDigitalClock(inputSeconds: number) {
        var sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
        var hours   = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);
        var hoursString = '';
        var minutesString = '';
        var secondsString = '';
        hoursString = (hours < 10) ? "0" + hours : hours.toString();
        minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
        secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
        return hoursString + ':' + minutesString + ':' + secondsString;
    }

    async presentAlertConfirm() {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Perhatian',
        message: 'Waktunya sudah habis ya',
        buttons: [
          {
            text: 'Baik',
            id: 'confirm-button',
            handler: () => {
              console.log('Confirm Okay');
              this.stopSpill()

            }
          }
        ]
      });
  
      await alert.present();
    }

    spillImage(array, level) {
      for (let i = 0; i < array.length; i++) {
  
        let student = level + "-" + i;
        let inter = setTimeout(() => {
          (<HTMLElement>document.querySelector('.' + student)).style.width = '3rem'
        }, 1000*(i+1));

        this.interval.push(inter)
      }
    }

    stopSpill() {
      var elems = Array.from(document.querySelectorAll<HTMLElement>('.image-class'))
      var index = 0, length = elems.length;
      for ( ; index < length; index++) {
          elems[index].style.width = '2rem'
      }
      if (this.interval != '') {
        for (let i = 0; i < this.interval.length; i++) {
          clearTimeout(this.interval[i])
        }
      }
    }

}