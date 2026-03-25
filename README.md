# Merge function with unit test

This project implements a function for the question 10 of the pre-test Full-stack developer (intern) at Primo.

## Description of the function

Inside src/merge.ts

```
merge(collection_1: number[], collection_2: number[], collection_3: number[])
```

* collection_1 and collection_2 are sorted ascending and collection_3 is sorted descending
* returns an ascendingly sorted number array
* with no use of built-in sort function

The overall implementation idea is that we should reverse the collection_3 first so all collections will now be sorted ascending. Then, we perform merging on collection_1 and collection_2 first by iterating over each collection and build a new temp array. After that, we merge the temp array and collection_3 by iteration on each collection to build the final result array, which will be returned to the function call.

Time complexity will be in O(n).

## Set up dependencies, running the unit test, and execute code

Unit test is in the src/merge.test.ts.

Execute the test by running commands.
```
npm install
npm test
```
