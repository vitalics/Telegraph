import cash from '../cash';
import fmt from '../fmt';

describe('@tlgr/fmt/cash', () => {
  it('should return text with <cash> decoration', () => {
    const arrange = '123';
    const act = cash(arrange);

    expect(act.includes('<cash>')).toBeTruthy();
    expect(act.includes('</cash>')).toBeTruthy();
  });
  it('fmt should returns formatted text', () => {
    const arrange = '123';
    const expectedString = '$123.00';
    const formatted = fmt(cash(arrange));

    expect(formatted[0]).toBe(expectedString);
    expect(Array.isArray(formatted[1].entities)).toBeTruthy();
    expect(formatted[1]).toStrictEqual({
      entities: [{ length: expectedString.length, type: 'cashtag', offset: 0 }]
    });
  });

  it('fmt should contains EUR sign', () => {
    const arrange = '123';
    const expectedString = '€123.00';
    const formatted = fmt(cash(arrange, { currency: 'EUR' }));

    expect(formatted[0]).toBe(expectedString);
    expect(Array.isArray(formatted[1].entities)).toBeTruthy();
    expect(formatted[1]).toStrictEqual({
      entities: [{ length: expectedString.length, type: 'cashtag', offset: 0 }]
    });
  });
  it('fmt should return formatted currency with maximumFractionDigits sign', () => {
    const arrange = '123';
    const expectedString = '$123.0';
    const formatted = fmt(cash(arrange, { maximumFractionDigits: 1 }));

    expect(formatted[0]).toBe(expectedString);
    expect(Array.isArray(formatted[1].entities)).toBeTruthy();
    expect(formatted[1]).toStrictEqual({
      entities: [{ length: expectedString.length, type: 'cashtag', offset: 0 }]
    });
  });
  it('fmt should return formatted currency with maximumSignificantDigits sign', () => {
    const arrange = '123';
    const expectedString = '$120';
    const formatted = fmt(cash(arrange, { maximumSignificantDigits: 2 }));

    expect(formatted[0]).toBe(expectedString);
    expect(Array.isArray(formatted[1].entities)).toBeTruthy();
    expect(formatted[1]).toStrictEqual({
      entities: [{ length: expectedString.length, type: 'cashtag', offset: 0 }]
    });
  });
})