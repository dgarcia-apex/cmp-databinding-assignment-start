import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css',
})
export class GameControlComponent {
  @Output() public gameMessageEvent: EventEmitter<number> =
    new EventEmitter<number>();

  private interval: number = 1000;
  currentNumber = 0;
  private myTimer: any;

  public startInputHandler(_inputEvent: Event): void {
    let that = this;
    this.myTimer = setInterval(function () {
      that.gameMessageEvent.emit(that.currentNumber++);
    }, this.interval);
  }

  public stoptInputHandler(_inputEvent: Event): void {
    clearTimeout(this.myTimer);
  }
}
