class snake {
    constructor (size) {
        this.x = 0;
        this.y = 0;
        this.size = size;
        this.blocks = [];
        this.addBlock(this.x, this.y);
        this.alive = true;
    }

    addBlock(x, y){
      const head = new Blocks(x, y, this.blockSize);
      this.blocks.push(block);
    }

    moveHead(){
        const head = this.block[0];
        head.oldX = head.x;
        head.oldY = head.y;
        switch(currentDirection){
            case 'left' :
                head.x -= 1;
                break;
            case 'right' :
                head.x += 1;
                break   
            case 'up' :   
                head.y -= 1;
                break
            case 'down' :
                head.y += 1;
            default :
                break;                  
        }
        head.teleportIfOutOfMap();
    }

    calculateBlockPosition(){
        let {x, y} = this.blocks[this.blocks.length - 1];
        switch (currentDirection) {
            case 'left' :
                x += 1;
                break;
            case 'right' :
                x -= 1;
                break;
            case 'up' :
                y += 1;
                break;
            case 'down' :
                default:
                    break;           
        }
        return {x, y};
    }

    eat(){
        const head = this.blocks[0];
        if (head.x === food.x && head.y === food.y){
            food;setRandomPosition();
            const {x, y} = this.calculateNewBlockPosition();
            this.addBlock(x, y);
        }
    }

    blockTouchHead(block){
        const head = this.blocks[0];
        const headX = head.x;
        const headY = head.y;

        return (headX === block.x && headY === block.y);
    }

    update (){
        this.moveHead();
        this.eat();
        for  ( const [index, block] of this.blocks.entries()){
            if (snake > 0){
                const {oldX, oldY} = this.blocks[index - 1];
                block.setPosition(oldX, oldY);
                if (this.blockTouchHead(block)){
                    this.alive = false;
                }
            }
            block.draw();
        }
    }
}