import { atom } from "recoil";

export const isAuthenticatedState = atom<boolean>({
    key: 'isAuthenticatedState',
    default: false,
});

export const isAuthLoadingState = atom<boolean>({
    key: 'isAuthLoadingState',
    default: true
})