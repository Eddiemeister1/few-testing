import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
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
      let fixture: ComponentFixture<TempConverterComponent>;

      const fakeService: ConvertersService = {
        convertToC: (t) => t === 100 ? 42 : -1,
        convertToF: (t) => t === 100 ? 42 : -1
      }
      beforeEach(() => {
        TestBed.configureTestingModule({
          declarations: [TempConverterComponent],
          providers: [
            { provide: ConvertersService, useValue: fakeService }
          ],

        });

        fixture = TestBed.createComponent(TempConverterComponent);

        inputElement = fixture.debugElement.query(By.css('[data-temp-converter-value-input]')).nativeElement;
        convertToFButton = fixture.debugElement.query(By.css('[data-temp-converter-convert-to-f-button]')).nativeElement;
        answerSpan = fixture.debugElement.query(By.css('[data-temp-converter-answer-span]')).nativeElement;

      });

      it('are all the elements hooked up', () => {
        expect(inputElement).not.toBeNull();
        expect(convertToFButton).not.toBeNull();
        expect(answerSpan).not.toBeNull();
      });

      it('it created the component', () => {
        expect(component).not.toBeNull();
      });

      it('has the right answer displayed when it starts', () => {
        fixture.detectChanges();
        expect(answerSpan.innerText).toBe('0');
      });


      //when the user enters 200 in the text box
      it('do it all refactor later', () => {
        inputElement.value = '100';
        convertToFButton.click();
        fixture.detectChanges();
        expect(answerSpan.innerText).toBe('42');
      });
      //and they click the convert to F button
      //the service is passed the value from the textbox
      //and the response from the service is put in the
      //answer span.

    });
  });
});
