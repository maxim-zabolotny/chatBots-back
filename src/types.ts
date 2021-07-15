export interface ICreateDogImgProps {
    width: string;
    height: string;
}

export interface IGetImgFromApiResponse {
    url: string;
    fileSizeBytes: number;
}

export interface IGenerateImgResponse {
    url: string;
    fileSizeBytes: number;
}

export interface IDogImg {
    url: string,
    fileSizeBytes: number,
    width: string,
    height: string,
}
