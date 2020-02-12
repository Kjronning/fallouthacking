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

    let dropdown = document.getElementById("lengthDropdown");
    let option;
    for (let i=4;i<=13;i++){
        option = document.createElement('option');
        option.text = i.toString();
        option.value = i.toString();
        dropdown.add(option);
    }

    let text = document.getElementById("text");
    dropdown.onchange = function(){
        let length = dropdown.selectedIndex;
        text.innerHTML = dictionaries[length];
    }
})();