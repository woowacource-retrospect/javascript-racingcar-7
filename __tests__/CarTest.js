import Car from '../src/model/Car.js';

describe('자동차 클래스 테스트', () => {
  test('자동차 한 대 생성하기', () => {
    const car = new Car('pobi');
    expect(car.name).toBe('pobi');
  });

  test('자동차 정상 달리기 테스트', () => {
    const car = new Car('pobi');
    car.runOrStay(4);
    expect(car.count).toBe(1);
  });
});
