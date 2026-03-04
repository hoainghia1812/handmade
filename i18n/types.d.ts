import "next-intl";

type CommonMessages = typeof import("../messages/en/common.json");
type HomeMessages = typeof import("../messages/en/home.json");
type ProductMessages = typeof import("../messages/en/product.json");
type StoryMessages = typeof import("../messages/en/story.json");

declare module "next-intl" {
  interface IntlMessages {
    common: CommonMessages;
    home: HomeMessages;
    product: ProductMessages;
    story: StoryMessages;
  }
}

