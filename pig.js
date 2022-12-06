function translate(str) {
    pigLatin = str.toLowerCase();
    let vowels = ["a","e","i","o","u"];

    if(vowels.indexOf(pigLatin[0]) > -1) {
        return pigLatin + "way";
    } else {
        for (var i=0; i < pigLatin.length; i++) {
            if (vowels.includes(pigLatin[i])) {
              let xyz = pigLatin.slice(0,i);
              let abc = pigLatin.slice(i, pigLatin.length);
            return abc + xyz + "ay";
            }
        }
    }

}








module.exports = {translate};
