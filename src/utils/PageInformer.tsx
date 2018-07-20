export default abstract class PageInformer {
  public static setPageInfo(title?: string, description: any = '') {
    if (title) {
      document.querySelector('title').text = title + ' | MOBA'
    }
    if (!PageInformer.pageDescriptionSelector) {
      PageInformer.pageDescriptionSelector = document.querySelector(
        '.page-description'
      ) as HTMLDivElement
    }
    document
      .querySelector('meta[name="description"]')
      .setAttribute('content', description)
    PageInformer.pageDescriptionSelector.innerText = description
  }
  private static pageDescriptionSelector?: HTMLDivElement
}
