Vue.component('hello', {
    template: '<p>hello world</p>',
})
new Vue({
    el: '#app',
    data: {
        healthPlayer: 100,
        healthMonster: 100,
        gameIsRunning: false,
        title: 'Vuejs 2'
    },

    methods: {
        changTitle: function(){
            this.title = 'Vuejs 3';
            this.$refs.info.innerText = 'Change';
        },

        runningGame: function () {
            this.gameIsRunning = true,
                this.healthMonster = 100,
                this.healthPlayer = 100
        },

        returnGame: function () {
            this.gameIsRunning = false,
                this.healthMonster = 100,
                this.healthPlayer = 100
        },

        attack: function () {
            //player

            this.healthPlayer -= this.allAttack(5, 12);

            //monster

            this.healthMonster -= this.allAttack(4, 10);

            this.checkOptions();
        },

        specialAttack: function () {
            //player

            this.healthPlayer -= this.allAttack(8, 20);

            //monster

            this.healthMonster -= this.allAttack(8, 22);

            this.checkOptions();
        },

        heal: function () {
            this.checkHealth();
        },

        giveUp: function () {
            return this.returnGame();
        },

        allAttack: function (minDamage, maxDamage) {
            return damage = Math.max(Math.floor(Math.random() * maxDamage) + 1, minDamage);
        },

        checkOptions: function () {
            if (this.healthPlayer <= 0) {
                if (confirm('You Win!, New Game?')) {
                    return this.runningGame();
                } else {
                    return this.gameIsRunning = false;
                }
            } else if (this.healthMonster <= 10) {
                if (confirm('You Lose!, New Game?')) {
                    return this.runningGame();
                } else {
                    return this.gameIsRunning = false;
                }
            }
            return;
        },

        checkHealth: function(){
            if(this.healthPlayer >= 70){
                return;
            }else if(this.healthPlayer <= 60){
                this.healthPlayer += 10;
            }

            if(this.healthMonster >= 70){
                return;
            }else if(this.healthMonster <= 60){
                this.healthMonster += 10;
            }
        }

    }
});