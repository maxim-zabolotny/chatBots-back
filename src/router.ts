import express from 'express'
import DogController from './dogs/Dogs.controller'

const router = express.Router()

router.get('/list/dog/images', DogController.getDogsImages)
router.post('/upload/dog/image', DogController.createDogImg)

export default router;
