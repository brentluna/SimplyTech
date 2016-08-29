## Component Hierarchy


* **App**
  * Header
  * Sidebar
  * **SignInIndex**
    * SignInForm
  * **FeedsIndex**
    * FeedIndexItems
      * FeedIndexItemDetail(popout reader)
    * CollectionIndex
      * CollectionItem
        * CollectionItemDetail(single RSS feed)
  * **CollectionsIndex**
    * CollectionsIndexItem
  * **CategoryIndex**
    * CategoryIndex Item

## Routes


* **component:** `App` **path:** `/`
  * **component:** `FeedsIndex` **path:** 'index'
    * **component:** `FeedsIndexItemDetail` **path:** 'index/:urlId'
  * **component:** `CollectionIndex` **path:** `collections`
    * **component:** `CollectionItem` **path:** `collections/:collectionId`
  * **component:** `CategoriesIndex` **path:** `categories`
    * **component:** `CategoriesIndexItem` **path:** `categories/:categoryID`
