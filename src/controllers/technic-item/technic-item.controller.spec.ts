import { Test, TestingModule } from '@nestjs/testing';
import { TechnicItemController } from './technic-item.controller';

describe('TechnicItemController', () => {
  let controller: TechnicItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TechnicItemController],
    }).compile();

    controller = module.get<TechnicItemController>(TechnicItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
