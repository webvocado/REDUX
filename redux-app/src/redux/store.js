// 스토어 정의
// store 안에 reducer 가 있다. ( configureStore 라는 함수로 리듀서를 등록한다 )

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configureStore({
    reducer: rootReducer
});

export default store;