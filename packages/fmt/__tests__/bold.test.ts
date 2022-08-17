import bold from '../bold';
import fmt from '../fmt';

describe('@tlgr/fmt/bold', () => {
  it('should return text with <bold> decoration', () => {
    const arrange = 'text with bold';
    const act = bold(arrange);

    expect(act.includes('<bold>')).toBeTruthy();
    expect(act.includes('</bold>')).toBeTruthy();
  });
  it('fmt should returns raw text', () => {
    const arrange = 'text with bold';
    const bolded = bold(arrange);
    const formatted = fmt(bolded);

    expect(formatted[0]).toBe(arrange);
    expect(Array.isArray(formatted[1].entities)).toBeTruthy();
    expect(formatted[1]).toStrictEqual({
      entities: [{ length: 14, type: 'bold', offset: 0 }]
    });
  });
  it('fmt should returns entities', () => {
    const arrange = 'text with';
    const formatted = fmt(`${arrange} ${bold('bold')}`);

    expect(formatted[0]).toBe(arrange + ' ' + 'bold');
    expect(typeof formatted[1]).toBe('object');
    expect(Array.isArray(formatted[1].entities)).toBeTruthy();
    expect(formatted[1]).toStrictEqual({
      entities: [{ length: 4, type: 'bold', offset: 10 }]
    });
  });
})