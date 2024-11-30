import { SPECIAL_CHARACTERS } from "../constants/constants.js";

function splitCarName(carNames) {
  return carNames
    .split(`${SPECIAL_CHARACTERS.COMMA}`)
    .map((carName) => carName.trim());
}
export default splitCarName;
