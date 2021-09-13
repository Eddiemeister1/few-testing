export class ConvertersService {
    convertToF(tempInC: number): number {
        return (tempInC * 1.8) + 32;
    }

    convertToC(tempInF: number): number {
        return (tempInF - 32) * (5.0 / 9.0);
    }
}