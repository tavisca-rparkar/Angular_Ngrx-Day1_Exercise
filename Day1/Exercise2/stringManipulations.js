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
    StringManipulations.prototype.numberOfStatements = function () {
        return this.paragraph.split('.').length - 1;
    };
    StringManipulations.prototype.convertFirstCharToUppercase = function () {
        var splitStatement = this.paragraph.split('.');
        for (var i = 0; i < splitStatement.length; i++) {
            splitStatement[i] = splitStatement[i].trim();
            splitStatement[i] = splitStatement[i].charAt(0).toUpperCase() + splitStatement[i].substring(1);
        }
        return splitStatement.join('. ');
    };
    return StringManipulations;
}());
var samplePara = "he climbed up a tree and watched the forty horsemen. the men had saddlebags full of gold and they took them to a big rock. one of the men cried, ‘Open, Sesame’, and a door in the rock opened and the man entered the cave. the others followed. after a while they came out and the leader cried, ‘Close, Sesame’.";
var obj2 = new StringManipulations(samplePara);
console.log("\nOccurances of A at indices : " + obj2.occuranceOfA());
console.log("\nNumber of statements : " + obj2.numberOfStatements());
console.log("\nAfter uppercasing first char of statements : " + obj2.convertFirstCharToUppercase());
