export class Serie {
    id: number;
    name: string;
    seasons: number;
    channel: string;
    description: string;
    link: string;
    image: string;
  
    constructor(id: number, name: string, channel: string, seasons: number, description: string, link: string, image: string) {
      this.name = name;
      this.seasons = seasons;
      this.channel = channel;
      this.id = id;
      this.description = description;
      this.link = link;
      this.image = image;
    }
}