var StringManipulations = /** @class */ (function () {
    function StringManipulations(paragraph) {
        this.paragraph = paragraph;
    }
    StringManipulations.prototype.occuranceOfA = function () {
        var indices = new Array();
        for (var i = 0; i < this.paragraph.length; i++) {
            if (this.paragraph[i] === "a" || this.paragraph[i] === "A") {
                indices.push(i);
            }
        }
        return indices;
    };
    return StringManipulations;
}());
var samplePara = "He climbed up a tree and watched the forty horsemen. The men had saddlebags full of gold and they took them to a big rock. One of the men cried, ‘Open, Sesame’, and a door in the rock opened and the man entered the cave. The others followed. After a while they came out and the leader cried, ‘Close, Sesame’.";
var obj2 = new StringManipulations(samplePara);
console.log("Occurances of A at indices : " + obj2.occuranceOfA());
