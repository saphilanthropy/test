import HomePage from "../components/HomePage";
import { getContent } from "../lib/content";

const content = getContent("en");

export const metadata = {
  title: content.meta.title,
  description: content.meta.description,
};

export default function Home() {
  return <HomePage content={content} locale="en" />;
}
