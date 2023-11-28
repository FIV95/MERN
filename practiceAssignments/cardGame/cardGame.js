class Card
{
    constructor(name,cost)
    {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card
{
    constructor(name,cost,power,res)
    {
        super(name,cost);
        this.power = power;
        this.res = res;
    }

    attack( target )
    {
        target.res -= this.power
        console.log(`${this.name} attacked ${target.name} for ${this.power} points of damage. ${target.name} has only ${target.res} resiliance left.`)
    }

    die()
    {
        console.log(`${this.name} has been removed from the board.`)
    }
}

class Effect extends Card
{
    constructor(name, cost, effect, stat, magnitude)
    {
        super(name,cost);
        this.effect = (effect === `increase`) ? 1 : 0;
        this.stat = (stat === `res`) ? 'res' : 'power'
        this.magnitude = magnitude;
    }

    activate( target )
    {
        if (target instanceof Unit)
        {
        (this.effect === 1) ? console.log(`\n${this.name} will increase the ${this.stat} by ${this.magnitude}\n${this.name} was used on ${target.name}`) : console.log(`${this.name} will decrease the ${this.stat} by ${this.magnitude}\n${this.name} was used on ${target.name}\n\n`)
        if (this.stat === `res`)
        {
            if (this.effect === 0)
            {
                target.res -= this.magnitude
            }
            else if (this.effect === 1)
            {
                target.res += this.magnitude
            }
        }
        else if (this.stat === 'power')
        {
            if (this.effect === 0)
            {
                target.power -= this.magnitude
            }
            else if (this.effect === 1)
            {
                target.power += this.magnitude
            }
        }
        console.log(`The resiliance of ${target.name} is now ${target.res}\nThe power of ${target.name} is now ${target.power}\n\n`)
        }
    else
        {
    throw new Error ( `Target Must be a unit! `);
        }
    }
}

const redBeltNinja = new Unit(`Red Belt Ninja`, 3, 3, 4)
const blackBeltNinja = new Unit(`Black Belt Nina`, 4, 5, 4)
const hardAlgo = new Effect(`Hard Algorithm`, 2, `increase`,`res`,2)
const unhandledPromiseRejection = new Effect(`Unhandled Promise Rejection`, 1, 0, `res`,2)
const pairProgramming = new Effect (`Pair Programming`, 3, `increase`, 'power', 2)

hardAlgo.activate(redBeltNinja)
unhandledPromiseRejection.activate(redBeltNinja)
pairProgramming.activate(redBeltNinja)
redBeltNinja.attack(blackBeltNinja)