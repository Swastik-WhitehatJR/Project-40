class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.score =0;
    }
    
    getCount() {
        var playerCountRef = database.ref('Project40/playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('Project40/').update({
            playerCount: count
        });
    }

    update() {
        var playerIndex = "Project40/players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            score:this.score
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('Project40/players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }

    removePlayers(){
        var playerInfoRef = database.ref('Project40/players');
            playerInfoRef.remove();
    }


}