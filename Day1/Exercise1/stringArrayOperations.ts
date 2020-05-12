class StringArrayOperations {
    names : Array<string>;
    constructor(names: Array<string>) {
        this.names = names;
    }

    sortNamesByLength(): Array<string> {
        return this.names.sort((a,b) => {
            return a.length - b.length;
        });
    }

    reverseNames(): Array<string> {
        return this.names.reverse();
    }
}

let obj = new StringArrayOperations(["Nicholas","John","Adam","Rey"]);
console.log(`Sorted Names : ${obj.sortNamesByLength()}`);
console.log(`Reverse Names : ${obj.reverseNames()}`);