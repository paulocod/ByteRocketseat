import { Request, Response } from "express";
import { ListAllAdsUseCase } from "./listAllUseCase";

export class ListAllAdsController {
  constructor(
    private listAllAdsUseCase: ListAllAdsUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    try {
      const ads = await this.listAllAdsUseCase.execute({
        id
      })
      return response.status(201).send(ads)

    } catch (err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}