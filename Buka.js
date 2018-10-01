class Buka{
    
    constructor(world, params){
        Object.assign(this, params);

        var heroBody = document.createElement('div');
        heroBody.classList.add('hero');
        heroBody.innerHTML = '<div class="heroEyeLine"><div class ="heroEye"></div><div class ="heroEye"></div></div>';

        this.heroBody = heroBody;
        this.heroEyeLine = heroBody.querySelector('.heroEyeLine');
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
        if (this.direction === 'UP') {
            this.height = 400;
        }
        
        document.querySelectorAll('.foodItem').forEach(foodItem => {
            var foodStyle = window.getComputedStyle(foodItem);

            var x = parseFloat(foodStyle.left);
            var y = parseFloat(foodStyle.bottom);

            if (y < this.height) {
                if (x > this.position.x && x < this.position.x + this.width) {
                    foodItem.remove();
                    this.width += 10;
                }
            }
        });
        
    }
    render(){
        var heroBody = this.heroBody;
        var heroEyeLine = this.heroEyeLine;
        
        if (this.direction === 'LEFT') {
            heroEyeLine.style.pagginLeft = '0px';
            heroEyeLine.style.pagginRight = '40px';
            heroBody.style.marginLeft = this.position.x + 'px';
        }
        if (this.direction === 'RIGHT') {
            heroEyeLine.style.pagginLeft = '40px';
            heroEyeLine.style.pagginRight = '0px';
            heroBody.style.marginLeft = this.position.x + 'px';
        }
        if (this.direction === 'NONE') {
            heroEyeLine.style.pagginLeft = '20px';
            heroEyeLine.style.pagginRight = '20px';
        }

        heroBody.style.height = this.height + 'px';
        heroBody.style.width = this.width + 'px';
    }
}