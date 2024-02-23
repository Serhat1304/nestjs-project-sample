import { AppService } from './app.service';
import { ConfigurationService } from './configuration/configuration.service';
import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { Article } from './article/model/article';
import { ArticleService } from './article/article.service';

@Controller()
export class AppController {
  constructor(
    private appService: AppService,
    private configService: ConfigurationService,
    private articleService: ArticleService,
  ) {}

  @Get('number/:number')
  addTenToGivenNumber(@Param('number', ParseIntPipe) number: number): number {
    return number + 10;
  }

  @Get('environment')
  getEnvironment(): string {
    return this.configService.getValue('environment');
  }

  @Get('article/:articleName')
  getUser(@Param('articleName') articleName: string): Article {
    return this.articleService.getArticle(articleName);
  }

}