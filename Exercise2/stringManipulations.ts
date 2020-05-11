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

}

let samplePara = "He climbed up a tree and watched the forty horsemen. The men had saddlebags full of gold and they took them to a big rock. One of the men cried, ‘Open, Sesame’, and a door in the rock opened and the man entered the cave. The others followed. After a while they came out and the leader cried, ‘Close, Sesame’."

let obj2 = new StringManipulations(samplePara);
console.log(`Occurances of A at indices : ${obj2.occuranceOfA()}`);
console.log(`Number of statements : ${obj2.numberOfStatements()}`);