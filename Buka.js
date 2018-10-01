class Buka {
    constructor(world, params) {
        Object.assign(this, params)

        var heroBody = document.createElement('div');
        heroBody.classList.add('hero');
        heroBody.innerHTML = '<div class="heroEyeLine"> <div class="heroEye"></div> <div class="heroEye"></div></div>';
        // heroBody.innerHTML = '<div class="hero__eyeline"><div class="hero__eye"></div><div class="hero__eye"></div></div>';
        
        this.heroBody = heroBody;
        this.heroEyeLine = heroBody.querySelector('.heroEyeLine')

        world.appendChild(this.heroBody);
    }


    move(direction){
        this.direction = direction;
    }

    updatePosition() {
        if (this.direction === 'left') {
          this.position.x -= 5;
        }
        if (this.direction === 'right') {
          this.position.x += 5;
        }
        if (this.direction === 'down') {
          this.height = 100;
        }
        if (this.direction === 'up') {
          this.height = 200;
        }

        document.querySelectorAll('.foodItem').forEach(foodItem => {
            var foodStyle = window.getComputedStyle(foodItem);

            var x = parseFloat(foodStyle.left);
            var y = parseFloat(foodStyle.bottom);

            if (y < this.height) {
                if (x >= this.position.x && x <= this.position.x + this.width) {
                    foodItem.remove();
                    this.width += 10;
                    this.height +=2;
                }
            }
        })
    }    

    render(){
        var heroBody = this.heroBody;
        var heroEyeLine = this.heroEyeLine;

        if (this.direction === 'left') {
            heroEyeLine.style.paddingLeft = '0px';
            heroEyeLine.style.paddingRight = '40px';
            heroBody.style.marginLeft = this.position.x + 'px';
        }
        if (this.direction === 'right') {
            heroEyeLine.style.paddingLeft = '40px';
            heroEyeLine.style.paddingRight = '0px';
            heroBody.style.marginLeft = this.position.x + 'px';
        }
        if (this.direction === 'none') {
            heroEyeLine.style.paddingLeft = '20px';
            heroEyeLine.style.paddingRight = '20px';
        }

        heroBody.style.height = this.height + 'px';
        heroBody.style.width = this.width + 'px';
    }
}