import { Component, OnInit } from '@angular/core';
import { ConvertersService } from 'src/app/services/converters.service';

@Component({
  selector: 'app-temp-converter',
  templateUrl: './temp-converter.component.html',
  styleUrls: ['./temp-converter.component.css']
})
export class TempConverterComponent implements OnInit {

  convertedTemp = 0;
  constructor(private convert: ConvertersService) { }


  convertToF(tempInC: number) {
    this.convertedTemp = this.convert.convertToF(tempInC);
  }

  convertToC(tempInF: number) {
    this.convertedTemp = this.convert.convertToC(tempInF);
  }

  ngOnInit(): void {
  }

}
