
(function(){
    let dictionary = [];
    let dictionaries = [];

    fetch("data/dictionary.txt").then( result =>{
         return result.text();
    }).then(result => {
        return result.split(" ");
    }).then(words => {
        words.forEach(word => {
            dictionary.push(word);
        })
    }).then(() => {
        for(let i=4;i<=13;i++) {
            dictionaries.push(getWordsOfSameLength(dictionary,i));
        }
        }).then(() => {

    });

    let getWordsOfSameLength = function(dictionary ,length){
        let lengthDictionary =  [];
        dictionary.forEach(word => {
            if(word.length === length)
                lengthDictionary.push(word);
        });
        return lengthDictionary;
    };

    function onWordClick() {

    }

    function createWordItem(text) {
        let span = document.createElement("div");
        span.classList.add("word");
        span.onclick = onWordClick;
        let word = document.createElement("p");
        word.innerHTML = text.toString();
        span.appendChild(word);
        return span;
    }


    let refreshWordList = function(){
        wordsDiv.innerHTML = "";
        let length = dropdown.selectedIndex;
        let dictionary = dictionaries[length];
        let words = [];
        let usedIndices = [];
        console.log(`dictionary length: ${dictionary.length}`);
        console.log("starting getting random indices");
        for(let i=0;i<10;i++){
            let index = Math.floor(Math.random()*dictionary.length);
            console.log(index);
            if(!(usedIndices.includes(index))){
                let word = dictionary[index];
                words.push(word);
                usedIndices.push(index);
                let wordItem = createWordItem(word);
                wordsDiv.appendChild(wordItem);
            }else{
                console.log(`index ${index} already used.`);
                i--;
            }
        }
        console.log(`ending getting random indices. List size: ${words.length}`);
    };

    let dropdown = document.getElementById("lengthDropdown");
    let option;
    for (let i=4;i<=13;i++){
        option = document.createElement('option');
        option.text = i.toString();
        option.value = i.toString();
        dropdown.add(option);
    }

    let wordsDiv = document.getElementById("words");
    dropdown.onchange = refreshWordList;


})();