let Pikachu = [
    {
        "id": 25,
        "name": "Pikachu",
        "gen": 1,
        "species": "Mouse Pokémon",
        "types": [
            "Electric"
        ],
        "abilities": [
            {
                "name": "Static",
                "description": "Contact with the Pokémon may cause paralysis.",
                "hidden": false
            },
            {
                "name": "Lightning Rod",
                "description": "Draws in all Electric-type moves to up Sp. Attack.",
                "hidden": true
            }
        ],
        "height": "0.4 m (1′04″)",
        "weight": "6.0 kg (13.2 lbs)",
        "mega": false,
        "baseStats": {
            "hp": 35,
            "attack": 55,
            "defense": 40,
            "spAtk": 50,
            "spDef": 50,
            "speed": 90
        },
        "training": {
            "evYield": "2 Speed",
            "catchRate": "190 (24.8% with PokéBall, full HP)",
            "baseFriendship": "50 (normal)",
            "baseExp": "112",
            "growthRate": "Medium Fast"
        },
        "breeding": {
            "gender": "50% male, 50% female",
            "eggGroups": [
                "Fairy",
                "Field"
            ],
            "eggCycles": "10 (2,314–2,570 steps)"
        },
        "sprite": "https://img.pokemondb.net/sprites/home/normal/pikachu.png"
    },
    {
        "number": 25,
        "name": "Partner Pikachu",
        "gen": 1,
        "species": "Mouse Pokémon",
        "types": [
            "Electric"
        ],
        "abilities": [],
        "height": "0.4 m (1′04″)",
        "weight": "6.0 kg (13.2 lbs)",
        "mega": false,
        "baseStats": {
            "hp": 45,
            "attack": 80,
            "defense": 50,
            "spAtk": 75,
            "spDef": 60,
            "speed": 120
        },
        "training": {
            "evYield": "2 Speed",
            "catchRate": "190 (24.8% with PokéBall, full HP)",
            "baseFriendship": "50 (normal)",
            "baseExp": "112",
            "growthRate": "Medium Fast"
        },
        "breeding": {
            "gender": "50% male, 50% female",
            "eggGroups": [],
            "eggCycles": "10 (2,314–2,570 steps)"
        },
        "sprite": "https://img.pokemondb.net/sprites/home/normal/pikachu-lets-go.png"
    }
]






class BaseStats {
    stats: {
        hp: number;
        attack: number;
        defense: number;
        spAtk: number;
        spDef: number;
        speed: number;

    }
    constructor(stats: BaseStats["stats"]) {
        this.stats = stats;
    }

    public getStats(): BaseStats["stats"] {
        return this.stats
    }



}

type PokemonType = {
    name: string,
    id: int | string,
}

class Pokemon {
    constructor(pokemon) {    
        this.name = pokemon.name
        this.id = pokemon.id
        this.type = pokemon.types
        this.img = pokemon.sprite


    }


    


}