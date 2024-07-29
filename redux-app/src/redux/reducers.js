// 전달받은 액션 종류와 데이터를 바탕으로 새로운 상태를 계산하는 로직이 들어있으면 된다.
// 리듀서 정의
import { handleActions } from 'redux-actions';
import { DECREMENT, INCREMENT } from './actionTypes';

// 상태 초기화
const initialState = {
    count : 0
}

// 리듀서
const counterReducer = handleActions(
    {
        [INCREMENT] : (state) => ({count: state.count + 1 } ),
        [DECREMENT] : (state) => ({count: state.count - 1 } ),
    },
    initialState
) 

export default counterReducer;