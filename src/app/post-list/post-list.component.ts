import { Component, OnInit } from '@angular/core';
import { PostService, Post } from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html'
})
export class PostListComponent implements OnInit {
  articles: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getArticles().subscribe((data) => {
      this.articles = data;
    });
  }

  createNewArticle() {
    const newArticle: Post = {
      title: 'New Title',
      description: 'New description',
      author: 'Someone'
    };

    this.postService.addArticle(newArticle).subscribe((res) => {
      console.log('Created!', res);
      this.articles.push(res);
    });
  }
}
