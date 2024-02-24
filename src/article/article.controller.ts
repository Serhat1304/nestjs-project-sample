import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article } from './model/article';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  createArticle(@Body() article: Article): Article {
    return this.articleService.createArticle(article);
  }

  @Get(':articleName')
  getArticle(@Param('articleName')articleName: string): Article {
    return this.articleService.getArticle(articleName);
  }

  @Get()
  getAllArticles(): Article[] {
    return this.articleService.getAllArticles();
  }
}
