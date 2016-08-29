```json
{
  currentUser: {
    id: 1,
    email: "test@email.com"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createCollection: {errors: ["name can't be blank"]}
  },
  feeds: {
    1: {
      title: "Sample Feed",
      url: "samplefeed.com",
      category_id: 1,
      category_name: "Android",
      articles: {
        1: {
          title: "ARticle Title",
          summary: "Summary of the article",
          image: "image_url?",
          url: "blog.com/article1",
          published: "date published",
          source: "Sample Feed"
        }
      }
      collections: {
        1: {
          id: 1
          name: "MyCollection"
        }
      }
    }
  },
  categories: {
    1: {
      title: "Android",
      sources: {
        1: {
          title: "blog title",
          url: "blog.com",
          image: "image_url?"
        }
      }
    }
  }
}
```
