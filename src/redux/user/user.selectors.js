import { createSelector } from 'reselect';

// input selector -> state
const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
)