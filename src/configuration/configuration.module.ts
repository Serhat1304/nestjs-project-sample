import { ConfigurationService } from './configuration.service';
import { DynamicModule, Module } from '@nestjs/common';

@Module({})
export class ConfigurationModule {
  static register(options: Record<string, string>): DynamicModule {
    return {
      module: ConfigurationModule,
      providers: [
        {
          provide: ConfigurationService,
          useValue: new ConfigurationService(options),
        },
      ],
      exports: [ConfigurationService],
    };
  }


  //Cette méthode peut être utile lorsque j'aurai besoin de créer des modules sans config
  //spécifique lors de TU par exemple
  static withoutConfig(): DynamicModule {
    return {
      module: ConfigurationModule,
      providers: [ConfigurationService],
      exports: [ConfigurationService],
    };
  } 
}