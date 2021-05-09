import Layout from "../components/Layout";
import StoryblokService from "../utils/storyblok-service";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: props.res.data.stories,
    };
  }

  static async getInitialProps({ query }) {
    StoryblokService.setQuery(query);

    const res = await StoryblokService.get("cdn/stories", {
      starts_with: "blog/",
    });

    return {
      res,
    };
  }

  componentDidMount() {
    StoryblokService.initEditor(this);
  }

  render() {
    const posts = this.state.stories;

    return (
      <Layout>
        <main className="container mx-auto">
          <h1 className="text-5xl font-bold font-serif text-primary tracking-wide pt-12">
            All Posts
          </h1>
          <ul className="flex">
            {posts.map((post) => {
              const lang = post.lang === "default" ? "/en" : `/${post.lang}`;

              return (
                <li key={post.content._uid} className="pr-8 w-1/3">
                  <a
                    href={`${lang}/blog/${post.slug}`}
                    className="py-16 block transition hover:opacity-50"
                  >
                    <img src={post.content.image} className="pb-10 w-full" />
                    <h2 className="pb-6 text-lg font-bold">
                      {post.content.title}
                    </h2>
                    <p className="pb-6 text-gray-700 leading-loose">
                      {post.content.intro}
                    </p>
                  </a>
                </li>
              );
            })}
          </ul>
        </main>
      </Layout>
    );
  }
}
