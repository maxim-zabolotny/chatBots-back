import fetch from "node-fetch";

import { ICreateDogImgProps, IGenerateImgResponse, IGetImgFromApiResponse, IDogImg } from "../types";
import Dog from "./Dog";
import {isPhoto} from "../utils/utils";

class DogService {
    async getDogsImages(resize: ICreateDogImgProps): Promise<IDogImg[]> {
        const images: IDogImg[] = await Dog.find({
            width: resize.width,
            height: resize.height,
        });
        console.log(images);
        return images;
    }

    async generateImg(): Promise<IGetImgFromApiResponse> {
        let img: IGetImgFromApiResponse
        do {
            const res = await fetch('https://random.dog/woof.json');
            img = await res.json();
            if(!isPhoto(img.url)) {
                await this.generateImg()
            }
        } while (!isPhoto(img.url))

        return img
    }

    async createDogImg(resize: ICreateDogImgProps): Promise<IGenerateImgResponse> {
        const img = await this.generateImg()
        return  await Dog.create({...resize, ...img});
    }
}

export default new DogService();
