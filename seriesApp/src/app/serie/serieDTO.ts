export class SerieDTO {
    id: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    webpage: string;
    poster: string;
    
    constructor(id: number,
        name: string,
        channel: string,
        seasons: number,
        description: string,
        webpage: string,
        poster: string) 
    {
        this.seasons=seasons;
        this.description=description;
        this.webpage=webpage;
        this.name=name;
        this.channel=channel;
        this.poster=poster;
        this.id=id;
    }

    public getName(): string {
        return this.name;
    }

    public getDescription(): string {
        return this.description;
    }

    public getWebpage(): string {
        return this.webpage;
    }

    public getChannel(): string {
        return this.channel;
    }

    public getSeasons(): number {
        return this.seasons;
    }
    
    public getId(): number {
        return this.id;
    }

    public getPoster(): string {
        return this.poster;
    }
}

