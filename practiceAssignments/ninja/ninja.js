class Ninja
{
    constructor(name, health = 90, speed = 3, strength = 3)
    {
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
    }

    sayName()
    {
        console.log(this.name + '\n');
    }
    showStats()
    {
        console.log(`Name: ${this.name}\nStrength: ${this.strength}\nSpeed: ${this.speed}\nHealth: ${this.health}\n`);
    }
    drinkSake()
    {
        this.health += 10;
        console.log(`Sake warms your blood and increases your vigor! Your health is now ${this.health}\n`);
    }
}

const Haru = new Ninja("Chris", 100, 2, 99);
Haru.sayName()
Haru.showStats()
Haru.drinkSake()



