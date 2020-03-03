
let longestWord = "";
function longWord(str)
{
    let words=str.split(" ");
    for(i=0;i<words.length;i++)
    {
        if(longestWord.length < words[i].length)
        {
            longestWord = words[i];
        }
    }
    console.log("Longestword : "+longestWord+" with length : "+longestWord.length);
}

longWord("ASDRFTYUIasdftyuiOPQWETRYUIO");