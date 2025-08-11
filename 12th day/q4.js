// Print All Leaders in an Array What is a Leader? In an array, an element is a "leader" if it is greater than or equal to all the elements to its right.console.log(leadersOptimized([16, 17, 4, 3, 5, 2])); // Output: [17, 5, 2]
function leadersOptimized(arr) {
    let n = arr.length;
    let leaders = [];
    let maxFromRight = arr[n - 1];
    leaders.push(maxFromRight);
    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] >= maxFromRight) {
            maxFromRight = arr[i];
            leaders.push(maxFromRight);
        }
    }
    return leaders.reverse();
}