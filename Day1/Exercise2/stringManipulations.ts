class StringManipulations {
    paragraph:string;
    constructor(paragraph: string) {
        this.paragraph = paragraph;
    }

    occuranceOfA(): Array<number> {
        let indices: Array<number> = new Array<number>();
        for(let i=0; i<this.paragraph.length;i++) {
            if (this.paragraph[i] === "a" || this.paragraph[i] === "A") 
            {
                indices.push(i);
            }
        }
        return indices;
    }

    numberOfStatements(): number {
        return this.paragraph.split('.').length - 1;
    }

    convertFirstCharToUppercase(): string {
        let splitStatement = this.paragraph.split('.');
        for(let i=0; i<splitStatement.length; i++){
            splitStatement[i] = splitStatement[i].trim();
            splitStatement[i] = splitStatement[i].charAt(0).toUpperCase() + splitStatement[i].substring(1);
        }
        return splitStatement.join('. ');
    }

}

let samplePara = "he climbed up a tree and watched the forty horsemen. the men had saddlebags full of gold and they took them to a big rock. one of the men cried, ‘Open, Sesame’, and a door in the rock opened and the man entered the cave. the others followed. after a while they came out and the leader cried, ‘Close, Sesame’."

let obj2 = new StringManipulations(samplePara);
console.log(`\nOccurances of A at indices : ${obj2.occuranceOfA()}`);
console.log(`\nNumber of statements : ${obj2.numberOfStatements()}`);
console.log(`\nAfter uppercasing first char of statements : ${obj2.convertFirstCharToUppercase()}`);