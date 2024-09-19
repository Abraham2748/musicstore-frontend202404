import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textLimiter',
  standalone: true,
})
export class TextLimiterPipe implements PipeTransform {
  transform(value: string, ...args: number[]): unknown {
    const limit = args[0] || 10;
    if (value.length > limit) {
      return value.substring(0, limit) + '...';
    }
    return value;
  }
}
