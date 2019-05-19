import { Type, plainToClass } from 'class-transformer';
import 'reflect-metadata';

class Album {
  id: number;
  name: string;

  @Type(() => Photo)
  photos: Photo[];
}

class Photo {
  id: number;
  filename: string;
}

const albumJson = {
  id: 4,
  name: 'my album',
  photos: [
    {
      id: 1,
      filename: 'photo1',
    },
    {
      id: 2,
      filename: 'photo2',
    },
  ]
};

const album = plainToClass(Album, albumJson);

console.log(album instanceof Album, album);
