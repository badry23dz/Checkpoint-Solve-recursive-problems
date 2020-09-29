const palindrom = (word) => {
  if( word.length == 1 || word.length == 0){
    return true
    }
  if (word[0]=== word[word.length-1]){
    word = word.split("")
    word.pop()
    word.shift()
    return palindrom(word)
    } else { 
    return false }
  }
