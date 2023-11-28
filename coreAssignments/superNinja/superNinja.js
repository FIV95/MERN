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
        console.log(`Name: ${this.name}\nStrength: ${this.strength}\nSpeed: ${this.speed}\nHealth: ${this.health}`);
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

class Sensei extends Ninja
{
    constructor(name, health = 200, speed = 3, strength = 3, wisdom = 10)
    {
        super(name, health, speed, strength)
        this.wisdom = wisdom
    }

    speakWisdom()
    {
        console.log(`Vim, swift and precise\nIn command mode, code takes flight,\nEscape, then we write.`)
    }
    // ?? Altering showStats
    showStats()
    {
        // Calling the ninja showStats
        super.showStats();
        // additional behavior
        console.log(`Wisdom: ${this.wisdom}\n`);
    }
}

const splinter = new Sensei(`Splinter`, undefined, 5, 5, undefined);
splinter.showStats()
splinter.speakWisdom();
