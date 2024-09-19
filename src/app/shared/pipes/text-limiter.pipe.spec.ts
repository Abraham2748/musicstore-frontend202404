import { TextLimiterPipe } from './text-limiter.pipe';

describe('TextLimiterPipe', () => {
  it('create an instance', () => {
    const pipe = new TextLimiterPipe();
    expect(pipe).toBeTruthy();
  });
});
