import { NewItemInterface } from "./NewItemInterface";

const computeBackstagePassQuality = (quality: number, sellIn: number) => {
  if (sellIn <= 0) return 0;

  if (quality < 50) {
    if (sellIn < 6) {
      return Math.min(50, quality + 3);
    }
    if (sellIn < 11) {
      return Math.min(50, quality + 2);
    }
    return quality + 1;
  }
  return 50;
};

export class BackstagePass implements NewItemInterface {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  updateQuality = () => {
    const newQuality = computeBackstagePassQuality(this.quality, this.sellIn);
    this.sellIn = this.sellIn - 1;
    this.quality = Math.min(50, newQuality);
  };

  generateItemDetails = () => `\nName: ${this.name}\nQuality: ${this.quality}\n`;
}
