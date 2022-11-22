const START_MESSAGE = "다리 건너기 게임을 시작합니다.\n";
const ASK_BRIDGE_LENGTH = "다리의 길이를 입력해주세요.\n";
const MOVE_MESSAGE = "이동할 칸을 선택해주세요. (위: U, 아래: D)\n";
const RESTART_END_GAME_MESSAGE =
  "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n";
const RESULT_GAME_MESSAGE = "\n최종 게임 결과";
const SUCCESS_FAIL_MESSAGE = "게임 성공 여부:";
const TOTAL_TRY_MESSAGE = "총 시도한 횟수:";
const NOT_A_NUMBER_MESSAGE = "[ERROR]숫자를 입력해주세요";
const NOT_NUMBER_RANGE_MESSAGE = "[ERROR]3에서 20 사이의 숫자를 입력해주세요";
const NOT_ONE_CHAR_MESSAGE = "[ERROR]입력된 값이 한자리가 아닙니다.";
const NOT_UP_DOWN_CHAR_MESSAGE =
  "[ERROR]'U' 또는 'D'가 아닌 값을 입력하셨습니다.";
const NOT_RETRY_QUIT_CHAR_MESSAGE =
  "[ERROR]'R' 또는 'Q'가 아닌 값을 입력하셨습니다.";
module.exports = {
  START_MESSAGE: START_MESSAGE,
  MOVE_MESSAGE: MOVE_MESSAGE,
  RESTART_END_GAME_MESSAGE: RESTART_END_GAME_MESSAGE,
  RESULT_GAME_MESSAGE: RESULT_GAME_MESSAGE,
  SUCCESS_FAIL_MESSAGE: SUCCESS_FAIL_MESSAGE,
  TOTAL_TRY_MESSAGE: TOTAL_TRY_MESSAGE,
  ASK_BRIDGE_LENGTH: ASK_BRIDGE_LENGTH,
  NOT_A_NUMBER_MESSAGE: NOT_A_NUMBER_MESSAGE,
  NOT_NUMBER_RANGE_MESSAGE: NOT_NUMBER_RANGE_MESSAGE,
  NOT_ONE_CHAR_MESSAGE: NOT_ONE_CHAR_MESSAGE,
  NOT_UP_DOWN_CHAR_MESSAGE: NOT_UP_DOWN_CHAR_MESSAGE,
  NOT_RETRY_QUIT_CHAR_MESSAGE: NOT_RETRY_QUIT_CHAR_MESSAGE,
};
