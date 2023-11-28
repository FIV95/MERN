let canAfford = (itemPrice, accoutnBalance) =>
    {
        return itemPrice > accoutnBalance ?
        `Cannot afford! You are $${itemPrice - accoutnBalance} short`
        : `Can afford!`;
    };

console.log(canAfford(100, 50));