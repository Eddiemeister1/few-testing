import { TestBed } from "@angular/core/testing";
import { ConvertersService } from "src/app/services/converters.service";
import { TempConverterComponent } from "./temp-converter.component";

describe('TempConverterComponent', () => {

  describe('shallow testing', () => {

    it('can convert from f to c ', () => {
      const dummy: ConvertersService = {
        convertToC: (t) => 12,
        convertToF: (t) => 18
      }
      const component = new TempConverterComponent(dummy);
      component.convertToC(212);
      expect(component.convertedTemp).toEqual(12);
    });
  });

  describe('full component testing', () => {

    describe('converting to f', () => {

      let component: TempConverterComponent;
      let inputElement: HTMLInputElement;
      let convertToFButton: HTMLButtonElement;
      let answerSpan: HTMLSpanElement;

      beforeEach(() => {
        TestBed.configureTestingModule({
          declarations: [TempConverterComponent],
          providers: [ConvertersService],

        });
      });
      //when the user enters 200 in the text box
      //and they click the convert to F button
      //the service is passed the value from the textbox
      //and the response from the service is put in the
      //answer span.

    });
  });
});
