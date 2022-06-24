import {ActionTypes} from "../data/Types";

export const FeedReducer = (storeData, action) => {
    switch (action.type) {
        case ActionTypes.DATA_LOAD:
            return {
                ...storeData,
                feed: action.payload.data
            }
        case ActionTypes.DATA_SAVE:
            return {
                ...storeData,

            }
    }
}