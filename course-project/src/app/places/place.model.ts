/* This is a model for the data that will be used in _places */

export class Place {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public imageUrl: string,
    public price: number,
  ) {}
}
