import bicycleImage from "@assets/images/cover/bicycle.jpg";
import bookImage from "@assets/images/cover/book.jpg";
import cameraImage from "@assets/images/cover/camera.jpg";
import cleanImage from "@assets/images/cover/clean.jpg";
import coffeeImage from "@assets/images/cover/coffee.jpg";
import diyImage from "@assets/images/cover/diy.jpg";
import gameImage from "@assets/images/cover/game.jpg";
import kadenImage from "@assets/images/cover/kaden.jpg";
import movieImage from "@assets/images/cover/movie.jpg";
import otherImage from "@assets/images/cover/other.jpg";
import pcImage from "@assets/images/cover/pc.jpg";
import sleepImage from "@assets/images/cover/sleep.jpg";
import smartphoneImage from "@assets/images/cover/smartphone.jpg";
import stationeryImage from "@assets/images/cover/stationery.jpg";
import trainingImage from "@assets/images/cover/training.jpg";

export const COVER_IMAGE_MAP = {
  bicycle: bicycleImage,
  book: bookImage,
  camera: cameraImage,
  clean: cleanImage,
  coffee: coffeeImage,
  diy: diyImage,
  game: gameImage,
  kaden: kadenImage,
  movie: movieImage,
  other: otherImage,
  pc: pcImage,
  sleep: sleepImage,
  smartphone: smartphoneImage,
  stationery: stationeryImage,
  training: trainingImage,
} as const;

export type CoverImageType = keyof typeof COVER_IMAGE_MAP;

/**
 * カテゴリのカバーイメージを取得する
 * @param string カテゴリー
 * @returns 対象のカバーイメージ（otherでフォールバックするようになっている）
 */
export const getCoverImage = (category: string) => {
  const key = category as CoverImageType;
  return COVER_IMAGE_MAP[key] ?? otherImage;
};
