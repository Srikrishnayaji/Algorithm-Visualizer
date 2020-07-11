/*
    Element in animation:
    {
        comparison: [j, j+1],
        comp_true: boolean,
    }

*/

const bubbleSort = (randArray, animations) => {
    for(let i = randArray.length-2; i >= 0; i--){
        for(let j = 0; j <= i; j++){
            let animation = {};
            animation["comparison"] = [j, j+1];
            animation["comp_true"] = false;
            if(randArray[j] > randArray[j+1]){
                animation["comp_true"] = true;
                let temp = randArray[j];
                randArray[j] = randArray[j+1];
                randArray[j+1] = temp;
            }
            animations.push(animation);
        }
    }
    animations.push({comparison:[0, 0], comp_true: false});
    return(animations);
}

export default bubbleSort;