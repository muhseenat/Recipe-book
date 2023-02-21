export class RecipeModel {
  public name: string;
  public category: string;
  public description: string;
  public imagePath: string;

  constructor(
    name: string,
    category: string,
    description: string,
    imagePath: string
  ) {
    this.name = name;
    this.category = category;
    this.description = description;
    this.imagePath = imagePath;
  }
}
