const words = 'It was the best of times, it was the worst of times';

const sortWords = (wordsString) => {
	const cleanWords = wordsString.replace(/[, ]+/g, " ").trim();
  const wordsArray = cleanWords.split(' ');
	const wordsMap = {};

for (const [i, el] of wordsArray.entries()) {
		if(wordsMap[el]){
			wordsMap[el]+=1;
		}	else	{
			wordsMap[el] = 1
		}
	}
	const sortedObj = sortByVal(wordsMap)
  logResult(sortedObj)
}
	
const sortByVal = (obj) => {
	const result =  Object.keys(obj).map(c => ({ key: c, value: obj[c]})).sort((a, b) =>  b.value - a.value);
	const lowerVals = result.filter(item => item.value === 1)
	const higherVals = result.filter(item => item.value === 2)
	const dataOne =  sortItems(lowerVals)
	const dataTwo =  sortItems(higherVals)
	const allSorted = dataTwo.concat(dataOne)
	 return allSorted
}

const logResult = (res) => {
	res.forEach(({key,value}) => {
		console.log(`${key} - ${value}`)
	});
}

const sortItems = (items) => {
	return items.sort((a,b) => (a.key.toLowerCase() > b.key.toLowerCase()) ? 1 : ((b.key.toLowerCase() > a.key.toLowerCase()) ? -1 : 0)); 
}

sortWords(words)