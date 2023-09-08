
export default class Player
{
    constructor(symbol, isCurrentPlayer)
    {
        this.symbol = symbol;
        this.isCurrentPlayer = isCurrentPlayer;
    }

    getSymbol()
    {
        return this.symbol;
    }

    setSymbol(symbol)
    {
        this.symbol = symbol;
    }

    getIsCurrentPlayer()
    {
        return this.isCurrentPlayer;
    }

    setIsCurrentPlayer(isCurrentPlayer)
    {
        this.isCurrentPlayer = isCurrentPlayer;
    }
}

