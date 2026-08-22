class RandomizedSet {
    private set: Set<number>;

    constructor() {
        this.set = new Set<number>();
    }

    insert(val: number): boolean {
        const isExist = this.set.has(val);
        if(!isExist){
            this.set.add(val);
            return true; 
        }else{
            return false;
        }
    }

    remove(val: number): boolean {
        const isExist = this.set.has(val);
        if(isExist){
            this.set.delete(val);
            return true;
        }else{
            return false;
        }
    }

    getRandom(): number {
       const values = [...this.set];
       const random = Math.floor(Math.random() * values.length);
       return values[random];
       
    }
}