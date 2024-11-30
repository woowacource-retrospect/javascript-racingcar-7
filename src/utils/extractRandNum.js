import { Random } from "@woowacourse/mission-utils";

function extractRandNum() {
  return Random.pickNumberInRange(0, 9);
}
export default extractRandNum;
