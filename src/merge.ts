export function merge (collection_1: number[] , collection_2: number[], collection_3: number[]) : number[] {
    // 1. define variables and a result array
    const size1: number = collection_1.length;
    const size2: number = collection_2.length;
    const size3: number = collection_3.length;
    let i1 = 0;
    let i2 = 0;
    let i3 = 0;
    const temp: number[] = [];
    let iTemp = 0;
    const sizeTemp = size1 + size2;
    const result: number[] = [];

    // 2. reverse collection_3
    const collection_3_reverse: number[] = [...collection_3].reverse();

    // 2. build the temp array as a merge result from collection_1 and collection_2
    while (i1 < size1 && i2 < size2) {
        if (collection_1[i1] < collection_2[i2]) {
            temp.push(collection_1[i1]);
            i1++;
        } else {
            temp.push(collection_2[i2]);
            i2++;
        }
    }
    if (i1 < size1) {
        temp.push(...collection_1.slice(i1, size1));
    }
    if (i2 < size2) {
        temp.push(...collection_2.slice(i2, size2));
    }

    // 3. build the result array as a merge result from collection_1, collection_2, and collection_3
    while (iTemp < sizeTemp && i3 < size3) {
        if (temp[iTemp] < collection_3_reverse[i3]) {
            result.push(temp[iTemp]);
            iTemp++;
        } else {
            result.push(collection_3_reverse[i3]);
            i3++;
        }
    }
    if (iTemp < sizeTemp) {
        result.push(...temp.slice(iTemp, sizeTemp));
    }
    if (i3 < size3) {
        result.push(...collection_3_reverse.slice(i3, size3));
    }

    return result;
}
