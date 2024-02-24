import { Module } from "@nestjs/common";
import { ArticleController } from "./article.controller";
import { ArticleService } from "./article.service";
import { ConfigurationModule } from "src/configuration/configuration.module";
import { DateUtils } from "src/utils/date.utils";

@Module({
    exports: [ArticleService],
    imports: [ConfigurationModule],
    controllers: [ArticleController],
    providers: [ArticleService, DateUtils],
  })
  export class ArticleModule {}
