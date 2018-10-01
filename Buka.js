class Buka{
    
    constructor(world, params){
        Object.assign(this, params);

        var heroBody = document.createElement('div');
        heroBody.classList.add('hero');

        this.heroBody = heroBody;
        world.appendChild(heroBody);
    }

    move(direction){
        this.direction = direction;
    }

    updatePosition(){
        if (this.direction === 'LEFT') {
            this.position.x -= 5;
        }
        if (this.direction === 'RIGHT') {
            this.position.x += 5;
        }
        if (this.direction === 'DOWN') {
            this.height = 200;
        }
        if (this.direction === 'LEFT') {
            this.height = 400;
        }
    }

    render(){
        var heroBody = this.heroBody;

        if (this.direction === 'LEFT') {
            heroBody.style.marginLeft = this.position.x + 'px';
        }
        if (this.direction === 'RIGHT') {
            heroBody.style.marginLeft = this.position.x + 'px';
        }

        heroBody.style.height = this.height + 'px';
        heroBody.style.width = this.width + 'px';
    }
}