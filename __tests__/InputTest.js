import Validator from '../src/utils/Validator.js';

describe('입력 테스트', () => {
  test('자동차 이름은 5글자 초과면 안된다.', () => {
    expect(() => Validator.validateCarNameInput('pobipobi')).toThrow('[ERROR]');
  });
  test('자동차 이름은 5이하여야 한다.', () => {
    expect(() => Validator.validateCarNameInput('pobi')).not.toThrow();
  });
  test('자동차 이름은 쉼표로 구분한다.', () => {
    expect(() => Validator.validateCarNameInput('pobi,hoon')).not.toThrow();
  });
  test('중복된 차 이름은 불가능하다.', () => {
    expect(() => Validator.validateCarNameDuplicate('pobi,pobi')).toThrow('[ERROR]');
  });

  test('달리기 횟수는 양의 정수로 적어야 한다.', () => {
    expect(() => Validator.validateIsNumber('').toThrow('[ERROR]'));
    expect(() => Validator.validateIsNumber('0').toThrow('[ERROR]'));
    expect(() => Validator.validateIsNumber('-5').toThrow('[ERROR]'));
    expect(() => Validator.validateIsNumber('3').not.toThrow());
  });
});
