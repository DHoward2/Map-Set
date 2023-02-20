//Q1
// new Set([1,1,2,2,3,4])
// {1, 2, 3, 4}

//Q2
//[...new Set("referee")].join("")
//'ref'

//Q3
// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);
//{[1,2,3] => true}, {[1,2,3] => false}

const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

const vowelCount = (str) => {
    const vowel = 'aeiou';
    const returnVal = new Map();
    for(const char of str){
        if(vowel.indexOf(char) !== -1){
            if(returnVal.has(char)){
                returnVal.set(char, returnVal.get(char) + 1);
            } else{
                returnVal.set(char,1);
        }
        }

    }
    return returnVal;
}