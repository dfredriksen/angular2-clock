import { NgModule }              from '@angular/core';
import { CommonModule }          from '@angular/common';
import { ClockComponent }  from './component';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ ClockComponent ],
  exports: [ ClockComponent ]
})
export class ClockModule {
}

