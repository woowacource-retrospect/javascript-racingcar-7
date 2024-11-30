export const RUN_CONDITION = 4;
export const RUN_COUNT_FOR_ONCE = 1;
export const PROCESS_RESULT_TEXT = '\n실행 결과';
export const RACING_PROCESS_TEXT = (name, countText) => `${name} : ${countText}`;
export const CAR_NAME_INPUT_TEXT = '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n';
export const TRY_COUNT_INPUT_TEXT = '시도할 횟수는 몇 회인가요?\n';
export const CAR_NAME_LENGTH_ERROR = '[ERROR] 자동차 이름은 5자 이하여야 합니다.';
export const CAR_NAME_DUPLICATE_ERROR = '[ERROR] 중복된 자동차 이름은 불가능 합니다.';
export const NUMBER_ERROR = '[ERROR] 달리기 횟수는 양의 정수로 적어야 합니다.';

export const WINNER_CARS = (winnerCars) => `최종 우승자 : ${winnerCars}`;
