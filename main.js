function removeDuplicate(arr) {
	const wordCount = {};
	for (var i = arr.length - 1; i >= 0; i--) {
		if (wordCount[arr[i].toLowerCase()]) {
			arr.splice(i,1);
		} else {
			wordCount[arr[i].toLowerCase()] = 1;
		}
	}
	return arr;
}

console.log(removeDuplicate(['I', 'am', 'a', 'a', 'i', 'duplicate']));
