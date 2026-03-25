import { merge } from "./merge";

describe("UC1: test merge() function", () => {
    test("merge three arrays with distinct positive elements", () => {
        const collection_1 : number[] = [1, 4, 6];
        const collection_2 : number[] = [2, 3, 9];
        const collection_3 : number[] = [8, 7, 5];
        expect(merge(collection_1, collection_2, collection_3)).toEqual(
            [1, 2, 3, 4, 5, 6, 7, 8, 9]
        );
    });
    test("merge three arrays with distinct negative elements", () => {
        const collection_1 : number[] = [-6, -4, -1];
        const collection_2 : number[] = [-9, -3, -2];
        const collection_3 : number[] = [-5, -7, -8];
        expect(merge(collection_1, collection_2, collection_3)).toEqual(
            [-9, -8, -7, -6, -5, -4, -3, -2, -1]
        );
    });
    test("merge three arrays with distinct positive, negative, or zero elements", () => {
        const collection_1 : number[] = [-6, -4, -1];
        const collection_2 : number[] = [-2, 0, 9];
        const collection_3 : number[] = [8, 5, -7];
        expect(merge(collection_1, collection_2, collection_3)).toEqual(
            [-7, -6, -4, -2, -1, 0, 5, 8, 9]
        );
    });
    test("merge three arrays with some duplicated elements", () => {
        const collection_1 : number[] = [1, 1, 1];
        const collection_2 : number[] = [1, 1, 1];
        const collection_3 : number[] = [1, 1, 1];
        expect(merge(collection_1, collection_2, collection_3)).toEqual(
            [1, 1, 1, 1, 1, 1, 1, 1, 1]
        );        
    });
    test("merge three arrays with one element", () => {
        const collection_1 : number[] = [3];
        const collection_2 : number[] = [1];
        const collection_3 : number[] = [2];
        expect(merge(collection_1, collection_2, collection_3)).toEqual(
            [1, 2, 3]
        );        
    });
    test("merge three arrays with unequal lengths", () => {
        const collection_1 : number[] = [1, 7, 9, 10, 14, 15, 19];
        const collection_2 : number[] = [2, 3, 9];
        const collection_3 : number[] = [16];
        expect(merge(collection_1, collection_2, collection_3)).toEqual(
            [1, 2, 3, 7, 9, 9, 10, 14, 15, 16, 19]
        );        
    });
    test("merge three arrays with some empty collections", () => {
        const collection_1 : number[] = [1, 2, 3];
        const collection_2 : number[] = [];
        const collection_3 : number[] = [9, 8, 7];
        expect(merge(collection_1, collection_2, collection_3)).toEqual(
            [1, 2, 3, 7, 8, 9]
        ); 
    });
    test("merge three empty collections", () => {
        const collection_1 : number[] = [];
        const collection_2 : number[] = [];
        const collection_3 : number[] = [];
        expect(merge(collection_1, collection_2, collection_3)).toEqual(
            []
        ); 
    })
    test("merge three arrays with one array has all elements larger than the other", () => {
        const collection_1 : number[] = [-6, 1, 4, 9, 16, 25];
        const collection_2 : number[] = [9999, 10000];
        const collection_3 : number[] = [25, 9, 4, 0, -8];
        expect(merge(collection_1, collection_2, collection_3)).toEqual(
            [-8, -6, 0, 1, 4, 4, 9, 9, 16, 25, 25, 9999, 10000]
        );
    });
    test("merge three arrays with one array has all elements smaller than the other", () => {
        const collection_1 : number[] = [-9, -8, -7, -6, 1];
        const collection_2 : number[] = [0, 1, 2];
        const collection_3 : number[] = [-9999, -10000];
        expect(merge(collection_1, collection_2, collection_3)).toEqual(
            [-10000, -9999, -9, -8, -7, -6, 0, 1, 1, 2]
        );
    });
});