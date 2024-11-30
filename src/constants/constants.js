export const IO_MESSAGE = Object.freeze({
  CARNAME: `경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분) \n`,
  TRYCOUNT: `시도할 횟수는 몇 회인가요?\n`,
  PRINT_RESULT: `\n실행 결과`,
  PRINT_WINNER: `최종 우승자`,
});

export const ERROR_MESSAGE = Object.freeze({
  INVALID_CAR_COUNT: "[ERROR] 유효하지 않은 자동차 대수입니다.",
  INVALID_CAR_NAME: "[ERROR] 자동차 이름은 5자 이하여야 합니다.",
  INVALID_TRY_COUNT: "[ERROR] 입력횟수는 자연수여야 합니다.",
  DUPLICATED_CAR_NAME: "[ERROR] 중복된 자동차 이름은 입력할 수 없습니다.",
});

export const SPECIAL_CHARACTERS = Object.freeze({
  COMMA: `,`,
  COLON: `:`,
  NEW_LINE: `\n`,
  DASH: "-",
  EMPTY_STRING: "",
});

export const MAGIC_NUMBER = Object.freeze({
  FORWARD_STANDARD: 4,
});
