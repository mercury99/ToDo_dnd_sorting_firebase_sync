import { RESPONSE_SORTING } from "../actions";

export default function filter(state = [], action) {
    switch (action.type) {
        case RESPONSE_SORTING: {
            return action.sorting;
        }

        default: {
            return state;
        }
    }
};