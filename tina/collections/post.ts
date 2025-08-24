import { Collection } from "tinacms";

const Post: Collection = {
  name: "post",
  label: "Posts",
  path: "content/posts",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
  name: "featured_image",
  label: "featured_image",
  type: "image",
  required: true,
},
        {
      type: "rich-text",
      name: "description",
      label: "Description",
      isBody: false,
      
    },
    {
      type: "datetime",
      label: "Date",
      name: "date",
    },
    {
      type: "boolean",
      name: "draft",
      label: "Draft",
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
      
    },
    {
      type: 'string',
      name: 'tags',
      label: 'Tags',
      description: 'Tags for this post',
      list: true,
      ui: {
        component: 'tags',
      },
    }
  ],
};

export default Post;


    