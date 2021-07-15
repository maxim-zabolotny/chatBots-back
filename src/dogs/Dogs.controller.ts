import { Response, Request } from "express";
import { ICreateDogImgProps } from "../types";
import DogService from "./Dogs.service";

class DogsController {
    async getDogsImages(req: Request, res: Response) {
        try {
            const { height, width } = req.query;
            const queryParams: ICreateDogImgProps = {
                height: String(height),
                width: String(width),
            };
            const dogs = await DogService.getDogsImages(queryParams)
            res.json(dogs)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async createDogImg({body}: Request, res: Response) {
        try {
            const dog = await DogService.createDogImg(body)
            res.json(dog)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new DogsController();
