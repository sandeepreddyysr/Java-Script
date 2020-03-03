function removeFromHead(arr,excess){
    arr.splice(0,excess);

    return arr;
}

console.log(removeFromHead(["f","d","mi","apple","oneplus"],2));
