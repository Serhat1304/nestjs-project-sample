import { Module } from "@nestjs/common";
import { ArticleController } from "./article.controller";
import { ArticleService } from "./article.service";
import { ConfigurationModule } from "src/configuration/configuration.module";

@Module({
    exports: [ArticleService],
    imports: [ConfigurationModule],
    controllers: [ArticleController],
    providers: [ArticleService],
  })
  export class ArticleModule {}
