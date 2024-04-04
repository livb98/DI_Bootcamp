function anagram(string1,string2){
   let newstring1 = string1.split("",' ')
   let newstring2 = string2.split("", ' ')
   console.log(newstring1,newstring2);
   newstring1.sort();
   newstring2.sort(); 
   if (newstring1.join('') === newstring2.join('')) {
    return true; 
 } else {
    return false; 
 }
}

string1 = 'Astronomer'
string2 = 'Moon starer'

console.log(anagram(string1,string2))