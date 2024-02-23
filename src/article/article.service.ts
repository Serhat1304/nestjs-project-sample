import { Injectable } from '@nestjs/common';
import { Article } from './model/article';
import * as fs from 'fs'

@Injectable()
export class ArticleService {
  private readonly articles: Article[];
  private readonly jsonFilePath: string = "C:/Users/serha/Desktop/Alternance/Efrei/Semestre-2/NestJS/nestjs-project-sample/src/data/articles.json";

  constructor() {
    this.articles = this.loadFromJson(this.jsonFilePath);

  }

  createArticle(article: Article): Article {
    article.createdAt = new Date();
    this.articles.push(article);
    this.saveToJson();
    return article;
  }

  getArticle(articleName: string): Article {
    return this.articles[articleName];
  }

  getAllArticles(): Article[] {
    return Object.values(this.articles);
  }

  private loadFromJson(filePath: string): Article[] {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  }

  private saveToJson(): void {
    const jsonData = JSON.stringify(this.articles, null, 2);
    fs.writeFileSync(this.jsonFilePath, jsonData, 'utf-8')
  }

}
